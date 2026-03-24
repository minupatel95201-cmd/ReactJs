import React from 'react'
import Home from './Pages/Home'
import { Routes, Route } from 'react-router-dom'
import Product from './Pages/Product'

const App = () => {
  return (
    <>
    {/* Product Card == Product Bar == Home Pade == App */}
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='/product/:id' element={<Product />}></Route>
    </Routes>
    </>
  )
}

export default App