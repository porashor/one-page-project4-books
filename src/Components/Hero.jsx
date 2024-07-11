import React, { useState } from 'react'
import image from "../assets/books/book1.jpg"
import image2 from "../assets/books/book2.jpg"
import image3 from "../assets/books/book3.jpg"
import bgVec from "../assets/website/blue-pattern.png"
const data = [
  {
    title: "His Life will forever be changed",
    des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda voluptatum earum ullam in voluptate explicabo ad deleniti autem amet modi reprehenderit pariatur dolores numquam necessitatibus, neque officiis, aspernatur facilis?",
    img: image,
  },
  {
    title: "John doe Who is this",
    des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda voluptatum earum ullam in voluptate explicabo ad deleniti autem amet modi reprehenderit pariatur dolores numquam necessitatibus, neque officiis, aspernatur facilis?",
    img: image2,
  },
  {
    title: "McDonald which book is right",
    des : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam assumenda voluptatum earum ullam in voluptate explicabo ad deleniti autem amet modi reprehenderit pariatur dolores numquam necessitatibus, neque officiis, aspernatur facilis?",
    img: image3,
  }
]

const Hero = () => {
  const [pos, setPos] = useState(0)
  const bgimge = {
    backgroundImage: `url(${bgVec})`,
    backgroundPosition: "center",
    backgroundRepeat : "no-repeat",
    backgroundSize: "cover",
    width: "100%"
  }
  const info = data[pos]
  return (
    <div style={bgimge} className='min-h-[550px] sm:min-h-[650px] bg-gray-100 flex items-center justify-center dark:bg-gray-950 dark:text-white duration-200'>
      <div className='container pb-8 sm:pb-0'>
        <div className='grid grid-cols-1 sm:grid-cols-2'>
          <div className='order-2 sm:order-1'>
            <h1 className='text-4xl sm:text-6xl md:text-8xl font-bold py-4'>
              {info.title}
            </h1>
            <p className='text-primary text-right pb-5'>By Anonymous</p>
            <p>
              {info.des}
            </p>
            <button className='bg-primary my-4 text-white py-2 px-4 rounded-full text-xl hover:scale-105 duration-200'>Order Now</button>
          </div>
          {/* image section */}
          <div className='min-h-[450px] flex justify-center items-center relative order-1 sm:order-2'>
            <img src={info.img} alt="" className='w-[400px] ' />
            <div className='absolute flex sm:flex-col -bottom-10 sm:right-0 sm:bottom-10 gap-4 '>
            <button onClick={()=>setPos(0)}>
              <img src={image} className='w-[100px]' alt="" />
            </button>
            <button onClick={()=>setPos(1)}>
            <img src={image2} className='w-[100px]' alt="" />
            </button>
            <button onClick={()=>setPos(2)}>
            <img src={image3} className='w-[100px]' alt="" />
            </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
