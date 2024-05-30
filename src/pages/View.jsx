import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { addToWishlist } from '../redux/slice/wishlistSlice'
import { addToCart } from '../redux/slice/cartSlice'

function View() {
  const [product, setProduct] = useState({})
  const { id } = useParams()

  const userWishlist = useSelector(state => state.wishlistReducer)
  const youCart = useSelector(state => state.cartReducer)


  const dispatch = useDispatch()


  useEffect(() => {
    if (localStorage.getItem("allProducts")) {
      const allProducts = JSON.parse(localStorage.getItem("allProducts"))
      setProduct(allProducts.find(item => item.id == id))
    }
  }, [])

  const handleWishlist = () => {
    if (userWishlist?.includes(product)) {
      alert("Product already in your Wishlist")
    } else {
      dispatch(addToWishlist(product))
    }
  }

  const handleCart = () => {
    const existingProduct = youCart.find(item => item.id == product.id)
    if (existingProduct) {
      dispatch(addToCart(product))
      alert("Items added to cart")

    } else {
      dispatch(addToCart(product))
      alert("New item added to cart")

    }
  }




  return (
    <>
      <Header />
      <div style={{ marginTop: '150px', height: '70vh' }} className="container d-flex align-items-center">
        <div className="row">
          <div className="col-lg-1"></div>
          <div className="col-lg-4">
            <img className='w-100' height={'400vh'} src={product?.thumbnail} alt="" />
          </div>
          <div className="col-lg-1"></div>
          <div className="col-lg-6">
            <h5>PID :{product?.id}</h5>
            <h1>{product?.title}</h1>
            <h3 className="fw-bolder text-danger">$ {product?.price}</h3>
            <p style={{ textAlign: 'justify' }}><span className='fw-bolder'>Description: </span>{product?.description}</p>
            <div className='d-flex justify-content-around mt-5'>
              <button onClick={handleWishlist} className='btn btn-outline-danger fw-bolder'>Add to Wishlist</button>
              <button onClick={handleCart} className='btn btn-outline-success fw-bolder'>Add to Cart</button>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default View