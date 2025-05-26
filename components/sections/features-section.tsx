import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export function FeaturesSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-space-grotesk font-bold">
                Introducing <span className="italic text-gradient">Flow</span>
              </h2>
              <p className="text-xl text-ink-300 leading-relaxed">
                Meet Flow, the AI-powered tool designed specifically to optimize your deal management pipeline.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  title: "Instant Pitch Screening",
                  description:
                    "Automatically evaluate inbound pitch decks against your investment thesis, tagging them in or out with clear, concise feedback.",
                },
                {
                  title: "Structured Deal Tracking",
                  description:
                    "Parse and store essential details automatically—sector, stage, check size, geography—in a clean, organized Kanban workflow.",
                },
                {
                  title: "Integrated Calls and Notes",
                  description:
                    "Seamlessly transcribe founder calls directly into your deal record—no more manual copy-pasting or third-party apps.",
                },
                {
                  title: "One-Click Documents",
                  description:
                    "Instantly generate term sheets, MOUs, and essential paperwork from transcribed meeting notes and parsed data.",
                },
              ].map((feature, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <Check className="h-6 w-6 text-success" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{feature.title}</h3>
                    <p className="text-ink-300">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <Button size="lg" className="gradient-primary hover:scale-105 transition-transform glow-shadow">
              Try Flow Free
            </Button>
          </div>

          <div className="relative">
            <Card className="bg-ink-600 border-ink-300/20 overflow-hidden shadow-xl">
              <CardContent className="p-0">
                <div className="bg-gradient-to-br from-accent-a/20 to-accent-b/20 p-10">
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <span className="text-base text-ink-300">Deal Pipeline</span>
                      <span className="text-base text-success">✅ Synced 24,572 deals</span>
                    </div>
                    <div className="space-y-4">
                      {[
                        { name: "TechCorp AI", score: 94, stage: "Series A" },
                        { name: "DataFlow Inc", score: 87, stage: "Seed" },
                        { name: "CloudVision", score: 82, stage: "Series B" },
                      ].map((deal) => (
                        <div key={deal.name} className="flex items-center justify-between p-4 bg-ink-900/50 rounded-lg">
                          <div>
                            <div className="font-semibold text-lg">{deal.name}</div>
                            <div className="text-sm text-ink-300">{deal.stage}</div>
                          </div>
                          <div className="text-right">
                            <div className="text-accent-a font-bold text-xl">{deal.score}%</div>
                            <div className="text-xs text-ink-300">AI Score</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
