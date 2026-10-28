import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { About } from './sections/About'
import { Comparison } from './sections/Comparison'
import { CurrentProjects } from './sections/CurrentProjects'
import { FutureProjects } from './sections/FutureProjects'
import { PastProjects } from './sections/PastProjects'

function App() {
  return (
    <>
      <Header />
      <main className="mx-auto flex max-w-3xl flex-col gap-16 px-4">
        <About />
        <CurrentProjects />
        <PastProjects />
        <FutureProjects />
        <Comparison />
      </main>
      <Footer />
    </>
  )
}

export default App
