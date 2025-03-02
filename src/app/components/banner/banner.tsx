import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
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
              <button className='border-2 px-5 py-3 w-40 hover:px-7 duration-300 text-white cursor-pointer relative overflow-hidden group'>
                <span className='relative z-10'>Get Directions</span>
                <p className='absolute inset-y-0 -right-4 w-8  flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-linear'>
                  <ArrowLongRightIcon className='h-6 w-6 ml-2 flex items-center justify-center' />
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
