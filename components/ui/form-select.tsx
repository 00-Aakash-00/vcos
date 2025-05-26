import type React from "react"

interface FormSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  required?: boolean
  options: { value: string; label: string }[]
}

export function FormSelect({ label, required, options, ...props }: FormSelectProps) {
  return (
    <div className="space-y-2">
      <label htmlFor={props.id} className="text-sm font-medium">
        {label} {required && <span className="text-error">*</span>}
        {!required && <span className="text-ink-300">(Optional)</span>}
      </label>
      <select
        {...props}
        required={required}
        className="w-full px-4 py-3 bg-ink-900 border border-ink-300/30 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent-a hover:border-ink-300/70 transition-colors"
      >
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}
