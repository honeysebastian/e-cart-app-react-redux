import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {

  const cartItems = useSelector(state => state.cartReducer)
  console.log(cartItems);
  return (
    <>
      <Header />
      <div style={{ marginTop: '150px' }} className="container">
       {
        cartItems?.length>0?
        <div className="row">
          <h1 className='ms-5'>Cart Summary</h1>
          <div className="col-lg-8">
            <table className='table shadow'>
              <thead>
                <tr>
                  <th>#</th>
                  <th>Title</th>
                  <th>Image</th>
                  <th>Quantity</th>
                  <th>Price</th>
                  <th><div className="fa-solid fa-ellipsis-vertical"></div></th>
                </tr>
              </thead>
              <tbody>
                
               {  cartItems?.map((item,index)=>(
                <tr key={item?.id}>
                <td>{index+1}</td>
                <td>{item?.title}</td>
                <td><img className='img-fluid' width={'80px'} src={item?.thumbnail} alt="" /></td>
                <td>
                  <div className='d-flex'>
                    <button className='btn fw-bolder'>-</button>
                    <input style={{ width: '50px', border: 'none' }} value={item?.quantity} type="text" readOnly />
                    <button className='btn fw-bolder'>+</button>
                  </div>
                </td>
                <td>$ {item?.totalPrice}</td>
                <td><button className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
              </tr>
               ))
               }
              </tbody>
            </table>
          </div>
          <div className="col-lg-4">
            <div className="shadow rounded p-2">
              <h4>Total items : 1</h4>
              <h4>Total Amount :<span className='text-warning'> $ 4000</span></h4>
              <div className='text-center mt-3'> <button className='btn btn-success'>Checkout</button></div>
            </div>
          </div>
        </div>
        :
        <div style={{ height: '90vh' }} className="text-danger fw-bolder d-flex  align-items-center flex-column">
            <h1>Your Cart is Empty!!!</h1>
            <img width={'500px'} height={'500px'} src="https://cdni.iconscout.com/illustration/premium/thumb/empty-cart-4344468-3613896.png?f=webp" alt="" />
          </div>
        }

      </div>


    </>
  )
}

export default Cart