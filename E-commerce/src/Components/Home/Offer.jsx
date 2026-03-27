import { ArrowRight } from 'lucide-react'
import React from 'react'

const Offer = () => {
  return (
    <>
    <section className='w-full grid grid-cols-1 md:grid-cols-2 bg-gray-100'>
        {/* image */}
        <div className=''>
            <img src="/Images/home1.png" alt="offer" />
        </div>
        {/* text */}
        <div className='flex flex-col px-6 py-2 items-start justify-center'>
            <p className='text-md font-normal py-3'>Limited Time Offers</p>
            <h1 className='text-4xl font-bold leanding-normal py-3'>25% Off All Fashion <br /> Fovorite - Limited Time !</h1> 
            <p className='pt-10 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing <br /> elit. Quo rem in quibusdam fugit!</p>

            <button className='flex items-center justify-center gap-x-4 bg-[#582f0e] text-white px-6 py-3 my-4 rounded-md active:scale-95 active:rounded-md'>Shop Now<ArrowRight/> </button>
        </div>
    </section>
    </>
  )
}

export default Offer