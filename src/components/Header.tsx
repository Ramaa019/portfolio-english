import { about, navLinks } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import { ContactLinks } from './ContactLinks'

// Defined outside the component so it's created once, not on every render
const sectionIds = navLinks.flatMap((link) => link.sections)

export function Header() {
  const activeId = useActiveSection(sectionIds)

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
          <ul className="flex gap-1 text-sm font-medium">
            {navLinks.map((link) => {
              const isActive = link.sections.includes(activeId)
              return (
                <li key={link.href}>
                  <a
                    href={link.href}
                    aria-current={isActive ? 'location' : undefined}
                    className={`rounded-full px-3 py-1.5 transition-colors ${
                      isActive ? 'bg-accent/10 text-accent' : 'text-zinc-600 hover:text-accent'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>
    </header>
  )
}
