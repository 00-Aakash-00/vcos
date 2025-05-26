import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  return (
    <section className="py-20 px-6 bg-ink-600/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-space-grotesk font-bold mb-6">What Partners Say</h2>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              quote: "Flow has transformed how we evaluate deals. The AI insights are incredibly accurate.",
              author: "Sarah Chen",
              role: "Partner at Venture Labs",
              rating: 5,
            },
            {
              quote: "We've increased our deal flow efficiency by 300% since implementing Flow.",
              author: "Michael Rodriguez",
              role: "Managing Director at Growth Capital",
              rating: 5,
            },
            {
              quote: "The pattern recognition capabilities are game-changing for our investment strategy.",
              author: "Emily Watson",
              role: "Principal at Innovation Fund",
              rating: 5,
            },
          ].map((testimonial, index) => (
            <Card key={index} className="bg-ink-600 border-ink-300/20">
              <CardContent className="p-6 space-y-4">
                <div className="flex space-x-1">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent-a text-accent-a" />
                  ))}
                </div>
                <p className="text-ink-300 italic">"{testimonial.quote}"</p>
                <div>
                  <div className="font-semibold">{testimonial.author}</div>
                  <div className="text-sm text-ink-300">{testimonial.role}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
