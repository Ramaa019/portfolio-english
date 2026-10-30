import { ArrowUp, Mail } from 'lucide-react'
import { about, contact, footer } from '../data/content'
import { ButtonLink } from './ButtonLink'
import { ContactLinks } from './ContactLinks'
import { Divider } from './Divider'

// Calculated once when the page loads, not on every render
const currentYear = new Date().getFullYear()

export function Footer() {
  return (
    <footer className="mx-auto max-w-3xl px-4 pt-12 pb-8">
      <Divider />

      {/* Closing call to action, with the same glow as the hero */}
      <div className="relative isolate mt-12 flex flex-col items-center text-center">
        <div
          aria-hidden="true"
          className="absolute top-0 left-1/2 -z-10 size-64 -translate-x-1/2 rounded-full bg-violet-300/30 blur-3xl"
        />
        <h2 className="font-display text-3xl font-bold tracking-tight text-zinc-900">{footer.title}</h2>
        <p className="mt-3 max-w-md">{footer.text}</p>
        <div className="mt-6">
          <ButtonLink href={`mailto:${contact.email}`}>
            <span className="flex items-center gap-2">
              <Mail className="size-4" aria-hidden="true" />
              {contact.email}
            </span>
          </ButtonLink>
        </div>
        <div className="mt-6">
          <ContactLinks />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="mt-12 flex flex-col items-center gap-2 text-sm text-zinc-500 sm:flex-row sm:justify-between">
        <p>
          © {currentYear} {about.name} · {footer.label}
        </p>
        <a href="#about" className="flex items-center gap-1 transition-colors hover:text-accent">
          {footer.backToTop}
          <ArrowUp className="size-4" aria-hidden="true" />
        </a>
      </div>
    </footer>
  )
}
