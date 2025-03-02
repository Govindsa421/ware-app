import { CustomIcon } from '@/app/custom/icon/CustomIcon'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className=' max-w-7xl mx-auto '>
      <div className='bg-secondary py-12 p-6'>
        {/* Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3  gap-8'>
          {/* About Us Section */}
          <div className='space-y-4 text-sm'>
            <p>About us </p>
            <p>Ware store - Lower Parel, Mumbai </p>
            <p>Restaurant & café tableware</p>
            <p> Blogs - Our learnings & thoughts</p>
            <p>Return or Exchange your order</p>
            <p>Events - you don't want to miss </p>
            <p>Care & Features </p>
            <p>Care & Features Return, Exchange & Refund Policy</p>
            <p>Shipping Policy </p>
            <p>Privacy Policy</p>
            <p> Terms & Conditions</p>
            <p> Terms of Service </p>
            <p>Track Your Order</p>
          </div>

          {/* Blogs Section */}
          <div className='space-y-4'>
            <Image
              src={
                'https://www.wareinnovations.com/cdn/shop/files/unnamed_1c4ca511-13fd-455c-b495-439aed4a4a30.png?v=1733850634&width=262'
              }
              alt='logo'
              width={150}
              height={100}
            />
            <div className='flex gap-4 cursor-pointer'>
              <CustomIcon icon='instagram' color='gray' size={24} />
              <CustomIcon icon='facebook2' color='gray' size={24} />
              <CustomIcon icon='youtube' color='gray' size={24} />
              <CustomIcon icon='twitter' color='gray' size={24} />
              <CustomIcon icon='pinterest' color='gray' size={24} />
              <CustomIcon icon='linkedin2' color='gray' size={24} />
            </div>
          </div>

          {/* Contact Us Section */}
          <div className='space-y-4 text-sm '>
            <h2 className='font-medium'>Contact us:</h2>
            <div className=' '>
              <p className='font-medium'>Customer support:</p>
              <Link href='mailto:hello@wareinnovations.com'>hello@wareinnovations.com</Link>
            </div>
            <div className=''>
              <p className='font-medium'>Job enquiry:</p>
              <Link href='mailto:careers@wareinnovations.com'>careers@wareinnovations.com</Link>
            </div>
            <div className=''>
              <p className='font-medium'>Phone:</p>
              <p>+91 9062820610</p>
            </div>
            <div className=''>
              <p className='font-medium'>Store:</p>
              <p>
                Ware Innovations, Raghuvanshi Mills, <br />
                Lower Parel, Mumbai 400013
              </p>
            </div>
          </div>
        </div>
        <div className='text-center flex justify-center gap-4 text-sm py-6'>
          <p>© 2025 Ware Innovations Mumbai.</p>
          <Link href='https://www.shopify.com'> Powered by Shopify</Link>
        </div>
      </div>
    </footer>
  )
}

export default Footer
