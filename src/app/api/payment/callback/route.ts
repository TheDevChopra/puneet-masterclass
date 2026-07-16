import { NextResponse } from 'next/server';
import { PhonePeService } from '@/services/phonepe/phonepe';
import { submitRegistration } from '@/lib/googleSheets';
import { MetaWhatsAppService } from '@/services/whatsapp/meta';
import { EmailService } from '@/services/emails/resend';

export async function POST(req: Request) {
  try {
    const url = new URL(req.url);
    const phone = url.searchParams.get('p');
    const name = url.searchParams.get('n');
    const email = url.searchParams.get('e');

    const body = await req.json();
    const xVerify = req.headers.get('x-verify') || '';

    // 1. Verify Signature
    const isValid = PhonePeService.verifyCallback(body.response, xVerify);
    if (!isValid) {
      console.error('Invalid PhonePe signature');
      return NextResponse.json({ error: 'Invalid signature' }, { status: 400 });
    }

    // 2. Decode Payload
    const decodedPayload = JSON.parse(Buffer.from(body.response, 'base64').toString('utf-8'));
    const { code, transactionId } = decodedPayload.data;

    // 3. Determine Status
    const status = code === 'PAYMENT_SUCCESS' ? 'Paid' : 'Failed';
    
    // We need the phone number to identify the row in Google Sheets
    if (!phone) {
      console.error('Phone number missing from callback URL');
      return NextResponse.json({ error: 'Missing identifier' }, { status: 400 });
    }

    // 4. Update Google Sheets
    const updateResponse = await submitRegistration({
      action: 'update',
      phone: `+91${phone}`, // Restore the +91 that we stripped
      paymentStatus: status,
      transactionId: transactionId || '',
    });

    if (!updateResponse.success) {
      console.error('Failed to update Google Sheets:', updateResponse.message);
      // We still return 200 so PhonePe doesn't retry endlessly, but log the error.
      // In a real app we might want to return 500 so they retry, but Google Sheets might just be down.
    }

    // 5. Trigger Automations if Success
    if (status === 'Paid' && name) {
      try {
        const decodedName = decodeURIComponent(name);
        let whatsappStatus = 'Sent';
        
        // Dispatch WhatsApp and Email concurrently
        const emailPromise = email ? EmailService.sendConfirmation(decodeURIComponent(email), decodedName) : Promise.resolve(null);
        
        const [waResult, emailResult] = await Promise.allSettled([
          MetaWhatsAppService.sendConfirmation(`+91${phone}`, decodedName),
          emailPromise
        ]);

        if (waResult.status === 'rejected' || !waResult.value) {
          whatsappStatus = 'Failed';
        }

        // 6. Update Google Sheets with WhatsApp Status
        await submitRegistration({
          action: 'update',
          phone: `+91${phone}`,
          whatsappStatus: whatsappStatus,
        });
        
      } catch (automationError) {
        console.error('Automation dispatch error:', automationError);
        // Fallback update for failure
        await submitRegistration({
          action: 'update',
          phone: `+91${phone}`,
          whatsappStatus: 'Failed',
        });
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Callback Webhook Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
