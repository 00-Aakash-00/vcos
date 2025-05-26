import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export function PricingSection() {
  return (
    <section className="py-20 px-6 bg-ink-600/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-space-grotesk font-bold mb-6">Pricing</h2>
          <p className="text-xl text-ink-300 max-w-2xl mx-auto">Simple, transparent pricing for teams of all sizes</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              name: "Free Tier",
              price: "$0",
              description: "Up to 100 active deals/month, unlimited users. Ideal for getting started.",
              features: ["Up to 100 active deals/month", "Unlimited users", "Basic AI screening", "Deal tracking"],
              cta: "Start Free",
              highlighted: false,
            },
            {
              name: "Starter Plan",
              price: "$79",
              period: "per user/month",
              description: "Unlimited deals, one-click document generation.",
              features: [
                "Unlimited deals",
                "Advanced AI screening",
                "One-click document generation",
                "Meeting transcription",
                "Email integration",
              ],
              cta: "Get Started",
              highlighted: true,
            },
            {
              name: "Enterprise",
              price: "Custom",
              description: "Customized plans for advanced integrations and high-volume needs.",
              features: [
                "Custom integrations",
                "Advanced analytics",
                "Dedicated support",
                "Custom AI training",
                "SLA guarantees",
              ],
              cta: "Contact Sales",
              highlighted: false,
            },
          ].map((plan, index) => (
            <Card
              key={index}
              className={`${
                plan.highlighted
                  ? "border-accent-a/50 bg-gradient-to-b from-ink-600 to-ink-900"
                  : "bg-ink-600 border-ink-300/20"
              } relative overflow-hidden`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-accent-a text-white-100 px-4 py-1 text-sm font-medium">
                  Popular
                </div>
              )}
              <CardContent className="p-8 space-y-6">
                <div>
                  <h3 className="text-2xl font-semibold mb-2">{plan.name}</h3>
                  <div className="flex items-end">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    {plan.period && <span className="text-ink-300 ml-2">{plan.period}</span>}
                  </div>
                  <p className="text-ink-300 mt-2">{plan.description}</p>
                </div>

                <div className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <div key={i} className="flex items-center">
                      <Check className="h-5 w-5 text-success mr-2" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                <Button
                  className={`w-full ${
                    plan.highlighted
                      ? "gradient-primary hover:scale-105 transition-transform glow-shadow"
                      : "bg-ink-900 hover:bg-ink-900/80"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
