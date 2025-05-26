import { Card, CardContent } from "@/components/ui/card"
import { Check } from "lucide-react"

export function FutureSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-5xl font-space-grotesk font-bold mb-6">The Future of Venture Capital</h2>
            <p className="text-xl text-ink-300 leading-relaxed mb-8">
              VCOS is your future-proof operating system, automating the full lifecycle of venture operations:
            </p>

            <div className="space-y-6">
              {[
                "Unified data management for startups and LPs.",
                "End-to-end automation from diligence checklists to LP reports.",
                "Intelligent workflow management to trigger cap-table updates and investor communications automatically.",
                "Automated fund administration, including capital calls, distributions, and regulatory filings.",
              ].map((item, index) => (
                <div key={index} className="flex space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-6 h-6 rounded-full gradient-primary flex items-center justify-center">
                      <Check className="h-4 w-4 text-white-100" />
                    </div>
                  </div>
                  <p className="text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-primary rounded-3xl opacity-20 blur-xl"></div>
              <Card className="bg-ink-600 border-ink-300/20 overflow-hidden relative z-10">
                <CardContent className="p-8">
                  <div className="space-y-6">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 rounded-full gradient-primary flex items-center justify-center">
                        <div className="text-2xl font-bold">V</div>
                      </div>
                      <div>
                        <h3 className="text-xl font-bold">VCOS Platform</h3>
                        <p className="text-ink-300">Complete VC Operating System</p>
                      </div>
                    </div>

                    <div className="space-y-4">
                      {[
                        { name: "Deal Flow", progress: 100 },
                        { name: "Portfolio Management", progress: 80 },
                        { name: "LP Reporting", progress: 60 },
                        { name: "Fund Administration", progress: 40 },
                      ].map((module) => (
                        <div key={module.name} className="space-y-2">
                          <div className="flex justify-between">
                            <span>{module.name}</span>
                            <span className="text-accent-a">{module.progress}%</span>
                          </div>
                          <div className="h-2 bg-ink-900 rounded-full overflow-hidden">
                            <div className="h-full gradient-primary" style={{ width: `${module.progress}%` }}></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
