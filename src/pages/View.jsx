import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import { useParams } from 'react-router-dom'

function View() {
  const [product,setProduct]=useState({})
  console.log(product);

  const {id}=useParams()
  console.log(id);

  useEffect(()=>{
   if(localStorage.getItem("allProducts")){
    const allProducts = JSON.parse(localStorage.getItem("allProducts"))
    setProduct(allProducts.find(item=>item.id==id))

   }
  },[])

  
  return (
    <>
    <Header/>
    <div style={{marginTop:'150px',height:'70vh'}} className="container d-flex align-items-center">
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
          <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description: </span>{product?.description}</p>
          <div className='d-flex justify-content-around mt-5'>
            <button className='btn btn-outline-danger fw-bolder'>Add to Wishlist</button>
            <button className='btn btn-outline-success fw-bolder'>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>

    </>
  )
}

export default View