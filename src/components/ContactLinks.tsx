import { contact } from '../data/content'

const links = [
  { label: 'GitHub', href: contact.github },
  { label: 'LinkedIn', href: contact.linkedin },
  { label: 'Email', href: `mailto:${contact.email}` },
]

export function ContactLinks() {
  return (
    <ul className="flex gap-4 text-sm font-medium">
      {links.map((link) => {
        const isExternal = link.href.startsWith('http')
        return (
          <li key={link.label}>
            <a
              href={link.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
              className="text-zinc-600 transition-colors hover:text-accent"
            >
              {link.label}
            </a>
          </li>
        )
      })}
    </ul>
  )
}
