// HTML template for confirmation email
export function getConfirmationEmailHtml(name: string, company: string) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>Thank you for contacting VCOS</title>
        <style>
          /* Base styles */
          body {
            background-color: #0B0C10;
            font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: #FFFFFF;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Container */
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          
          /* Header */
          .header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 1px solid #1A1C22;
          }
          
          .logo-text {
            font-size: 32px;
            font-weight: 700;
            color: #FF6D1B;
            margin: 0;
            letter-spacing: 1px;
          }
          
          /* Content */
          .content {
            padding: 20px 0;
          }
          
          h1 {
            font-size: 28px;
            line-height: 1.3;
            font-weight: 700;
            background: linear-gradient(135deg, #FF6D1B, #9B4DFF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 24px;
            margin-top: 0;
          }
          
          p {
            font-size: 16px;
            line-height: 1.6;
            color: #FFFFFF;
            margin-bottom: 16px;
          }
          
          /* CTA */
          .cta {
            margin-top: 32px;
            margin-bottom: 32px;
            text-align: center;
          }
          
          .button {
            background: linear-gradient(135deg, #FF6D1B, #9B4DFF);
            border-radius: 8px;
            color: #FFFFFF;
            font-size: 16px;
            font-weight: 600;
            text-decoration: none;
            text-align: center;
            padding: 14px 28px;
            display: inline-block;
            box-shadow: 0 4px 12px rgba(255, 109, 27, 0.3);
            transition: all 0.3s ease;
          }
          
          .button:hover {
            transform: translateY(-2px);
            box-shadow: 0 6px 16px rgba(255, 109, 27, 0.4);
          }
          
          /* Card */
          .card {
            background-color: #1A1C22;
            border-radius: 12px;
            padding: 30px;
            margin: 30px 0;
            border: 1px solid #2A2C32;
          }
          
          .card-title {
            font-size: 18px;
            font-weight: 600;
            color: #FF6D1B;
            margin-top: 0;
            margin-bottom: 16px;
          }
          
          /* Footer */
          .footer {
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid #1A1C22;
            text-align: center;
          }
          
          .footer p {
            font-size: 14px;
            line-height: 1.5;
            color: #5A5D6A;
            margin-bottom: 8px;
          }
          
          .footer a {
            color: #9B4DFF;
            text-decoration: none;
          }
          
          /* Signature */
          .signature {
            margin-top: 30px;
            padding-top: 20px;
            border-top: 1px dashed #1A1C22;
          }
          
          /* Responsive */
          @media only screen and (max-width: 600px) {
            .container {
              padding: 20px 15px;
            }
            
            h1 {
              font-size: 24px;
            }
            
            .card {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 class="logo-text">VCOS</h2>
          </div>
          
          <div class="content">
            <h1>Thank you for reaching out to VCOS</h1>
            
            <p>Hello ${name},</p>
            
            <p>We've received your inquiry and our team will be in touch with you shortly to discuss how VCOS can help ${company} optimize your deal flow.</p>
            
            <div class="card">
              <h3 class="card-title">What happens next?</h3>
              <p>One of our team members will review your information and reach out to schedule a personalized demo of our platform. We typically respond within 24 hours during business days.</p>
            </div>
            
            <p>In the meantime, you can explore our platform features and learn how we're helping venture capital firms streamline their operations.</p>
            
            <div class="cta">
              <a href="https://vcosai.com" class="button">Learn More About VCOS</a>
            </div>
            
            <div class="signature">
              <p>We appreciate your interest in our platform and look forward to speaking with you.</p>
              <p>Best regards,<br>The VCOS Team</p>
            </div>
          </div>
          
          <div class="footer">
            <p>© 2024 VCOS. All rights reserved.</p>
            <p><a href="https://vcosai.com/privacy">Privacy Policy</a> · <a href="https://vcosai.com/terms">Terms of Service</a></p>
          </div>
        </div>
      </body>
    </html>
  `
}

// HTML template for notification email
export function getNotificationEmailHtml(
  name: string,
  company: string,
  email: string,
  dealflow: string,
  message: string,
) {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>New Contact Form Submission: ${company}</title>
        <style>
          /* Base styles */
          body {
            background-color: #0B0C10;
            font-family: 'Space Grotesk', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            color: #FFFFFF;
            margin: 0;
            padding: 0;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          }
          
          /* Container */
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 40px 20px;
          }
          
          /* Header */
          .header {
            text-align: center;
            margin-bottom: 40px;
            padding-bottom: 30px;
            border-bottom: 1px solid #1A1C22;
          }
          
          .logo-text {
            font-size: 32px;
            font-weight: 700;
            color: #FF6D1B;
            margin: 0;
            letter-spacing: 1px;
          }
          
          /* Content */
          .content {
            padding: 20px 0;
          }
          
          h1 {
            font-size: 28px;
            line-height: 1.3;
            font-weight: 700;
            background: linear-gradient(135deg, #FF6D1B, #9B4DFF);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            background-clip: text;
            margin-bottom: 24px;
            margin-top: 0;
          }
          
          p {
            font-size: 16px;
            line-height: 1.6;
            color: #FFFFFF;
            margin-bottom: 16px;
          }
          
          /* Info Container */
          .info-container {
            background-color: #1A1C22;
            border-radius: 12px;
            padding: 30px;
            margin: 30px 0;
            border: 1px solid #2A2C32;
          }
          
          .info-section {
            margin-bottom: 24px;
          }
          
          .info-section:last-child {
            margin-bottom: 0;
          }
          
          .info-label {
            font-size: 14px;
            font-weight: 600;
            color: #9B4DFF;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .info-value {
            font-size: 16px;
            color: #FFFFFF;
            background-color: #0B0C10;
            padding: 12px 16px;
            border-radius: 6px;
            margin: 0;
          }
          
          /* Message */
          .message-container {
            background-color: #1A1C22;
            border-radius: 12px;
            padding: 30px;
            margin: 30px 0;
            border: 1px solid #2A2C32;
          }
          
          .message-label {
            font-size: 14px;
            font-weight: 600;
            color: #9B4DFF;
            margin-bottom: 16px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          
          .message-text {
            font-size: 16px;
            line-height: 1.6;
            color: #FFFFFF;
            background-color: #0B0C10;
            padding: 16px;
            border-radius: 6px;
            margin: 0;
            white-space: pre-wrap;
          }
          
          /* Action */
          .action {
            margin-top: 30px;
            padding: 20px;
            background: linear-gradient(135deg, rgba(255, 109, 27, 0.1), rgba(155, 77, 255, 0.1));
            border-radius: 12px;
            border: 1px solid rgba(255, 109, 27, 0.3);
          }
          
          /* Footer */
          .footer {
            margin-top: 40px;
            padding-top: 30px;
            border-top: 1px solid #1A1C22;
            text-align: center;
          }
          
          .footer p {
            font-size: 14px;
            line-height: 1.5;
            color: #5A5D6A;
            margin-bottom: 8px;
          }
          
          /* Responsive */
          @media only screen and (max-width: 600px) {
            .container {
              padding: 20px 15px;
            }
            
            h1 {
              font-size: 24px;
            }
            
            .info-container, .message-container {
              padding: 20px;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h2 class="logo-text">VCOS</h2>
          </div>
          
          <div class="content">
            <h1>New Contact Form Submission</h1>
            
            <p>A potential client has submitted a contact form on the VCOS website. Here are the details:</p>
            
            <div class="info-container">
              <div class="info-section">
                <div class="info-label">Name</div>
                <div class="info-value">${name}</div>
              </div>
              
              <div class="info-section">
                <div class="info-label">Company</div>
                <div class="info-value">${company}</div>
              </div>
              
              <div class="info-section">
                <div class="info-label">Email</div>
                <div class="info-value">${email}</div>
              </div>
              
              <div class="info-section">
                <div class="info-label">Monthly Deal Flow</div>
                <div class="info-value">${dealflow}</div>
              </div>
            </div>
            
            <div class="message-label">Additional Information</div>
            <div class="message-container">
              <div class="message-text">${message || "No additional information provided"}</div>
            </div>
            
            <div class="action">
              <p><strong>Next Steps:</strong> You can reply directly to this email to contact ${name}. The reply will be sent to their email address.</p>
            </div>
          </div>
          
          <div class="footer">
            <p>© 2024 VCOS. All rights reserved.</p>
            <p>This is an automated notification from the VCOS contact form.</p>
          </div>
        </div>
      </body>
    </html>
  `
}
