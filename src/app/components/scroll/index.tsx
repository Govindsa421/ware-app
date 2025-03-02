'use client'
import { CustomIcon } from '@/app/custom/icon/CustomIcon'
import React, { useState, useEffect } from 'react'

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false)

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility)
    return () => window.removeEventListener('scroll', toggleVisibility)
  }, [])

  return (
    <div className='fixed bottom-8 right-8'>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className=' transition-colors duration-300 cursor-pointer'
          aria-label='Scroll to top'
        >
          <CustomIcon icon='circle-up' color='#bf5e35' size={35} />
        </button>
      )}
    </div>
  )
}

export default ScrollToTop
