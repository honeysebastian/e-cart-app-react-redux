import React from 'react'
import Footer from './components/Footer'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
     <Routes>
      <Route element={<Home/>} path='/'></Route>
      <Route element={<Wishlist/>} path='/wishlist'></Route>
      <Route element={<Cart/>} path='/cart'></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App