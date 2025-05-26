"use server"

import { sendConfirmationEmail, sendNotificationEmail } from "@/app/api/email/send"

export async function sendContactEmail(formData: FormData) {
  console.log("Contact form submission started")

  try {
    const name = formData.get("name") as string
    const company = formData.get("company") as string
    const email = formData.get("email") as string
    const dealflow = formData.get("dealflow") as string
    const message = (formData.get("message") as string) || "No additional information provided"

    const contactData = {
      name,
      company,
      email,
      dealflow,
      message,
    }

    // Send confirmation email to the user
    await sendConfirmationEmail(contactData)

    // Send notification email to the team
    await sendNotificationEmail(contactData)

    return {
      success: true,
      message: "Your message has been sent. We will be in touch soon!",
    }
  } catch (error: any) {
    console.error("Error in contact form submission:", error)
    return {
      success: false,
      message: `Failed to send your message: ${error.message}. Please try again later or email us directly at sales@vcosai.com`,
    }
  }
}
