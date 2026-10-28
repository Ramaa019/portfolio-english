import type { LucideIcon } from 'lucide-react'

type SectionTitleProps = {
  title: string
  icon?: LucideIcon
}

// `icon: Icon` renames the prop: React components must start with a capital letter
export function SectionTitle({ title, icon: Icon }: SectionTitleProps) {
  return (
    <h2 className="mb-4 flex items-center gap-3 font-display text-2xl font-bold tracking-tight text-zinc-900">
      {Icon && (
        <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-accent/10 text-accent">
          <Icon className="size-5" aria-hidden="true" />
        </span>
      )}
      {title}
    </h2>
  )
}
