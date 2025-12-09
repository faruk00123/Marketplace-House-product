import React, { useContext, useEffect, useState } from 'react'
import { FaShopify } from 'react-icons/fa'
import { NavLink } from 'react-router'
import { Link } from 'react-router'
import { omor } from '../context/ThemeContext'
import { Tamim } from '../context/CartContext'

const navItems = [
  {path: '/', label: 'Home'},
  {path: '/shop', label: 'Shop'},
  {path: '/about', label: 'About US'},
  {path: '/contact', label: 'Contact'},
]

const NavItems = () => {
  
  return (
    <ul className='flex flex-col md:flex-row items-center md:space-x-8 gap-8'>
      {
        navItems.map((item, index) => (
          <li key={index}>
            <NavLink className={({ isActive }) => isActive ? "text-[#E58411] font-bold":"hover:text-[#E58411]"} to={item.path}>{item.label}</NavLink>
          </li>
        ))
      }
    </ul>
  )
}

const Navbar = () => {
  const {isDarkMode} = useContext(omor)
  const [isTrue, setIsTrue] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  

  // when scroll, apply bg color to navbar
  useEffect(()=>{
    const handleScroll = () => {
      if(window.scrollY > 50){
        setIsScrolled(true);
      }
      else{
        setIsScrolled(false)
      }
    }
    return window.addEventListener('scroll', handleScroll);
  }, [])

  // Cart Context
    const {cartCount} = useContext(Tamim);
  return (
    <header className={`fixed ${isScrolled ? "bg-white/95 shadow-md":"text-white"} ${isDarkMode ? "text-black" : ""} top-0 left-0 right-0 z-50 transition duration-300 ease-in-out`}>
        <nav className='max-w-screen-2xl container mx-auto flex justify-between py-6 px-4 items-center'>
          <Link to="/" className='font-bold'>House🥇</Link>


          {/* mobile menu */}
          <div onClick={() => setIsTrue(!isTrue)} className='md:hidden cursor-pointer'>
             <div className={`${isTrue ? "fixed top-7 right-4":""}`}>
               <div className={`w-5 h-0.5 focus:ring-1 transition-all duration-300 ${isTrue ? "rotate-45 transition-all duration-300 translate-y-1.5":""} ${isScrolled ? "bg-black":"bg-white"}`}></div>
               <div className={`w-5 h-0.5  my-1 ${isTrue ? "opacity-0":""} ${isScrolled ? "bg-black":"bg-white"}`}></div>
               <div className={`w-5 h-0.5 transition-all duration-300 ${isTrue ? "-rotate-45 transition-all duration-300 -translate-y-1.5":""} ${isScrolled ? "bg-black":"bg-white"}`}></div>
             </div>
             <div className={`fixed flex justify-center md:hidden items-center text-white left-0 top-0 h-screen w-full bg-black/80 transform transition-transform duration-400 ease-in-out ${isTrue ? "translate-x-0":"-translate-x-full"}`}>

               <div className='md:hidden cursor-pointer relative -mt-84 -mr-10'>
                  <FaShopify className='text-xl'/>
                  <sup className='absolute top-0 -right-0.5 bg-amber-600 w-3 h-3 text-white flex justify-center items-center rounded-full'>
                  {cartCount}
                  </sup>
                </div>

                <NavItems/>
             </div>
          </div>


          <div className='hidden md:block'>
            <NavItems/>
          </div>

          <div className='hidden md:block cursor-pointer relative'>
            <FaShopify className='text-xl'/>
            <sup className='absolute top-0 -right-0.5 bg-amber-600 w-3 h-3 text-white flex justify-center items-center rounded-full'>
              {cartCount}
            </sup>
          </div>
        </nav>
    </header>
  )
}

export default Navbar