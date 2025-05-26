import { Card, CardContent } from "@/components/ui/card"

export function BenefitsSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-space-grotesk font-bold mb-6">Why VC Firms Love Flow</h2>
          <p className="text-xl text-ink-300 max-w-2xl mx-auto">
            Transforming venture capital operations with AI-powered efficiency
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: (
                <svg
                  className="w-12 h-12 mx-auto text-accent-a"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10" />
                  <polyline points="12 6 12 12 16 14" />
                </svg>
              ),
              title: "Save Time",
              description: "Reclaim the day lost every week sorting emails and manually entering data.",
            },
            {
              icon: (
                <svg
                  className="w-12 h-12 mx-auto text-accent-a"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                </svg>
              ),
              title: "Reduce Costs",
              description: "Replace multiple costly tools (CRM, data rooms, reporting) with one streamlined platform.",
            },
            {
              icon: (
                <svg
                  className="w-12 h-12 mx-auto text-accent-a"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              ),
              title: "Eliminate Errors",
              description: "Centralize your data and never let a promising deal slip through the cracks again.",
            },
          ].map((benefit, index) => (
            <Card key={index} className="bg-ink-600 border-ink-300/20 hover:border-accent-a/50 transition-colors">
              <CardContent className="p-8 text-center space-y-4">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-2xl font-semibold">{benefit.title}</h3>
                <p className="text-ink-300">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
