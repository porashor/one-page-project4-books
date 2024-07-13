import React, { useEffect, useState } from 'react'
import { allData } from '../data/Data'
import { FaStar } from 'react-icons/fa6'
import Slider from 'react-slick';


const TopBooks = () => {
    const [wid, setWid] = useState(4)
    const width = window.innerWidth
    useEffect(()=>{
        if(width > 1000){
            setWid(4)
        }else if(width > 500){
            setWid(2)
        }else{
            setWid(1)
        }
    },[wid, width])
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: wid,
        slidesToScroll: 1,
      };
      console.log(window.innerWidth)
  return (
    <div className='container py-10'>
      {/* card header */}
      <div className='text-center mb-20 max-w-[400px] mx-auto'>
            <p className='text-sm gradinet-text'>Tranding Books</p>
            <h1 className='text-3xl font-bold'>Top Books</h1>
            <p className='text-xs text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro unde veniam eveniet laborum voluptas dolorum sed iusto, corrupti ea ipsam!
            </p>
        </div>
        <div className='w-[80%] mx-auto  grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
            <Slider {...settings}>
            {
                allData.map((item, index)=>(
                    <div key={index} className='space-y-2'>
                        <div>
                            <img src={item.img} className='w-[200px] rounded-2xl' alt="" />
                        </div>
                        <h1 className='text-xl font-semibold'>{item.title}</h1>
                        <p className='text-sm text-gray-700'>{item.writer}</p>
                        <div className='flex items-center gap-2'>
                            <FaStar className='text-yellow-500'/><p>{item.rate}</p>
                        </div>
                    </div>
                ))
            }
            </Slider>
        </div>
        <div className='text-center py-2'>
            <button className='text-white gradinet px-4 py-2 rounded-full hover:scale-105 duration-200'>View all books</button>
        </div>
    </div>
  )
}

export default TopBooks
