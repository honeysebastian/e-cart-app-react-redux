import React from 'react'
import Header from '../components/Header'
import { Col, Row } from 'react-bootstrap'
import Card from 'react-bootstrap/Card';
import { useDispatch, useSelector } from 'react-redux';
import { removeWishlistItem } from '../redux/slice/wishlistSlice'

function Wishlist() {
  const dispatch=useDispatch()
  const yourWishlist=useSelector(state=>state.wishlistReducer)
  console.log(yourWishlist);

  const removeItem=(productID)=>{
    dispatch(removeWishlistItem(productID))

  }
  return (
    <>
    <Header/>
    <div style={{ marginTop: '150px' }} className="container-fluid justify-content-center">
      { yourWishlist?.length>0 ? 
       <div>
         <h3 className='text-danger ms-5 text-center'>Your Wishlist</h3>
         <Row className='my-5 mx-5 justify-content-center'>
          { yourWishlist?.map(product=>(
            <Col key={product?.id} className='mb-5 mx-2' sm={12} md={6} lg={4} xl={3}>
            <Card className='rounded shadow' style={{ width: '18rem' }}>
              <Card.Img variant="top" src={product?.thumbnail} />
              <Card.Body>
                <Card.Title>{product?.title.slice(0,19)}</Card.Title>
                <div className='d-flex justify-content-between mt-3'>
                  <button onClick={()=>removeItem(product?.id)} className='btn'><i className='fa-solid fa-heart-circle-xmark text-danger'></i></button>
                  <button className='btn'><i className='fa-solid fa-cart-plus text-success'></i></button>
                </div>
              </Card.Body>
            </Card>
          </Col>

          ))
           }
         </Row>
       </div>
      :
      <div style={{height:'90vh'}} className="text-danger fw-bolder d-flex  align-items-center flex-column">
         <h1>Your Wishlist is Empty!!!</h1>
        <img width={'500px'} height={'500px'} src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4344468-3613896.png?f=webp" alt="" />
       
        
      </div>
       }
      </div>
    </>
  )
}

export default Wishlist