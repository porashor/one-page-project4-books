import React from 'react'
import { FaStar } from 'react-icons/fa'

const Card = ({ img, title, des}) => {
  return (
    <div className='rounded-2xl bg-white dark:bg-gray-800 hover:text-white realative duration-high group max-w-[300px] hover:bg-primary dark:hover:bg-primary'>
        <div className='h-[100px]'>
            <img src={img} alt="bestBooks" className='max-w-[100px] block mx-auto transform -translate-y-1/4 group-hover:scale-105 duration-300 shadow-sm' />
        </div>
        <div className='text-center space-y-3 py-3'>
            <div className='w-full py-3 justify-center flex gap-2 items-center'>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
                <FaStar className='text-yellow-500'/>
            </div>
            <h1 className='text-xl font-bold'>
                {title}
            </h1>
            <p className='text-gray-500 group-hover:text-white  duration-300 text-sm line-clamp-2'>{des}</p>
            <button className='bg-primary text-white px-4 py-2 rounded-full mt-4 hover:scale-105 duration-200 group-hover:text-primary  group-hover:bg-white'>Order Now</button>
        </div>
    </div>
  )
}

export default Card
