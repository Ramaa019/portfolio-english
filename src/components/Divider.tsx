// Decorative separator between sections: two fading lines with a small diamond in the middle.
export function Divider() {
  return (
    <div className="flex items-center gap-3" aria-hidden="true">
      <span className="h-px flex-1 bg-linear-to-r from-transparent to-zinc-300" />
      <span className="size-1.5 rotate-45 bg-accent" />
      <span className="h-px flex-1 bg-linear-to-l from-transparent to-zinc-300" />
    </div>
  )
}
