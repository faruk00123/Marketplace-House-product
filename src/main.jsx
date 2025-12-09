import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, Route, Routes,} from 'react-router'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Contact from './pages/Contact.jsx'
import Shop from './pages/Shop.jsx'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path='/' element={<App/>}>
           <Route path='/' element={<Home/>}/> 
           <Route path='/about' element={<About/>}/>
           <Route path='/contact' element={<Contact/>}/>
           <Route path='/shop' element={<Shop/>}/>
        </Route>
      </Routes>
  </BrowserRouter>,
)
