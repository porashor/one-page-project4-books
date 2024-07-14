import React from 'react'
import { BiPhone } from 'react-icons/bi'
import { BsInstagram, BsTelegram } from 'react-icons/bs'
import { FaFacebook, FaLinkSlash } from 'react-icons/fa6'
import { LiaJenkins, LiaLinkedin } from 'react-icons/lia'
import { navLinks } from '../data/Data'

const Foother = () => {
  return (
    <div>
      <div className='container py-10'>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[5fr_3fr_3fr_3fr] items-center justify-center gap-5'>
            <div className='space-y-3'>
                <h1 className='text-2xl font-semibold'>Books</h1>
                <p className='text-sm text-slate-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur reiciendis amet consequuntur aperiam quae. Neque exercitationem quasi accusantium illum ex.
                </p>
                <div className='text-xl flex items-center gap-3'>
                    <BsTelegram/>
                    <p>The book shop</p>
                </div>
                <div className='text-xl flex items-center gap-3'>
                    <BiPhone/>
                    <p>
                        +88-01881402678
                    </p>
                </div>
                <div className='text-xl flex items-center gap-3'>
                    <FaFacebook/>
                    <BsInstagram/>
                    <LiaLinkedin/>
                </div>
            </div>
            <div className='space-y-4'>
                <h1 className='text-xl font-bold'>Importent Links</h1>
                <div>{navLinks.map((item, index)=>(
                    <div key={index} className='flex items-center gap-4 text-lg space-y-2'>
                        <FaLinkSlash/><a href={item.links}>{item.name}</a>
                    </div>
                ))}</div>
            </div>
            <div className='space-y-4'>
                <h1 className='text-xl font-bold'>Importent Links</h1>
                <div>{navLinks.map((item, index)=>(
                    <div key={index} className='flex items-center gap-4 text-lg space-y-2'>
                        <FaLinkSlash/><a href={item.links}>{item.name}</a>
                    </div>
                ))}</div>
            </div>
            
            <div className='space-y-4'>
                <h1 className='text-xl font-bold'>Importent Links</h1>
                <div>{navLinks.map((item, index)=>(
                    <div key={index} className='flex items-center gap-4 text-lg space-y-2'>
                        <FaLinkSlash/><a href={item.links}>{item.name}</a>
                    </div>
                ))}</div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Foother
