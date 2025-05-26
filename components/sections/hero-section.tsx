"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import HeroWireframe from "@/components/hero-wireframe"

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <h1 className="text-6xl lg:text-7xl font-space-grotesk font-extrabold leading-tight">
              AI-powered <span className="text-gradient">deal flow</span> for modern{" "}
              <span className="text-gradient">VC firms</span>
            </h1>

            <p className="text-xl text-ink-300 leading-relaxed max-w-lg">
              Streamline your inbound pitches, automate diligence, and close deals faster. Spend your time on investment
              conviction, not administrative chores.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="gradient-primary hover:scale-105 transition-transform glow-shadow text-lg px-8 py-4"
              >
                Get Started for Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white-100/50 text-white-100 hover:bg-ink-600 hover:border-accent-a text-lg px-8 py-4 transition-all"
              >
                View Docs
              </Button>
            </div>
          </div>

          <div className="flex justify-center">
            <HeroWireframe />
          </div>
        </div>
      </div>
    </section>
  )
}
