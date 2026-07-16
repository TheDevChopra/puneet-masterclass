import { NextResponse } from "next/server";
import { submitRegistration, GoogleSheetPayload } from "@/lib/googleSheets";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      fullName,
      email,
      phone,
      occupation,
      goal,
      challenge,
    } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !occupation || !goal) {
      return NextResponse.json(
        { success: false, message: "Missing required fields" },
        { status: 400 }
      );
    }

    const payload: GoogleSheetPayload = {
      fullName,
      email,
      phone,
      occupation,
      goal,
      challenge: challenge || "",
      paymentStatus: "Pending",
      transactionId: "",
      whatsappStatus: "Pending",
    };

    const result = await submitRegistration(payload);

    if (result.success) {
      return NextResponse.json({ success: true });
    } else {
      return NextResponse.json(
        { success: false, message: result.message },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error("API Route Error:", error);
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 }
    );
  }
}
