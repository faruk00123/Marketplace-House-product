import React, { useContext } from 'react'
import Button from '../component/Button'
import exproiencesIcon from '../assets/expricences.png'
import { omor } from '../context/ThemeContext'

const Expriences = () => {
  const {isDarkMode} = useContext(omor)
  return (
    <section className='max-w-screen-2xl container mx-auto py-6 px-4 md:px-8'>
        <div className='grid md:mt-30 justify-center items-center grid-cols-1 md:grid-cols-2 space-y-6 md:space-y-0'>
            <div className=''>
               <img className='' src={exproiencesIcon} alt="icon img"/>
            </div>
            <div className='space-y-2 md:space-y-3 md:-mt-20'>
                <h6 className='text-amber-500 uppercase'>experiences</h6>
                <h5 className='text-3xl md:text-5xl md:w-4/5 bg-gradient-to-r from-green-500 via-pink-400 to-blue-400 text-transparent bg-clip-text'>we provide you the best experience</h5>
                <p className={`${isDarkMode ? "text-white":"text-gray-600"} md:text-lg md:w-6/7`}>You don’t have to worry about the result because all of these interiors are made by people who are professionals in their fields with an elegant and lucurious style and with premium quality materials</p>
                <Button text="More Info"/>
            </div>
        </div>
    </section>
  )
}

export default Expriences