import React from 'react'
import imege from "../assets/play_store.png"
import imege2 from "../assets/app_store.png"
import bg from "../assets/website/banner.jpg"
const Online = () => {
    const bgimge = {
        backgroundImage: `url(${bg})`,
        backgroundPosition: "center",
        backgroundRepeat : "no-repeat",
        backgroundSize: "cover",
        width: "100%"
      }
  return (
    <div style={bgimge}>
      <div className='w-[80%] mx-auto py-10 space-y-4'>
        <h1 className='text-center font-bold text-4xl sm:text-5xl md:text-6xl  text-white'>Read Books at your fingertips</h1>
        <div className='flex items-center gap-2 justify-center'>
            <img src={imege} alt="" className='w-[200px]'/>
            <img src={imege2} alt="" className='w-[200px]'/>
        </div>
      </div>
    </div>
  )
}

export default Online
