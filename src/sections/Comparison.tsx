import { Scale } from 'lucide-react'
import { Section } from '../components/Section'
import { comparison } from '../data/content'

export function Comparison() {
  return (
    // min-h-[40vh]: as the last section, it needs enough height to scroll up to
    // the top of the screen, so the header can mark it as active
    <Section id="comparison" title={comparison.title} icon={Scale} className="min-h-[40vh]">
      <video
        src={comparison.videoSrc}
        poster={comparison.posterSrc}
        controls
        preload="metadata"
        className="aspect-video w-full rounded-xl bg-zinc-200"
      />
    </Section>
  )
}
