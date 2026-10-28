import { UserRound } from 'lucide-react'
import { Section } from '../components/Section'
import { SectionTitle } from '../components/SectionTitle'
import { TechStack } from '../components/TechStack'
import { about } from '../data/content'

export function About() {
  return (
    <Section id="about">
      <div className="relative isolate flex flex-col items-center gap-8 py-10 text-center sm:flex-row sm:py-16 sm:text-left">
        {/* Decorative blurred glow behind the hero */}
        <div
          aria-hidden="true"
          className="absolute top-4 left-1/2 -z-10 size-72 -translate-x-1/2 rounded-full bg-violet-300/40 blur-3xl sm:left-0 sm:translate-x-0"
        />
        <div
          aria-hidden="true"
          className="absolute top-24 right-0 -z-10 hidden size-64 rounded-full bg-fuchsia-200/40 blur-3xl sm:block"
        />

        <img
          src={about.photo.src}
          alt={about.photo.alt}
          width={192}
          height={192}
          className="size-40 shrink-0 rounded-full object-cover ring-2 ring-accent/40 ring-offset-4 ring-offset-zinc-50 sm:size-48"
        />
        <div>
          <h1 className="font-display text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl">
            {about.name}
          </h1>
          <p className="mt-2 font-display text-xl text-accent sm:text-2xl">{about.role}</p>
          <p className="mt-4 text-lg text-zinc-900">{about.intro}</p>
          <div className="mt-5">
            <TechStack />
          </div>
        </div>
      </div>

      <SectionTitle title={about.title} icon={UserRound} />
      <div className="space-y-3">
        {about.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <blockquote className="border-l-2 border-accent pl-4 font-display text-lg text-zinc-900 italic">
          {about.quote}
        </blockquote>
      </div>
    </Section>
  )
}
