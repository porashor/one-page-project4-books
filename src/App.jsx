import React from 'react'
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'
import BestBooks from './Components/BestBooks'
import Banner from './Components/Banner'
import Online from './Components/Online'
import TopBooks from './Components/TopBooks'

const App = () => {
  return (
    <div className='bg-white text-black dark:bg-gray-900 dark:text-white'>
      <Navbar/>
      <Hero/>
      <BestBooks/>
      <Banner/>
      <Online/>
      <TopBooks/>
    </div>
  )
}

export default App
