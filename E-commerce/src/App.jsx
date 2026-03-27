import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Product from './Pages/Product'
import Chatgpt from './Pages/Chatgpt'
import NavBar from './Layout/NavBar'

const App = () => {
  return (
    <>
    <NavBar />
    {/* Product Card == Product Bar == Home Pade == App */}
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/product/:id' element={<Product />}></Route>
      <Route path='/Chatgpt' element={<Chatgpt />}></Route>
    </Routes>
    </>
  )
}

export default App