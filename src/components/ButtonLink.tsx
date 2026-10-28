import type { ReactNode } from 'react'

type ButtonLinkProps = {
  href: string
  variant?: 'primary' | 'secondary'
  children: ReactNode
}

const variantClasses = {
  primary: 'bg-accent text-white hover:bg-accent-strong',
  secondary: 'border border-zinc-300 text-zinc-900 hover:border-accent hover:text-accent',
}

export function ButtonLink({ href, variant = 'primary', children }: ButtonLinkProps) {
  // External links open in a new tab; mailto: links don't need to
  const isExternal = href.startsWith('http')

  return (
    <a
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noreferrer' : undefined}
      className={`inline-block rounded-lg px-5 py-2.5 font-medium transition-colors ${variantClasses[variant]}`}
    >
      {children}
    </a>
  )
}
