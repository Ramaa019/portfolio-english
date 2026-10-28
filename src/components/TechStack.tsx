import { stack } from '../data/content'

// A row of technology logos with their names.
export function TechStack() {
  return (
    <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2 sm:justify-start">
      {stack.map((tech) => (
        <li key={tech.title} className="flex items-center gap-1.5 text-sm text-zinc-500">
          {/* Every simple-icons logo is drawn on a 24x24 grid */}
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="size-4">
            <path d={tech.path} />
          </svg>
          {tech.title}
        </li>
      ))}
    </ul>
  )
}
