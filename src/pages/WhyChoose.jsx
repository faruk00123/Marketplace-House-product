import React, { useContext } from 'react'
import Button from '../component/Button'
import { omor } from '../context/ThemeContext'


const cart = [
    {
        title: "Luxury facilities",
        description: "The advantage of hiring a workspace with us is that givees you comfortable service and all-around facilities."
    },

    {
        title: "Affordable Price",
        description: "You can get a workspace of the highst quality at an affordable price and still enjoy the facilities that are oly here."
    },

    {
        title: "Many Choices",
        description: "We provide many unique work space choices so that you can choose the workspace to your liking."
    },
]

const WhyChoose = () => {
    const {isDarkMode} = useContext(omor)
  return (
    <section className='max-w-screen-2xl container mx-auto py-6 px-4 justify-center items-center md:flex'>
        <div className='my-24 w-1/4 flex justify-center items-center mx-auto'>
           <h1 className='text-4xl font-bold'><span>Why</span> <br /> <span>Choosing Us</span></h1>
        </div>

        <div className='md:flex-row flex flex-col gap-10 md:w-3/4'>
           {
            cart.map((item, index) => (
                <div key={index} className='space-y-3'>
                    <h4 className='text-2xl font-semibold'>{item.title}</h4>
                    <p className={`w-full text-sm ${isDarkMode ? "text-white":" text-gray-600"}`}>{item.description}</p>
                    <Button text="More Info"/>
                </div>
            ))
           }
        </div>
    </section>
  )
}

export default WhyChoose