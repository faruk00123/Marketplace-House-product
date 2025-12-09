import React from 'react'
import Navbar from './component/Navbar'
import { Outlet } from 'react-router'
import Footer from './component/Footer'
import { ThemeProvider } from './context/ThemeContext'
import { CartProvider } from './context/CartContext'

const App = () => {
  return (
    <ThemeProvider>
        <CartProvider>
          <Navbar/>
          <main className='min-h-screen'>
          <Outlet/>
          </main> 
          <Footer/>
        </CartProvider>
    </ThemeProvider>
  )
}

export default App