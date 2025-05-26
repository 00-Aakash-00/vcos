"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { sendContactEmail } from "@/app/actions/contact-form"

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<{
    success?: boolean
    message?: string
  } | null>(null)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    setFormStatus(null)

    try {
      const result = await sendContactEmail(formData)
      setFormStatus(result)
    } catch (error) {
      console.error("Form submission error:", error)
      setFormStatus({
        success: false,
        message: "An unexpected error occurred. Please email us directly at sales@vcosai.com",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-20 px-6 bg-ink-600/30">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-5xl font-space-grotesk font-bold mb-6">Contact Sales</h2>
          <p className="text-xl text-ink-300 max-w-2xl mx-auto">
            Get in touch with our team to discuss custom pricing and solutions for your venture capital firm
          </p>
        </div>

        <Card className="bg-ink-600 border-ink-300/20">
          <CardContent className="p-8">
            {formStatus?.success ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full gradient-primary mx-auto flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="32"
                    height="32"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="20 6 9 17 4 12"></polyline>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold">Thank You!</h3>
                <p className="text-ink-300">{formStatus.message}</p>
                <Button
                  onClick={() => setFormStatus(null)}
                  className="gradient-primary hover:scale-105 transition-transform mt-4"
                >
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form action={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name <span className="text-error">*</span>
                    </label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      className="w-full px-4 py-3 bg-ink-900 border border-ink-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-a hover:border-ink-300/70 transition-colors"
                      placeholder="John Smith"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="company" className="text-sm font-medium">
                      Company Name <span className="text-error">*</span>
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      className="w-full px-4 py-3 bg-ink-900 border border-ink-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-a hover:border-ink-300/70 transition-colors"
                      placeholder="Venture Capital Partners"
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email Address <span className="text-error">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    className="w-full px-4 py-3 bg-ink-900 border border-ink-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-a hover:border-ink-300/70 transition-colors"
                    placeholder="john@example.com"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="dealflow" className="text-sm font-medium">
                    Monthly Deal Flow Volume <span className="text-error">*</span>
                  </label>
                  <select
                    id="dealflow"
                    name="dealflow"
                    className="w-full px-4 py-3 bg-ink-900 border border-ink-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-a hover:border-ink-300/70 transition-colors"
                    required
                  >
                    <option value="">Select an option</option>
                    <option value="1-50">1-50 deals per month</option>
                    <option value="51-100">51-100 deals per month</option>
                    <option value="101-250">101-250 deals per month</option>
                    <option value="251+">251+ deals per month</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Additional Information <span className="text-ink-300">(Optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    className="w-full px-4 py-3 bg-ink-900 border border-ink-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-a hover:border-ink-300/70 transition-colors"
                    placeholder="Tell us about your specific needs and requirements..."
                  ></textarea>
                </div>

                <div className="flex items-start">
                  <input
                    id="privacy"
                    name="privacy"
                    type="checkbox"
                    className="mt-1 h-4 w-4 rounded border-ink-300 text-accent-a focus:ring-accent-a"
                    required
                  />
                  <label htmlFor="privacy" className="ml-2 text-sm text-ink-300">
                    I agree to the{" "}
                    <a href="#" className="text-accent-a hover:underline">
                      privacy policy
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-accent-a hover:underline">
                      terms of service
                    </a>
                  </label>
                </div>

                {formStatus?.success === false && (
                  <div className="p-4 bg-error/10 border border-error/30 rounded-lg text-error">
                    {formStatus.message}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full gradient-primary hover:scale-105 transition-transform glow-shadow py-6 text-lg font-medium"
                >
                  {isSubmitting ? "Sending..." : "Contact Sales"}
                </Button>

                <div className="text-center text-sm text-ink-300 mt-4">
                  <p>
                    You can also reach us directly at{" "}
                    <a href="mailto:sales@vcosai.com" className="text-accent-a hover:underline">
                      sales@vcosai.com
                    </a>
                  </p>
                </div>
              </form>
            )}
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
