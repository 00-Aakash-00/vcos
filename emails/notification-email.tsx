import { Body, Container, Head, Heading, Html, Img, Preview, Section, Text } from "@react-email/components"
import { render } from "@react-email/render"

interface NotificationEmailProps {
  name: string
  company: string
  email: string
  dealflow: string
  message: string
}

export const NotificationEmail = ({ name, company, email, dealflow, message }: NotificationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New Contact Form Submission: {company}</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img src="https://vcosai.com/logo.png" width="40" height="40" alt="VCOS" style={logo} />
          </Section>
          <Heading style={heading}>New Contact Form Submission</Heading>

          <Section style={infoContainer}>
            <Section style={infoRow}>
              <Text style={infoLabel}>Name:</Text>
              <Text style={infoValue}>{name}</Text>
            </Section>
            <Section style={infoRow}>
              <Text style={infoLabel}>Company:</Text>
              <Text style={infoValue}>{company}</Text>
            </Section>
            <Section style={infoRow}>
              <Text style={infoLabel}>Email:</Text>
              <Text style={infoValue}>{email}</Text>
            </Section>
            <Section style={infoRow}>
              <Text style={infoLabel}>Monthly Deal Flow:</Text>
              <Text style={infoValue}>{dealflow}</Text>
            </Section>
          </Section>

          <Text style={messageLabel}>Additional Information:</Text>
          <Section style={messageContainer}>
            <Text style={messageText}>{message || "No additional information provided"}</Text>
          </Section>

          <Text style={paragraph}>You can reply directly to this email to contact {name}.</Text>

          <Section style={footer}>
            <Text style={footerText}>© 2024 VCOS. All rights reserved.</Text>
            <Text style={footerText}>This is an automated notification from the VCOS contact form.</Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Render the email to HTML
export function renderNotificationEmail(props: NotificationEmailProps) {
  return render(<NotificationEmail {...props} />)
}

// Styles
const main = {
  backgroundColor: "#0B0C10",
  fontFamily: '"Space Grotesk", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
  color: "#FFFFFF",
}

const container = {
  margin: "0 auto",
  padding: "40px 20px",
  maxWidth: "600px",
}

const logoContainer = {
  marginBottom: "24px",
}

const logo = {
  borderRadius: "8px",
}

const heading = {
  fontSize: "32px",
  lineHeight: "1.3",
  fontWeight: "700",
  color: "#FF6D1B",
  marginBottom: "24px",
}

const paragraph = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#FFFFFF",
  marginBottom: "16px",
}

const infoContainer = {
  backgroundColor: "#1A1C22",
  borderRadius: "8px",
  padding: "24px",
  marginBottom: "24px",
}

const infoRow = {
  display: "flex",
  marginBottom: "12px",
}

const infoLabel = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#9B4DFF",
  width: "150px",
  margin: "0",
}

const infoValue = {
  fontSize: "16px",
  color: "#FFFFFF",
  flex: "1",
  margin: "0",
}

const messageLabel = {
  fontSize: "16px",
  fontWeight: "600",
  color: "#9B4DFF",
  marginBottom: "8px",
}

const messageContainer = {
  backgroundColor: "#1A1C22",
  borderRadius: "8px",
  padding: "16px",
  marginBottom: "24px",
}

const messageText = {
  fontSize: "16px",
  lineHeight: "1.5",
  color: "#FFFFFF",
  margin: "0",
}

const footer = {
  marginTop: "32px",
  borderTop: "1px solid #1A1C22",
  paddingTop: "24px",
}

const footerText = {
  fontSize: "14px",
  lineHeight: "1.5",
  color: "#5A5D6A",
  marginBottom: "8px",
}
