import React from 'react'
import Header from '../components/Header'
import { useDispatch, useSelector } from 'react-redux'

function Cart() {

  // const dispatch=useDispatch()
  // const cartItems=useSelector(state=>state.cartReducer)
  // console.log(cartItems);
  return (
    <>
    <Header/>
    <div style={{marginTop:'150px'}} className="container">
      <h1 className='ms-5'>Cart Summary</h1>
      <div className="row">
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
              <tr>
                <td>1</td>
                <td>Apple iPhone 15</td>
                <td><img className='img-fluid' width={'80px'} src="https://media.wired.com/photos/6500ad57fe61eb702d721b58/1:1/w_1800,h_1800,c_limit/Apple-iPhone-15-Pro-Hero-Gear.jpg" alt="" /></td>
                <td>
                  <div className='d-flex'>
                    <button className='btn fw-bolder'>-</button>
                    <input style={{width:'50px',border:'none'}} value={10} type="text" readOnly/>
                    <button className='btn fw-bolder'>+</button>
                  </div>
                </td>
                <td>$ 126</td>
                <td><button className='btn'><i className='fa-solid fa-trash text-danger'></i></button></td>
              </tr>
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

    </div>

    
    </>
  )
}

export default Cart