import React, { useContext } from 'react'
import Button from '../component/Button'
import materialImg1 from '../assets/material1.png'
import materialImg2 from '../assets/material2.png'
import materialImg3 from '../assets/material3.png'
import { omor } from '../context/ThemeContext'

const Materials = () => {
  const {isDarkMode} = useContext(omor)
  return (
    <section className='max-w-screen-2xl container mx-auto md:py-6 my-28 px-4 md:px-8'>
        <div className='grid md:mt-30 justify-center items-center grid-cols-1 md:grid-cols-2 space-y-4 md:space-y-0'>
            <div className='space-y-2 md:space-y-3 md:-mt-20'>
                <h6 className='text-amber-500 uppercase'>Materials</h6>
                <h5 className='text-3xl md:text-5xl md:w-4/5 bg-gradient-to-r from-red-600 via-violet-500 to-blue-600 text-transparent bg-clip-text'>Very serious materials for making furniture</h5>
                <p className={`${isDarkMode ? "text-white":"text-gray-600"} dark:text-white md:text-lg md:w-6/7`}>Because panto was very serious about designing furniture for our environment, using a very expensive and famous capital but at a relatively low price</p>
                <Button text="More Info"/>
            </div>

            <div className='grid grid-cols-2 md:grid-cols-3 md:items-end items-center'>
               <div>
                <img src={materialImg1} alt="" />
                <img src={materialImg2} alt="" />
               </div>

               <div className=''>
                 <img src={materialImg3} alt="" className='w-full md:col-span-2 col-span-1 lg:h-[540px] md:h-[366px]'/>
               </div>
            </div>
        </div>
    </section>
  )
}

export default Materials