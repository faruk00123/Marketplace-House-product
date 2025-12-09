import React from 'react'
import Testimonials from './Testimonials'
import aboutBgImg from '../assets/contact-background.jpg'

const Contact = () => {
  return (
    <section>
      {/* banner */}
      <div className='w-full h-[400px] bg-no-repeat bg-cover bg-center flex items-center justify-center text-white' style={{backgroundImage: `url(${aboutBgImg})`}}>
        <div className=''>
          <h1 className='text-5xl text-black font-bold underline underline-offset-4'>Contact Page</h1>
        </div>
      </div>
      <Testimonials/>
    </section>
  )
}

export default Contact