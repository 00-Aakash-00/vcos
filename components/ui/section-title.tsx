interface SectionTitleProps {
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionTitle({ title, subtitle, centered = false }: SectionTitleProps) {
  return (
    <div className={`${centered ? "text-center" : ""} mb-12`}>
      <h2 className="text-5xl font-space-grotesk font-bold mb-4">{title}</h2>
      {subtitle && <p className="text-xl text-ink-300 max-w-2xl mx-auto">{subtitle}</p>}
    </div>
  )
}
