import Image from 'next/image'
import React from 'react'

export default function BannerComponent() {
  return (
    <div>
      <div className='py-10 max-w-7xl mx-auto'>
        <div className='relative '>
          <Image
            src={'https://www.wareinnovations.com/cdn/shop/files/Horeca_Page_on_website_3.jpg?v=1717245830&width=2400'}
            alt='banner'
            width={2400}
            height={100}
            className='h-[400px] md:h-full'
          />
          <div className=' w-full text-white  absolute md:bottom-14 bottom-5  md:left-14  left-3'>
            <h1 className='md:text-5xl font-medium text-lg'>Want to see our Ware?</h1>
            <div className='flex md:gap-8 gap-1 flex-col md:flex-row md:items-center md:pt-3 '>
              <p className='md:text-xl text-base'>Come visit our store in Mumbai</p>
              <button className='md:text-lg text-sm border-2 px-4 py-2 w-40'>Get Directions</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
