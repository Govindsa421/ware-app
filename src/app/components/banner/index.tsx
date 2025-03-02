import Image from 'next/image'
import React from 'react'

export default function Banner() {
  return (
    <div className='max-w-7xl mx-auto '>
      <div className='relative'>
        <Image
          src={
            'https://www.wareinnovations.com/cdn/shop/files/ware_innovations_restaurant_crockery.gif?v=1736587611&width=1920'
          }
          alt='banner'
          width={1920}
          height={500}
          className='object-cover   '
        />
        <div className='md:px-8 px-2  w-full  absolute md:bottom-14 bottom-3 left-1/2 transform -translate-x-1/2 text-white text-md md:text-5xl text-center'>
          <h1>Premium Crockery &</h1>
          <h1>Tableware for Restaurants and Cafes</h1>
        </div>
      </div>
    </div>
  )
}
