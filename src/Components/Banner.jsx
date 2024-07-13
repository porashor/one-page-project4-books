import React from 'react'
import Banner1 from "../assets/website/library.jpg"
import { LuLock } from 'react-icons/lu'
import { BsDatabaseCheck, BsTreeFill } from 'react-icons/bs'
import { FaBookSkull } from 'react-icons/fa6'
const Banner = () => {
  return (
    <div className='min-h-[600px]'>
      <div className='container py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center'>
          <div className='flex items-center justify-center'>
            <img src={Banner1} alt="" />
          </div>
          <div className=''>
            <div className='max-w-[600px] space-y-5'>
              <h1 className='text-4xl font-bold md:text-5xl lg:text-6xl'>Liabrary at your fingertips</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum eaque ipsum excepturi, modi iure deleniti assumenda optio neque consequuntur velit maiores architecto necessitatibus voluptatum harum obcaecati temporibus laborum eveniet quia?
              </p>
              <div className='flex items-center gap-5 '>
                <div  className='bg-gray-300 p-4 rounded-full'><LuLock className=''/></div>
                <p className='text-xl'>Quality books</p>
              </div>
              <div className='flex items-center gap-5 '>
                <div  className='bg-gray-300 p-4 rounded-full'><BsDatabaseCheck className=''/></div>
                <p className='text-xl'>Fast delivery</p>
              </div>
              <div className='flex items-center gap-5 '>
                <div  className='bg-gray-300 p-4 rounded-full'><BsTreeFill className=''/></div>
                <p className='text-xl'>Easy payment method</p>
              </div>
              <div className='flex items-center gap-5 '>
                <div  className='bg-gray-300 p-4 rounded-full'><FaBookSkull className=''/></div>
                <p className='text-xl'>Get offer on books</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
