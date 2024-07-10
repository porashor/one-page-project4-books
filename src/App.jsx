import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'

const App = () => {
  return (
    <div className='bg-white text-black dark:bg-black dark:text-white'>
      <Navbar/>
      <Hero/>
    </div>
  )
}

export default App
