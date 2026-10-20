import type { ReactNode } from 'react'

export default function SectionHeading({
  eyebrow,
  title,
  align = 'left',
}: {
  eyebrow?: string
  title: ReactNode
  align?: 'left' | 'center'
}) {
  return (
    <div className={align === 'center' ? 'text-center' : ''}>
      {eyebrow && (
        <p className="eyebrow mb-3">{eyebrow}</p>
      )}
      <h2 className="font-cn-serif text-2xl md:text-3xl text-charcoal">{title}</h2>
      <div
        className={`mt-5 h-px bg-line ${
          align === 'center' ? 'mx-auto w-16' : 'w-12'
        }`}
      />
    </div>
  )
}
