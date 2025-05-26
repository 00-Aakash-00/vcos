import { type NextRequest, NextResponse } from "next/server"
import { sendConfirmationEmail, sendNotificationEmail } from "@/app/api/email/send"

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, company, email, dealflow, message } = body

    if (!name || !company || !email || !dealflow) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    const contactData = {
      name,
      company,
      email,
      dealflow,
      message: message || "No additional information provided",
    }

    // Send confirmation email to the user
    await sendConfirmationEmail(contactData)

    // Send notification email to the team
    await sendNotificationEmail(contactData)

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error in contact API:", error)
    return NextResponse.json({ error: "Failed to process contact request" }, { status: 500 })
  }
}
