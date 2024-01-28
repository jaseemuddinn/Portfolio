import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Project from './components/Project/Project'
import Contact from './components/contact/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Project />
      <Contact />
    </>
  )
}

export default App
