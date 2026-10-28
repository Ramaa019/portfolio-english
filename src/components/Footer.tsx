import { about, contact } from '../data/content'
import { ContactLinks } from './ContactLinks'

export function Footer() {
  return (
    <footer className="mx-auto flex max-w-3xl flex-col items-center gap-3 px-4 py-10 text-sm text-zinc-500 sm:flex-row sm:justify-between">
      <p>
        {about.name} · {contact.email}
      </p>
      <ContactLinks />
    </footer>
  )
}
