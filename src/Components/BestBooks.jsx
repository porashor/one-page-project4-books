import React from 'react'
import { cardData } from '../data/Data'
import { FaStar } from 'react-icons/fa'
import Card from './Part/Card'
const BestBooks = () => {
  return (
    <div className='py-10'>
      <div className='container'>
        {/* card header */}
        <div className='text-center mb-20 max-w-[400px] mx-auto'>
            <p className='text-sm gradinet-text'>Tranding Books</p>
            <h1 className='text-3xl font-bold'>Best Books</h1>
            <p className='text-xs text-gray-400'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro unde veniam eveniet laborum voluptas dolorum sed iusto, corrupti ea ipsam!
            </p>
        </div>
        {/* card section */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 place-items-center'>
            {
                cardData.map((item, index)=>(
                    <Card key={index} img={item.img} title={item.title} des={item.des}/>
                ))
            }
        </div>
      </div>
    </div>
  )
}

export default BestBooks
