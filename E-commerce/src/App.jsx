import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Product from './Pages/Product'
// import Chatgpt from './Pages/Chatgpt'
import NavBar from './Layout/NavBar'
import Footer from './Layout/Footer'
import Shop from './Pages/Shop'
import Collection from './Pages/Collection'
import About from './Pages/AboutUs'
import ContactUs from './Pages/ContactUs'

const App = () => {
  return (
    <>
    <NavBar />
    {/* Product Card == Product Bar == Home Pade == App */}
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/product/:id' element={<Product />}></Route>
      {/* <Route path='/Chatgpt' element={<Chatgpt />}></Route> */}
      <Route path='/collection' element={<Collection/>}></Route>
      <Route path='/shop' element={<Shop/>}></Route>
      <Route path='/shop/:collection' element={<Shop/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/contact' element={<ContactUs/>}></Route>
    </Routes>
    <Footer />
    </>
  )
}

export default App