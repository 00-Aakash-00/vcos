import { Card, CardContent } from "@/components/ui/card"

export function WorkflowSection() {
  return (
    <section className="py-20 px-6 bg-ink-600/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-space-grotesk font-bold mb-6">How Flow Works</h2>
          <p className="text-xl text-ink-300 max-w-2xl mx-auto">A seamless process from pitch to investment decision</p>
        </div>

        <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-8">
          {[
            {
              step: "01",
              title: "Submission",
              description: "Founders submit pitches via your website or email.",
            },
            {
              step: "02",
              title: "AI Sorting",
              description: "AI automatically tags and sorts pitches based on your investment thesis.",
            },
            {
              step: "03",
              title: "Deal Tracking",
              description: "Track and advance promising deals from review through to decision seamlessly.",
            },
            {
              step: "04",
              title: "Meeting Integration",
              description:
                "Automatically record, transcribe, and integrate meeting insights directly into deal records.",
            },
            {
              step: "05",
              title: "Document Generation",
              description: "Generate term sheets and other documents instantly with one click.",
            },
          ].map((item) => (
            <Card
              key={item.step}
              className="bg-ink-600 border-ink-300/20 hover:border-accent-a/50 transition-all duration-300 hover:shadow-lg hover:shadow-accent-a/10 hover:-translate-y-1"
            >
              <CardContent className="p-6 text-center space-y-4">
                <div className="text-3xl font-space-grotesk font-bold text-gradient">{item.step}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-ink-300 text-sm">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
