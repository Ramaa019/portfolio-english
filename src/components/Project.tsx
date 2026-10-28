import type { ProjectData } from '../data/content'
import { TechTag } from './TechTag'

type ProjectProps = {
  project: ProjectData
}

export function Project({ project }: ProjectProps) {
  return (
    <article>
      {project.image && (
        <img
          src={project.image.src}
          alt={project.image.alt}
          width={1250}
          height={600}
          loading="lazy"
          // aspect-5/2 crops the image to a wider, shorter strip and mask-b-* fades out its bottom part
          className="mb-3 aspect-5/2 w-full rounded-t-xl object-cover object-top mask-b-from-40% mask-b-to-100%"
        />
      )}

      <div className="flex flex-wrap items-center gap-3">
        <h3 className="font-display text-2xl font-bold tracking-tight text-zinc-900">{project.name}</h3>
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

      <div className="mt-5 flex flex-wrap gap-3">
        {project.links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1.5 rounded-lg bg-accent/10 px-3.5 py-2 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-white"
          >
            <link.icon className="size-4" aria-hidden="true" />
            {link.label}
          </a>
        ))}
      </div>
    </article>
  )
}
