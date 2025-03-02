'use client'
import { Input } from '@/app/custom/Input'
import { zodResolver } from '@hookform/resolvers/zod'
import React from 'react'
import { useForm } from 'react-hook-form'
import { z } from 'zod'

const formSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters long'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().regex(/^\d{10}$/, 'Phone number must be 10 digits long'),
})

type FormData = z.infer<typeof formSchema>
export default function FormComponent() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
    },
  })

  const onSubmit = (data: FormData) => {
    console.log(data, 'data')
    reset()
  }

  return (
    <div className='py-10 max-w-7xl mx-auto' id='contact-form'>
      <div className=' px-6 md:px-0'>
        <div className='subheading text-center py-10'>
          <h2>Request a Horeca Catalogue</h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='space-y-4'>
            <div className='flex flex-col md:flex-row gap-4'>
              <div className='flex-1'>
                <label>Name</label>
                <Input register={register('name')} placeholder='Enter Name' error={errors.name} />
              </div>
              <div className='flex-1'>
                <label>Email</label>
                <Input register={register('email')} placeholder='Enter Email' error={errors.email} />
              </div>
            </div>

            <div>
              <label>Phone</label>
              <Input type='number' register={register('phone')} placeholder='Phone Number' error={errors.phone} />
            </div>

            <button type='submit' className='px-4 py-2 bg-primary text-white cursor-pointer'>
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
