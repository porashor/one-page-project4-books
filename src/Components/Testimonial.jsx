import React from 'react'
import { testimonialData } from '../data/Data'
import Slider from 'react-slick';
const Testimonial = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 1000,
        slidesToShow: 2,
        slidesToScroll: 1,
      };
  return (
    <div>
      <div className='container py-10'>
        {/* testimonial header section */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
            <p className='text-sm gradinet-text'>what our customer says </p>
            <h1 className='text-3xl font-bold'>Tesimonial</h1>
            <p className='text-xs text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro unde veniam eveniet laborum voluptas dolorum sed iusto, corrupti ea ipsam!
            </p>
        </div>
        {/* all testimonials */}
        <div className='grid grid-cols-1 gap-4 justify-center'>
            <Slider {...settings} >
                {
                    testimonialData.map((item, index)=>(
                        <div key={index} className='h-[350px] w-[400px] space-y-5 rounded-3xl  '>
                            <div className='p-4 flex flex-col px-4 mx-4 py-2 w-[400px] items-center justify-center bg-violet-200/50'>
                                <div>
                                    <img src={item.img} alt="" className=' rounded-full  my-3' />
                                </div>
                                <p className='text-sm text-slate-500'>{item.text}</p>
                                <h1 className='text-xl py-3 font-bold'>{item.name}</h1>
                            </div>
                        </div>
                    ))
                }
            </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonial
