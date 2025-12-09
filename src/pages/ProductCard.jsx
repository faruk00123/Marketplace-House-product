import React, { useContext } from 'react'
import { getImagUrl } from '../utils/getImageUrl'
import Rating from '../component/Rating'
import { FaPlus } from 'react-icons/fa6'
import { omor } from '../context/ThemeContext'
import { Tamim } from '../context/CartContext'

const ProductCard = ({product}) => {
  const {isDarkMode} = useContext(omor)

  // Cart Context
  const {addToCart} = useContext(Tamim);
  return (
    <div>
        <div className='bg-[#fafafa]'>
            <img src={getImagUrl(`${product.imageUrl}`)} alt="" />
        </div>
        <div className={`p-6 ${isDarkMode ? "bg-black":"bg-white"} shadow-sm`}>
            <h4 className='text-base mb-1'>{product.category}</h4>
            <h3 className='font-semibold text-lg mb-2'>{product.name}</h3>
            <Rating rating={product.rating}/>
            <div className='mt-5 flex justify-between items-center'>
                <p className={`${isDarkMode ? "":"bg-white"} font-bold text-lg`}><sup>$</sup> <span>{product.price}</span></p>
                <button onClick={() => addToCart(product)} className='bg-black/70 text-white p-2 rounded-full hover:bg-black cursor-pointer'><FaPlus /></button>
            </div>
        </div>
    </div>
  )
}

export default ProductCard