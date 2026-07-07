import { NextResponse } from 'next/server';
import { PhonePeService } from '@/services/phonepe/phonepe';
import { createAdminClient } from '@/lib/supabase/server';
import { AiSensyService } from '@/services/aisensy/aisensy';
import { EmailService } from '@/services/emails/resend';

export async function POST(req: Request) {
  try {
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
    const { merchantTransactionId, code, transactionId } = decodedPayload.data;

    // 3. Init Admin Client (bypasses RLS to update DB)
    const supabase = createAdminClient() as any;

    // Log the event
    await supabase.from('events').insert({
      event_type: 'PHONEPE_CALLBACK',
      payload: decodedPayload,
      status: code
    });

    // 4. Update Payment
    const status = code === 'PAYMENT_SUCCESS' ? 'SUCCESS' : 'FAILED';
    
    const { data: payment, error: payError } = await supabase
      .from('payments')
      .update({
        status,
        phonepe_transaction_id: transactionId,
        raw_response: decodedPayload,
      })
      .eq('merchant_transaction_id', merchantTransactionId)
      .select('registration_id')
      .single();

    if (payError || !payment) {
      console.error('Failed to update payment:', payError);
      return NextResponse.json({ error: 'Payment not found' }, { status: 404 });
    }

    // 5. Update Registration
    const { data: registration, error: regError } = await supabase
      .from('registrations')
      .update({ payment_status: status })
      .eq('id', payment.registration_id)
      .select('*')
      .single();

    if (regError || !registration) {
      console.error('Failed to update registration:', regError);
      return NextResponse.json({ error: 'Registration not found' }, { status: 404 });
    }

    // 6. Trigger Automations if Success
    if (status === 'SUCCESS') {
      try {
        // Run automations concurrently without blocking the callback response
        Promise.allSettled([
          EmailService.sendConfirmation(registration.email, registration.full_name),
          AiSensyService.sendConfirmation(registration.phone, registration.full_name)
        ]).then(results => {
          results.forEach(res => {
            if (res.status === 'rejected') {
              console.error('Automation failed:', res.reason);
            }
          });
        });
      } catch (automationError) {
        console.error('Automation dispatch error:', automationError);
      }
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error('Callback Webhook Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
