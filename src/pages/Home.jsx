import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slice/productSlice';
import Spinner from 'react-bootstrap/Spinner';

function Home() {
  const dispatch=useDispatch()
  const {allProducts,error,loading}=useSelector(state=>state.productReducer)

  useEffect(()=>{
    dispatch(fetchProducts())
  },[])


  return (
    <>
      <Header insideHome={true} />
      <div style={{ marginTop: '150px' }} className="container-fluid">
        { loading?
        <div className="text-center mt-5 fw-bolder">
          <Spinner animation="border" variant="info" /> Loading
        </div>
        :
        <Row className='my-5'>
          <Col className='mb-5 mx-2' sm={12} md={6} lg={4} xl={3}>
            <Card className='rounded shadow' style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://media.wired.com/photos/6500ad57fe61eb702d721b58/1:1/w_1800,h_1800,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg" />
              <Card.Body>
                <Card.Title>Apple iPhone 15</Card.Title>
                <div className='text-center mt-3'>
                  <Link to={`/4/view`}>View More...</Link>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        }
      </div>
    </>
  )
}

export default Home