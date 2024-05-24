import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';

function Wishlist() {
  return (
    <>
    <Header/>
    <div style={{ marginTop: '150px' }} className="container-fluid">
      <h3 className='text-danger ms-5'>Your Wishlist</h3>
        <Row className='my-5 mx-5'>
          <Col className='mb-5 mx-2' sm={12} md={6} lg={4} xl={3}>
            <Card className='rounded shadow' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://media.wired.com/photos/6500ad57fe61eb702d721b58/1:1/w_1800,h_1800,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg" />
              <Card.Body>
                <Card.Title>Apple iPhone 15</Card.Title>
                <div className='d-flex justify-content-between mt-3'>
                  <button className='btn'><i className='fa-solid fa-heart-circle-xmark text-danger'></i></button>
                  <button className='btn'><i className='fa-solid fa-cart-plus text-success'></i></button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </>
  )
}

export default Wishlist