import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Hero from './components/Hero/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <h1 className='text-center'>Jaseem</h1> */}
      <Hero />
    </>
  )
}

export default App
