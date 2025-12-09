import React, { useContext } from 'react'
import bannerImg from '../assets/banner.png'
import { IoSearchSharp } from 'react-icons/io5'
import { BsMoon, BsSun } from 'react-icons/bs'
import { omor } from '../context/ThemeContext'

const Hero = () => {
  const {isDarkMode, toggleTheme} = useContext(omor);

  return (
    <section className='h-screen relative bg-cover bg-center text-white' style={{backgroundImage: `url(${bannerImg})`}}>
      <div className='md:pt-48 pt-24 text-center space-y-8 px-4 md:px-0 flex flex-col items-center md:w-3/4 mx-auto'>
        <h1 className='text-4xl lg:text-5xl font-medium max-w-6xl md:w-3/4 lg:leading-tight leading-snug'>Premium House & Home Products – Designed for Comfort and Everyday Living 🥇</h1>
        <p className='text-xl pt-5 md:w-2/3 w-full text-gray-300'>Ultra Premium Multi-Purpose Home Essential for Modern Living – Advanced, Durable, Stylish & Perfect for Everyday Home Improvement</p>
        <form className='relative'>
          <input type="text" placeholder="Search Item's" id='name' name='name' className='text-black pl-7 py-3 w-68 rounded-full outline-none md:bg-white/40 bg-white/70 border border-white/90 md:border-white/50'/>
          <button type='submit' className='absolute top-2 cursor-pointer right-2 w-9 text-xl h-9 flex justify-center items-center rounded-full bg-amber-500'><IoSearchSharp /></button>
        </form>
      </div>

      {/* bottom blur effer */}
      <div className='absolute inset-x-0 bottom-0 h-3/4 -mb-2 bg-gradient-to-t from-white via-transparent to-transparent blur-sm'></div>
       
      {/* hover button for displaying tooltip box */}
      <div className='absolute hidden md:block bottom-40 left-24 group'>
        <button className='relative p-4 cursor-pointer text-xl bg-white/25 rounded-full border border-white'>
          <div className='hidden -ml-12 absolute bottom-full left-1/2 transform -translate-y-1/2 mb-1 p-2 rounded-lg bg-white/25 shadow-md group-hover:block'>
            <div className='flex space-x-1'>
              <div className='size-6 bg-red-700 border rounded-full'/>
              <div className='size-6 bg-green-700 border rounded-full'/>
              <div className='size-6 bg-blue-700 border rounded-full'/>
            </div>

            {/* tooltip arrow */}
            <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35'>

            </div>
          </div>
        </button>
      </div>


      <div className='absolute hidden md:block left-98 bottom-98 group'>
        <button className='relative p-4 cursor-pointer text-xl bg-white/60 rounded-full border border-white'>
          <div className='hidden -ml-12 absolute bottom-full left-1/2 transform -translate-y-1/2 mb-1 p-2 rounded-lg bg-white/25 shadow-md group-hover:block'>
            <div className='flex space-x-1'>
              <div className='size-6 bg-pink-700 border rounded-full'/>
              <div className='size-6 bg-cyan-600 border rounded-full'/>
              <div className='size-6 bg-lime-600 border rounded-full'/>
            </div>

            {/* tooltip arrow */}
            <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35'>

            </div>
          </div>
        </button>
      </div>

      

       <div className='absolute md:hidden bottom-2/5 left-16 group'>
        <button className='relative p-4 cursor-pointer text-xl bg-white/25 rounded-full border border-white'>
          <div className='hidden -ml-12 absolute bottom-full left-1/2 transform -translate-y-1/2 mb-1 p-2 rounded-lg bg-white/25 shadow-md group-hover:block'>
            <div className='flex space-x-1'>
              <div className='size-6 bg-amber-500 border rounded-full'/>
              <div className='size-6 bg-lime-600 border rounded-full'/>
              <div className='size-6 bg-teal-500 border rounded-full'/>
            </div>

            {/* tooltip arrow */}
            <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35'>

            </div>
          </div>
        </button>
      </div>



      <div className='absolute hidden md:block bottom-40 right-24 group'>
        <button className='relative p-4 cursor-pointer text-xl bg-white/25 rounded-full border border-white'>
          <div className='hidden -ml-12 absolute bottom-full left-1/2 transform -translate-y-1/2 mb-1 p-2 rounded-lg bg-white/25 shadow-md group-hover:block'>
            <div className='flex space-x-1'>
              <div className='size-6 bg-amber-500 border rounded-full'/>
              <div className='size-6 bg-lime-600 border rounded-full'/>
              <div className='size-6 bg-teal-500 border rounded-full'/>
            </div>

            {/* tooltip arrow */}
            <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35'>

            </div>
          </div>
        </button>
      </div>



      <div className='absolute hidden md:block right-98 bottom-98 group'>
        <button className='relative p-4 cursor-pointer text-xl bg-white/60 rounded-full border border-white'>
          <div className='hidden -ml-12 absolute bottom-full left-1/2 transform -translate-y-1/2 mb-1 p-2 rounded-lg bg-white/25 shadow-md group-hover:block'>
            <div className='flex space-x-1'>
              <div className='size-6 bg-blue-600 border rounded-full'/>
              <div className='size-6 bg-black border rounded-full'/>
              <div className='size-6 bg-green-600 border rounded-full'/>
            </div>

            {/* tooltip arrow */}
            <div className='absolute left-1/2 transform -translate-x-1/2 -bottom-2 w-0 h-0 border-l-8 border-l-transparent border-r-8 border-r-transparent border-t-8 border-t-white/35'>

            </div>
          </div>
        </button>
      </div>

      {/* dark and light color switer */}
      <div className='absolute bottom-8 z-20 right-5 md:right-21.5 md:bottom-20'>
         <button onClick={toggleTheme} className='focus:outline-none cursor-pointer font-bold text-xl p-2 md:p-4 bg-black rounded-full'>
          {
            isDarkMode ? <BsSun className='text-yellow-400'/> : <BsMoon className='text-yellow-400'/>
          }
         </button>
      </div>
    </section>
  )
}

export default Hero