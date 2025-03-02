'use client'
import { Input } from '@/app/custom/Input'
import { PlusIcon, XMarkIcon } from '@heroicons/react/16/solid'
import React, { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// Define the schema for form validation
const reviewSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  designation: z.string().min(1, 'Designation is required'),
  review: z.string().min(1, 'Review is required'),
  company: z.string().min(1, 'Company Name is required'),
  rating: z.number().min(1, 'Rating is required'),
})

type FormData = z.infer<typeof reviewSchema>

const CustomerReviews = () => {
  const [reviews, setReviews] = useState<FormData[]>([])
  const [isModalOpen, setIsModalOpen] = useState(false)

  const {
    control,
    handleSubmit,
    register,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(reviewSchema), // Integrate Zod validation
    defaultValues: {
      name: '',
      review: '',
      designation: '',
      company: '',
      rating: 0,
    },
  })

  const onSubmit = (data: FormData) => {
    setReviews([...reviews, data])
    reset()
    setIsModalOpen(false)
  }

  // Star Rating Component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const StarRating = ({ control, name }: { control: any; name: string }) => {
    return (
      <Controller
        name={name}
        control={control}
        render={({ field }) => (
          <div className='flex space-x-1'>
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                type='button'
                onClick={() => field.onChange(star)}
                className={`text-2xl ${star <= field.value ? 'text-[#bf5e35]' : 'text-gray-300'}`}
              >
                ★
              </button>
            ))}
          </div>
        )}
      />
    )
  }

  return (
    <div className='bg-gray-50 py-12 px-7 md:px-8'>
      <div className='max-w-7xl mx-auto'>
        {/* Section Title */}
        <h2 className='subheading text-center'>Customer Reviews</h2>

        {/* Add Review Button */}
        <div className='flex flex-col md:flex-row justify-center items-center md:gap-10 gap-2'>
          <div className='mt-8 px-8'>
            <div
              onClick={() => setIsModalOpen(true)}
              className='border-2 p-6 border-dotted text-primary text-center items-center flex flex-col cursor-pointer'
            >
              <PlusIcon className='h-16 w-16' />
              <p className='mr-2'>Add Review</p>
            </div>
          </div>
          <div className=' flex-1  overflow-hidden'>
            {/* Swiper Carousel */}
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation={true}
              pagination={{ clickable: true }}
              // autoplay={{ delay: 3000 }}
              loop={true}
              slidesPerView={1}
              breakpoints={{
                320: {
                  slidesPerView: 1,
                },
                480: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 20,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 40,
                },
              }}
              className='mySwiper'
            >
              {/* Display existing reviews */}
              {reviews.map((review, index) => (
                <SwiperSlide key={index}>
                  <div className='bg-white p-6 rounded-lg shadow-lg w-96'>
                    <div className='flex items-center justify-center'>
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span
                          key={star}
                          className={`text-xl ${star <= review.rating ? 'text-[#bf5e35]' : 'text-gray-300'}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>
                    <p className='text-gray-600 italic'>{`"${review.review}"`}</p>
                    <div className='mt-4'>
                      <p className='text-gray-900 font-semibold'>{review.name}</p>
                      <p className='text-gray-500 text-sm'>{review.designation}</p>
                      <p className='text-gray-500 text-sm'>{review.company}</p>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>

        {/* Modal for Add Review */}
        {isModalOpen && (
          <div className='fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-10'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-full max-w-xl'>
              <div className='flex justify-between'>
                <h3 className='text-2xl font-bold text-gray-900 mb-6'>Write a Review</h3>
                <p>
                  <XMarkIcon className='w-6 h-6 cursor-pointer' onClick={() => setIsModalOpen(false)} />
                </p>
              </div>

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className='mb-6'>
                  <label className='block text-sm font-medium text-gray-700'>Rating</label>
                  <StarRating control={control} name='rating' />
                  {errors.rating && <p className='text-red-500 text-sm mt-1'>{errors.rating.message}</p>}
                </div>

                {/* Name Field */}
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700'>Name</label>
                  <Input register={register('name')} error={errors.name} placeholder='Name' />
                </div>

                {/* Review Field */}
                <div className='mb-4'>
                  <label className='block text-sm font-medium text-gray-700'>Review</label>
                  <Input
                    type='textarea'
                    register={register('review')}
                    placeholder='Write your review here...'
                    error={errors.review}
                  />
                </div>

                {/* Designation Field */}
                <div className='mb-4'>
                  <label htmlFor='designation' className='block text-sm font-medium text-gray-700'>
                    Designation
                  </label>
                  <Input register={register('designation')} error={errors.designation} placeholder='Designation' />
                </div>

                {/* Restaurant/Company Name Field */}
                <div className='mb-6'>
                  <label htmlFor='company' className='block text-sm font-medium text-gray-700'>
                    Restaurant/Company Name
                  </label>
                  <Input register={register('company')} error={errors.company} placeholder='Company Name' />
                </div>

                <button type='submit' className='px-4 py-2 bg-primary text-white'>
                  Send
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default CustomerReviews
