import { useEffect, useState } from 'react'

// Returns the id of the section you are currently reading.
// `ids` must be in the same order as the sections on the page.
export function useActiveSection(ids: string[]) {
  const [activeId, setActiveId] = useState(ids[0])

  useEffect(() => {
    function update() {
      // The active section is the last one whose top has passed the upper third of the screen
      let current = ids[0]
      for (const id of ids) {
        const section = document.getElementById(id)
        if (section && section.getBoundingClientRect().top <= window.innerHeight / 3) {
          current = id
        }
      }
      setActiveId(current)
    }

    update()
    window.addEventListener('scroll', update, { passive: true })

    // Cleanup: stop listening when the component disappears
    return () => window.removeEventListener('scroll', update)
  }, [ids])

  return activeId
}
