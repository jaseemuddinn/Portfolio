import './App.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
// import Skills from './components/Skills/Skills'
import PointerCircle from './components/Pointer/PointerCircle'
import Project from './components/Project/Project'
// import { Contact } from './components/Contact/Contact'
import Info from './components/Info/Info'
import { SmoothScrollHero } from './components/Hero/Hero1'
import { Community } from './components/community/Community'

// import Contact from './components/Contact/Contact';

function App() {
  return (
    <>
      {/* <PointerCircle /> */}
      {/* <Hero /> */}
      <SmoothScrollHero />
      <About />
      {/* <Skills /> */}
      <Project />
      <Community />
      <Info />
      {/* <Contact /> */}
    </>
  )
}

export default App
