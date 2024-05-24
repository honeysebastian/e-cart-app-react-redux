import React from 'react'
import Footer from './components/Footer'
import Home from './pages/Home'
import Wishlist from './pages/Wishlist'
import Cart from './pages/Cart'
import { Navigate, Route, Routes } from 'react-router-dom'
import View from './pages/View'

function App() {
  return (
    <>
     <Routes>
      <Route element={<Home/>} path='/'></Route>
      <Route element={<Wishlist/>} path='/wishlist'></Route>
      <Route element={<Cart/>} path='/cart'></Route>
      <Route element={<View/>} path='/:id/view'></Route>
      <Route path={'/*'} element={<Navigate to={'/'}/>}></Route>
     </Routes>
     <Footer/>
    </>
  )
}

export default App