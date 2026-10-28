import type { ProjectData } from '../data/content'
import { TechTag } from './TechTag'

type ProjectProps = {
  project: ProjectData
}

export function Project({ project }: ProjectProps) {
  return (
    <article>
      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-display text-xl font-semibold text-zinc-900">{project.name}</h3>
        <span className="flex items-center gap-1.5 rounded-full bg-zinc-200 px-2.5 py-0.5 text-xs font-medium text-zinc-700">
          <project.statusIcon className="size-3.5" aria-hidden="true" />
          {project.status}
        </span>
      </div>

      <div className="mt-3 space-y-3">
        {project.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <TechTag key={tag} name={tag} />
        ))}
      </div>

      <div className="mt-4 flex flex-wrap gap-5">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 text-sm font-medium text-zinc-900 transition-colors hover:text-accent"
          >
            <link.icon className="size-4" aria-hidden="true" />
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}
