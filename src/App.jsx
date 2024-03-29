import './App.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
// import Skills from './components/Skills/Skills'
import PointerCircle from './components/Pointer/PointerCircle'
import Project from './components/Project/Project'
// import { Contact } from './components/Contact/Contact'
import Info from './components/Info/Info'

// import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      <PointerCircle />
      <Hero />
      <About />
      {/* <Skills /> */}
      <Project />
      <Info />
      {/* <Contact /> */}
    </>
  )
}

export default App
