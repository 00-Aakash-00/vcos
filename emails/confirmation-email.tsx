import { Body, Container, Head, Heading, Html, Img, Link, Preview, Section, Text } from "@react-email/components"
import { render } from "@react-email/render"

interface ConfirmationEmailProps {
  name: string
  company: string
}

export const ConfirmationEmail = ({ name, company }: ConfirmationEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>Thank you for contacting VCOS</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logoContainer}>
            <Img src="https://vcosai.com/logo.png" width="40" height="40" alt="VCOS" style={logo} />
          </Section>
          <Heading style={heading}>Thank you for reaching out to VCOS</Heading>
          <Text style={paragraph}>Hello {name},</Text>
          <Text style={paragraph}>
            We've received your inquiry and our team will be in touch with you shortly to discuss how VCOS can help{" "}
            {company} optimize your deal flow.
          </Text>
          <Section style={ctaContainer}>
            <Link style={ctaButton} href="https://vcosai.com">
              Learn More About VCOS
            </Link>
          </Section>
          <Text style={paragraph}>
            We appreciate your interest in our platform and look forward to speaking with you.
          </Text>
          <Text style={paragraph}>
            Best regards,
            <br />
            The VCOS Team
          </Text>
          <Section style={footer}>
            <Text style={footerText}>© 2024 VCOS. All rights reserved.</Text>
            <Text style={footerText}>
              <Link href="https://vcosai.com/privacy" style={footerLink}>
                Privacy Policy
              </Link>{" "}
              ·{" "}
              <Link href="https://vcosai.com/terms" style={footerLink}>
                Terms of Service
              </Link>
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  )
}

// Render the email to HTML
export function renderConfirmationEmail(props: ConfirmationEmailProps) {
  return render(<ConfirmationEmail {...props} />)
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

const ctaContainer = {
  marginTop: "32px",
  marginBottom: "32px",
  textAlign: "center" as const,
}

const ctaButton = {
  backgroundColor: "#FF6D1B",
  borderRadius: "8px",
  color: "#FFFFFF",
  fontSize: "16px",
  fontWeight: "600",
  textDecoration: "none",
  textAlign: "center" as const,
  padding: "12px 24px",
  display: "inline-block",
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

const footerLink = {
  color: "#9B4DFF",
  textDecoration: "none",
}
