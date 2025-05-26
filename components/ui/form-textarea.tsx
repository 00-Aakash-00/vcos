import type React from "react"

interface FormTextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string
  required?: boolean
}

export function FormTextarea({ label, required, ...props }: FormTextareaProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={props.id} className="text-sm font-medium">
        {label} {required && <span className="text-error">*</span>}
        {!required && <span className="text-ink-300">(Optional)</span>}
      </label>
      <textarea
        {...props}
        required={required}
        className="w-full px-4 py-3 bg-ink-900 border border-ink-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-a hover:border-ink-300/70 transition-colors"
      />
    </div>
  )
}
