import React, { useContext } from 'react'
import { Link } from 'react-router'
import { FaFacebookF } from "react-icons/fa";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { omor } from '../context/ThemeContext';

const Footer = () => {
    const {isDarkMode} = useContext(omor);
  return (
    <footer className={`max-w-screen-2xl container mx-auto py-6 md:mt-40 mt-30 px-4 md:px-8`}>
        <section className='grid grid-cols-1 md:grid-cols-2 justify-center w-full md:items-start items-center space-y-10 md:space-y-0'>
            <div className={`flex flex-col justify-center md:max-w-96 lg:max-w-[500px] md:items-start md:w2/5 items-center space-y-3 ${isDarkMode ? "text-white":""}`}>
                <Link to="/" className='text-2xl font-bold md:text-3xl text-center flex justify-center items-center mx-auto text-green-600'>House🥇</Link>
                <p className={`${isDarkMode ? "text-white":"text-gray-500"} md:text-lg text-center`}>The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities.</p>
            </div>
            <article className='grid grid-cols-1 md:grid-cols-3 md:justify-between justify-center items-center md:flex md:space-x-20 mx-auto md:mx-0 space-y-5 md:space-y-0'>
                <div className='flex flex-col space-y-1 justify-center items-center mx-auto'>
                    <h4 className='text-xl text-amber-600 font-semibold border-b md:text-2xl'>Services</h4>
                    <Link to="/" className=' hover:underline transition-all duration-200'>Email Marketing</Link>
                    <Link to="/" className=' hover:underline transition-all duration-200'>Campaigns</Link>
                    <Link to="/" className=' hover:underline transition-all duration-200'>Branding</Link>
                </div>
                <div className='flex flex-col space-y-1 justify-center items-center mx-auto'>
                    <h4 className='text-xl text-amber-600 font-semibold border-b md:text-2xl'>Furniture</h4>
                    <Link to="/" className=' hover:underline transition-all duration-200'>Beds</Link>
                    <Link to="/" className=' hover:underline transition-all duration-200'>Chair</Link>
                    <Link to="/" className=' hover:underline transition-all duration-200'>All</Link>
                </div>
                <div className='flex flex-col space-y-1 justify-center items-center mx-auto'>
                    <h4 className='text-xl text-amber-600 font-semibold border-b md:text-2xl'>Follow Us</h4>
                    <Link to="https://www.facebook.com/md.omor.faruk.707460" target='blank' className='flex justify-center items-center space-x-2 hover:underline transition-all duration-200'> <FaFacebookF className='bg-black w-5 h-5 p-1 rounded-full text-white'/><span>Facebook</span></Link>
                    <Link to="https://github.com/faruk00123?tab=repositories" target='blank' className='flex justify-center items-center space-x-2 hover:underline transition-all duration-200'> <FiGithub className='bg-black w-5 h-5 p-1 rounded-full text-white'/><span>Github</span></Link>
                    <Link to="https://www.linkedin.com/" target='blank' className='flex justify-center items-center space-x-2 hover:underline transition-all duration-200'> <FaLinkedinIn className='bg-black w-5 h-5 p-1 rounded-full text-white'/><span>Linkedin</span></Link>
                </div>
            </article>
        </section>
        
            <article className={`flex flex-col md:flex-row md:justify-between justify-center items-center mt-16 space-y-1 md:space-y-0`}>
                <Link to="/" className={`text-lg md:text-xl font-semibold cursor-pointer ${isDarkMode ? "text-white":"text-gray-600"}`}>House🥇 &copy; 2025</Link>
                <div className={`md:flex md:justify-center grid grid-cols-1 md:items-center space-x-8 ${isDarkMode ? "text-white":"text-gray-600"}`}>
                    <Link to="/" className='text-lg md:text-xl'>Terms & Conditions</Link>
                    <Link to="/" className='text-lg md:text-xl'>Privacy Policy</Link>
                </div>
            </article>
        
    </footer>
  )
}

export default Footer