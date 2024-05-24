import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'

function View() {
  return (
    <>
    <Header/>
    <div style={{marginTop:'150px',height:'70vh'}} className="container d-flex align-items-center">
      <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-4">
          <img className='img-fluid' src="https://media.wired.com/photos/6500ad57fe61eb702d721b58/1:1/w_1800,h_1800,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg" alt="" />
        </div>
        <div className="col-lg-1"></div>
        <div className="col-lg-6">
          <h5>PID : 5</h5>
          <h1>Title</h1>
          <h3 className="fw-bolder text-danger">$ 99.99</h3>
          <p style={{textAlign:'justify'}}><span className='fw-bolder'>Description:</span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex, labore. Harum perspiciatis temporibus maxime aut qui accusamus delectus at dolorem ex neque dignissimos enim iste odio, ratione consequatur excepturi mollitia.</p>
          <div className='d-flex justify-content-around mt-5'>
            <button className='btn btn-danger'>Add to Wishlist</button>
            <button className='btn btn-success'>Add to Cart</button>
          </div>


        </div>
      </div>
    </div>

    </>
  )
}

export default View