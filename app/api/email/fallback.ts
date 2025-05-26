import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendSimpleEmail(to: string, subject: string, message: string) {
  try {
    console.log(`Sending simple email to ${to} with subject "${subject}"`)

    const data = await resend.emails.send({
      from: "VCOS <sales@vcosai.com>",
      to,
      subject,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h1 style="color: #FF6D1B;">${subject}</h1>
          <div>${message}</div>
        </div>
      `,
    })

    console.log("Simple email response:", JSON.stringify(data, null, 2))
    return data
  } catch (error) {
    console.error("Error sending simple email:", error)
    throw error
  }
}
