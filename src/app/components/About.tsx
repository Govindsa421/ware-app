'use client'
import { ArrowLongRightIcon } from '@heroicons/react/16/solid'
import Image from 'next/image'
import React from 'react'

export default function About() {
  const scrollToForm = () => {
    const formSection = document.getElementById('contact-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' })
    }
  }
  return (
    <div className='max-w-7xl mx-auto'>
      <div className='flex flex-col md:flex-row items-center justify-center gap-20 px-10  md:py-10 py-4'>
        <div className=''>
          <Image
            src={'https://www.wareinnovations.com/cdn/shop/files/WO_price_Horeca_Catalog_1.jpg?v=1717245032&width=1080'}
            alt='image'
            width={450}
            height={100}
            className='rounded-full md:w-[484px] w-[342px] md:h-[484px] h-[342px] bg-amber-200 object-cover'
          />
        </div>
        <div className='md:w-1/3 w-full space-y-5'>
          <h2 className='subheading'>{`Hi, I'm Uunatii from Ware.`}</h2>
          <p className='body'>
            {`     We create beautiful ceramic tableware for eateries, from dinner plates to espresso & cappuccino cups. Our
            hospitality tableware is durable for busy hotels or restaurants.`}
          </p>
          <p className='body'>
            {` Whether you need pieces for a fancy fine dining spot or restaurant crockery in bulk for your chain, let me
            know. I'll help you find pieces that'll make your guests smile :)`}
          </p>
          <button
            onClick={scrollToForm}
            className='bg-primary px-5 py-3 hover:px-7 duration-300 text-white cursor-pointer relative overflow-hidden group'
          >
            <span className='relative z-10'>Get in touch</span>
            <p className='absolute inset-y-0 -right-4 w-8  flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:right-0 transition-all duration-300 ease-linear'>
              <ArrowLongRightIcon className='h-6 w-6 ml-2 flex items-center justify-center' />
            </p>
          </button>
        </div>
      </div>
    </div>
  )
}
