import { about, navLinks } from '../data/content'
import { ContactLinks } from './ContactLinks'

export function Header() {
  return (
    <header className="sticky top-0 z-10 bg-zinc-50/80 backdrop-blur">
      <div className="mx-auto flex max-w-3xl items-center justify-between gap-4 px-4 py-4">
        <a href="#about" className="font-display font-bold text-zinc-900">
          {about.name}
        </a>

        {/* Small screens: contact links. Larger screens: section links. */}
        <div className="sm:hidden">
          <ContactLinks />
        </div>
        <nav className="hidden sm:block">
          <ul className="flex gap-5 text-sm font-medium">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="text-zinc-600 transition-colors hover:text-accent">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}
