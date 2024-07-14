import React from 'react'

const ImputData = () => {
  return (
    <div className='absolute flex items-center justify-center left-0 right-0 h-screen top-0 bg-black/10 backdrop-blur-xl'>
      <form action="" className='bg-white/60 flex flex-col gap-4 rounded-xl px-5 py-7'>
        <input type="email" className='w-[300px] h-10 rounded-md' placeholder='enter your email...' />
        <input type="password" className='w-[300px] h-10 rounded-md' placeholder='enter your password...' />
      </form>
    </div>
  )
}

export default ImputData
