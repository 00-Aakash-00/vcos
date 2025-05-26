import { Resend } from "resend"
import { getConfirmationEmailHtml, getNotificationEmailHtml } from "./templates"

// Hard-coded API key
const API_KEY = "re_b2x5oZHn_MQZEcWiwqHG7RBn3UfYaPYAa"
const resend = new Resend(API_KEY)

interface ContactFormData {
  name: string
  company: string
  email: string
  dealflow: string
  message: string
}

export async function sendConfirmationEmail({ name, company, email }: ContactFormData) {
  console.log(`Sending confirmation email to ${email}`)

  try {
    const response = await resend.emails.send({
      from: "VCOS <sales@vcosai.com>",
      to: email,
      subject: "Thank you for contacting VCOS",
      html: getConfirmationEmailHtml(name, company),
    })

    if (response.error) {
      throw new Error(`Resend API error: ${response.error.message}`)
    }

    return { success: true, data: response }
  } catch (error: any) {
    console.error("Error sending confirmation email:", error.message)
    throw error
  }
}

export async function sendNotificationEmail(formData: ContactFormData) {
  const { name, company, email, dealflow, message } = formData
  console.log(`Sending notification email about ${company}`)

  try {
    const response = await resend.emails.send({
      from: "VCOS Contact Form <sales@vcosai.com>",
      to: ["aakash@vcosai.com", "ameya@vcosai.com", "aharish4@asu.edu"],
      subject: `New Contact Form Submission: ${company}`,
      reply_to: email,
      html: getNotificationEmailHtml(name, company, email, dealflow, message),
    })

    if (response.error) {
      throw new Error(`Resend API error: ${response.error.message}`)
    }

    return { success: true, data: response }
  } catch (error: any) {
    console.error("Error sending notification email:", error.message)
    throw error
  }
}
