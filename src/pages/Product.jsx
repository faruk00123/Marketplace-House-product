import React, { useContext, useState } from 'react'
import { NavLink } from 'react-router';
import { products } from '../utils/Product';
import ProductCard from './ProductCard';
import btnicon from '../assets/button-icon.png'
import { omor } from '../context/ThemeContext';

const Product = ({headline}) => {
    const catagori = ["Chair", "Beds", "Sofa", "Lamp"];
    const {isDarkMode} = useContext(omor)

    const [selected, setSelected] = useState("Chair")
    const filteredProducts = products.filter((prod) => prod.category === selected)


    const [visible, setVisible] = useState(4)
    const loadMoreProduts = () => {
      setVisible(visible + 4);
    }
  return (
    <div>
        <div className='max-w-screen-2xl container mx-auto py-6 px-4'>
            <h1 className='text-4xl font-bold text-center my-8'>{headline}</h1>
            

            <div className='bg-[#EEEEEE] max-w-md mx-auto sm:rounded-full md:p-2.5 py-5 mb-16'>
               <div className='flex justify-around items-center'>
                 {
                    catagori.map((item, index) => (
                        <NavLink onClick={() => {
                          setSelected(item);
                          setVisible(4);
                        }} className={`py-1 px-3 hover:bg-amber-500 hover:text-white bg-white cursor-pointer rounded-full ${selected === item ? "text-amber-600 bg-white/40":"text-black"}`} key={index}>{item}</NavLink>
                    ))
                 }
               </div>


               
            </div>
            {/* product Grid */}
               <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                {
                  filteredProducts.slice(0, visible).map((item) => (
                    <ProductCard key={item.id} product={item}/>
                  ))
                }
               </div>

               {/* load more btn */}
               {
                visible < filteredProducts.length && (
                  <div className='flex justify-center items-center mt-12'>
                    <button onClick={loadMoreProduts} className='text-lg text-amber-500 font-bold flex items-center gap-1 cursor-pointer'>View All<img src={btnicon} alt="btn icon" /></button>
                  </div>
                )
               }
        </div>
    </div>
  )
}

export default Product