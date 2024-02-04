import './App.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
// import Skills from './components/Skills/Skills'
import Contact from './components/contact/contact'
import PointerCircle from './components/Pointer/PointerCircle'
import Project from './components/Project/Project'

function App() {
  return (
    <>
      <PointerCircle />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Project />
      <Contact />
    </>
  )
}

export default App
