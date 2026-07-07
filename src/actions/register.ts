"use server";

import { z } from "zod";
import { v4 as uuidv4 } from "uuid";
import { createClient } from "@/lib/supabase/server";
import { PhonePeService } from "@/services/phonepe/phonepe";

// Server-side validation schema
const registerSchema = z.object({
  fullName: z.string().min(2),
  email: z.string().email(),
  phone: z.string().regex(/^\+91[6-9]\d{9}$/),
  occupation: z.string().min(2),
  goal: z.string().min(1),
  challenge: z.string().optional(),
});

export async function processRegistration(formData: z.infer<typeof registerSchema>) {
  try {
    // 1. Validate Input
    const validatedData = registerSchema.parse(formData);

    // 2. Init Supabase
    const supabase = await createClient();

    // 3. Generate IDs
    const transactionId = `TXN${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const merchantTransactionId = `MTXN${Date.now()}${Math.floor(Math.random() * 1000)}`;
    const WORKSHOP_PRICE = 99; // ₹99
    
    // 4. Create Registration (Pending)
    const { data: registration, error: regError } = await (supabase as any)
      .from('registrations')
      .insert({
        full_name: validatedData.fullName,
        email: validatedData.email,
        phone: validatedData.phone,
        occupation: validatedData.occupation,
        goal: validatedData.goal,
        challenge: validatedData.challenge,
        payment_status: 'PENDING',
        transaction_id: transactionId,
      })
      .select('id')
      .single();

    if (regError || !registration) {
      console.error('Registration Error:', regError);
      throw new Error("Failed to save registration.");
    }

    // 5. Create Payment Record (Pending)
    const { error: payError } = await (supabase as any)
      .from('payments')
      .insert({
        registration_id: registration.id,
        amount: WORKSHOP_PRICE,
        status: 'PENDING',
        merchant_transaction_id: merchantTransactionId,
      });

    if (payError) {
      console.error('Payment Record Error:', payError);
      throw new Error("Failed to create payment record.");
    }

    // 6. Initiate PhonePe Payment
    const redirectUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/payment/status?id=${merchantTransactionId}`;
    const callbackUrl = `${process.env.NEXT_PUBLIC_APP_URL}/api/payment/callback`;

    // In a real environment with credentials, we would call PhonePe.
    // Since we rely on ENV vars that might be missing locally, we do a safe check.
    if (!process.env.PHONEPE_MERCHANT_ID || process.env.PHONEPE_MERCHANT_ID === "your-merchant-id") {
      console.log("Mocking PhonePe redirect for local dev");
      return {
        success: true,
        redirectUrl: `/api/payment/status?id=${merchantTransactionId}&mock=true`, // Simulated redirect
      };
    }

    const phonePeResponse = await PhonePeService.createPayment({
      merchantTransactionId: merchantTransactionId,
      merchantUserId: registration.id, // Using UUID as userId
      amount: WORKSHOP_PRICE * 100, // PhonePe takes paise
      redirectUrl: redirectUrl,
      redirectMode: 'REDIRECT',
      callbackUrl: callbackUrl,
      mobileNumber: validatedData.phone.replace('+91', ''),
      paymentInstrument: {
        type: 'PAY_PAGE'
      }
    });

    if (phonePeResponse.success) {
      return {
        success: true,
        redirectUrl: phonePeResponse.data.instrumentResponse.redirectInfo.url
      };
    } else {
      throw new Error(phonePeResponse.message || "Failed to generate payment link");
    }

  } catch (error: any) {
    console.error("Action Error:", error);
    return {
      success: false,
      message: error.message || "Something went wrong.",
    };
  }
}
