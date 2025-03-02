import { Bars3CenterLeftIcon } from '@heroicons/react/16/solid'
import { MagnifyingGlassIcon, ShoppingBagIcon, UserIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import React from 'react'

export default function Navbar() {
  return (
    <div className='max-w-7xl mx-auto font-body'>
      <div className='bg-primary text-center text-white p-2'>
        <p>Free Shipping on orders above INR 5000</p>
      </div>
      <div className='flex justify-between items-center text-[#565656]  md:px-16 px-6 md:py-10 py-5'>
        <div>
          <Bars3CenterLeftIcon className='md:h-7 h-6 md:w-7 w-6  ' />
        </div>
        <div>
          <Image
            src={
              'https://www.wareinnovations.com/cdn/shop/files/unnamed_1c4ca511-13fd-455c-b495-439aed4a4a30.png?v=1733850634&width=262'
            }
            alt='logo'
            width={150}
            height={100}
            className='mx-auto md:w-[150px] w-[100px] '
          />
        </div>
        <div className='flex gap-4'>
          <MagnifyingGlassIcon className='md:h-7 h-6 md:w-7 w-6  ' />
          <UserIcon className='md:h-7 h-6 md:w-7 w-6  ' />

          <ShoppingBagIcon className='h-7 w-7 md:block hidden' />
        </div>
      </div>
    </div>
  )
}
