import React from 'react'
import TextImageComponent from '@/app/components/text-image/textImageLayout'

const TextImage = () => {
  return (
    <div>
      <div className='text-center py-10'>
        <h1 className='subheading'>Why choose Ware for your restaurant?</h1>
      </div>
      <TextImageComponent
        title='High quality tableware'
        text1='Our high-fired stoneware ceramicware is known for its durability, it will last you for many years without losing its finish. All our ceramicware are Microwave, oven, and dishwasher friendly.'
        imageUrl='https://www.wareinnovations.com/cdn/shop/files/3_b0c1eab5-7fdc-4b3f-b08d-e8fcc1ae4927.jpg?v=1717240684&width=750'
        reverseOrder={true}
      />
      <TextImageComponent
        title='No minimum quantity order'
        text1='You can order as few as 3 pieces. '
        text2='So you don’t have to maintain extra stock in your restaurant.'
        imageUrl='https://www.wareinnovations.com/cdn/shop/files/4_48884215-d4d0-4e9d-b2f0-95c0d8560716.jpg?v=1717240696&width=750'
        reverseOrder={false}
      />
      <TextImageComponent
        title='Bulk discount on every purchase'
        text1='Get a fixed bulk discount on every small or big purchase throughout the year.'
        imageUrl='https://www.wareinnovations.com/cdn/shop/files/Horeca_Page_on_website_2.jpg?v=1717245354&width=750'
        reverseOrder={true}
      />
      <TextImageComponent
        title='Crockery delivered in 5 days'
        text1='As a retail brand, we maintain the stock for our existing designs.'
        text2='For MOQ below 50, you can expect the delivery in 5 days.'
        imageUrl='https://www.wareinnovations.com/cdn/shop/files/5_78ca8217-349b-41df-b03d-687290353b64.jpg?v=1717240696&width=750'
        reverseOrder={false}
      />
      <TextImageComponent
        title='Original designs Handmade in India'
        text1='Every piece of ware is designed from scratch by our team of product designers and meticulously crafted in India.'
        imageUrl='https://www.wareinnovations.com/cdn/shop/files/Horeca_Page_on_website_1.jpg?v=1717243572&width=750'
        reverseOrder={true}
      />
    </div>
  )
}

export default TextImage
