import { About } from './sections/About'
import { Comparison } from './sections/Comparison'
import { CurrentProjects } from './sections/CurrentProjects'
import { FutureProjects } from './sections/FutureProjects'
import { PastProjects } from './sections/PastProjects'

function App() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col gap-16 px-4 pb-16">
      <About />
      <CurrentProjects />
      <PastProjects />
      <FutureProjects />
      <Comparison />
    </main>
  )
}

export default App
