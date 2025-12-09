import React from 'react'
import btnicon from '../assets/button-icon.png'

const Button = ({text}) => {
  return (
        <button className='text-sm text-amber-500 flex items-center gap-1 cursor-pointer'>{text}<img src={btnicon} alt="btn icon" /></button>
  )
}

export default Button