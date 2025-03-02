'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import './slider.css'
import { Navigation, Mousewheel, Keyboard, Pagination, Autoplay } from 'swiper/modules'
import { SliderData } from '../data'
import Image from 'next/image'

export default function App() {
  return (
    <>
      <div className='max-w-7xl mx-auto py-10 px-6'>
        <div className='subheading text-center py-10'>
          <h2>Our Clients</h2>
        </div>
        <Swiper
          cssMode={true}
          loop={true}
          speed={1000}
          autoplay={{ delay: 3000 }}
          slidesPerView={3}
          spaceBetween={10}
          navigation={true}
          pagination={{
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          modules={[Autoplay, Navigation, Pagination, Mousewheel, Keyboard]}
          className='mySwiper'
          breakpoints={{
            320: {
              slidesPerView: 1,
            },
            480: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 3,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
        >
          {SliderData.map((ele) => {
            return (
              <SwiperSlide key={ele.text}>
                <div className='slide'>
                  <div className=' relative '>
                    <Image src={ele.image} alt={ele.title} width={200} height={100} />
                    <h2 className='text-lg font-medium'>{ele.title}</h2>
                    <p className='body italic'>{ele.text}</p>
                  </div>
                </div>
              </SwiperSlide>
            )
          })}
        </Swiper>
      </div>
    </>
  )
}
