import './App.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
// import Skills from './components/Skills/Skills'
import PointerCircle from './components/Pointer/PointerCircle'
import Project from './components/Project/Project'
// import Contact from './components/contact/contact'
function App() {
  return (
    <>
      <PointerCircle />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Project />
      {/* <Contact /> */}
    </>
  )
}

export default App
