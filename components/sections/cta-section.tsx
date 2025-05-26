import { Button } from "@/components/ui/button"

export function CtaSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <div className="gradient-primary rounded-3xl p-12 space-y-8">
          <h2 className="text-5xl font-space-grotesk font-bold">Ready to elevate your investment process?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Optimize your deal flow and focus on what matters most: making great investments.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white-100 text-ink-900 hover:bg-white-100/90 text-lg px-8 py-4">
              Start Free Trial
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white-100/30 text-white-100 hover:bg-white-100/10 text-lg px-8 py-4"
            >
              Schedule Demo
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
