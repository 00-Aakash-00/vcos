import { Check } from "lucide-react"

interface FeatureCardProps {
  title: string
  description: string
}

export function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="flex space-x-4">
      <div className="flex-shrink-0 mt-1">
        <Check className="h-6 w-6 text-success" />
      </div>
      <div>
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-ink-300">{description}</p>
      </div>
    </div>
  )
}
