import { CirclePlay, Scale } from 'lucide-react'
import { Section } from '../components/Section'
import { comparison } from '../data/content'

export function Comparison() {
  return (
    // min-h-[40vh]: as the last section, it needs enough height to scroll up to
    // the top of the screen, so the header can mark it as active
    <Section id="comparison" title={comparison.title} icon={Scale} className="min-h-[40vh]">
      {comparison.videoSrc ? (
        <video src={comparison.videoSrc} controls className="aspect-video w-full rounded-xl bg-zinc-900" />
      ) : (
        <div className="flex aspect-video w-full flex-col items-center justify-center gap-3 rounded-xl bg-linear-to-br from-violet-100 to-fuchsia-100 text-accent">
          <CirclePlay className="size-14" strokeWidth={1.5} aria-hidden="true" />
          <p className="font-medium">Video coming soon</p>
        </div>
      )}
    </Section>
  )
}
