import React, { useEffect, useState } from 'react'
import { navLinks } from '../data/Data'
import { CgShoppingCart } from 'react-icons/cg'
import Darkmode from './Part/Darkmode'
import { BiX } from 'react-icons/bi'
import { MdMenu } from 'react-icons/md'
import Image from "../assets/website/logo.png"




const Navbar = () => {
    const [nav, setNav] = useState(false)
    
  return (
    <div className='py-8 shadow-md relative '>
      <div className='w-[90%] mx-auto grid grid-cols-2 items-center justify-between'>
        <div className='flex gap-2 items-center'>
            <img src={Image} alt="" className='w-[40px]'/>
            <h1 className='text-3xl font-bold uppercase'>
                Books
            </h1>
        </div>
        <div className='flex items-center gap-10'>
            {/* darkhandle */}
            <div>
                <Darkmode/>
            </div>
            <div>
                {/* nav */}
                <ul className='hidden  sm:flex items-center gap-5'>
                    {
                        navLinks.map((item, index)=>(
                            <li key={index}>
                                <a className='text-xl font-semibold' href={item.links}>
                                    {item.name}
                                </a>
                            </li>
                        ))
                    }
                </ul>
                <div className='text-xl sm:hidden'>
                    {
                        nav ? <BiX onClick={()=>setNav(false)}/> : <MdMenu onClick={()=>setNav(true)}/>
                    }
                </div>
            </div>
            {/* cart button */}
            <div><button className='bg-blue-500 hover:scale-105 duration-300 text-white py-2 px-4 rounded-full font-semibold flex items-center gap-2'>Order <CgShoppingCart className='text-xl'/></button></div>
        </div>
      </div>
      {
        nav? <div className='sm:hidden absolute inset-0 w-[full] h-screen bg-black/60  backdrop-blur-lg flex items-center justify-center'>
        <ul className=' flex flex-col items-center gap-5'>
          {
              navLinks.map((item, index)=>(
                  <li onClick={()=>setNav(false)} key={index}>
                      <a className='text-xl font-semibold' href={item.links}>
                          {item.name}
                      </a>
                  </li>
              ))
          }
      </ul>
      <BiX onClick={()=>setNav(false)}/>
        </div> : <div></div>
      }
    </div>
  )
}

export default Navbar
