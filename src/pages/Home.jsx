import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from '../redux/slice/productSlice';
import Spinner from 'react-bootstrap/Spinner';

function Home() {
  const dispatch = useDispatch()
  const { allProducts, error, loading } = useSelector(state => state.productReducer)
  

  useEffect(() => {
    dispatch(fetchProducts())
  }, [])


  return (
    <>
      <Header insideHome={true} />
      <div style={{ marginTop: '150px' }} className="container-fluid">
        {loading ?
          <div className="text-center mt-5 fw-bolder">
            <Spinner animation="border" variant="info" /> Loading
          </div>
          :
          <Row className='my-5 justify-content-center'>
            { allProducts?.length>0?
            allProducts?.map(product=>(
              
              <Col key={product?.id} className='mb-5 mx-2' sm={12} md={6} lg={4} xl={3}>
                <Card className='rounded shadow' style={{ width: '18rem' }}>
                  <Card.Img variant="top" src={product?.images[0]} style={{width:'250px',height:'250px'}} />
                  <Card.Body>
                    <Card.Title>{product?.title.slice(0,9)}...</Card.Title>
                    <div className='text-center mt-3'>
                      <Link to={`/${product?.id}/view`}>View More...</Link>
                    </div>
                  </Card.Body>
                </Card>
              </Col>

            ))

              :
              <div className="text-danger text-center mt-5 mb-5 fw-bolder">Products Not Found!!!</div>
            }
          </Row>
        }
      </div>
    </>
  )
}

export default Home