import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { searchProduct } from '../redux/slice/productSlice';

function Header({insideHome}) {
  const dispatch=useDispatch()
  const yourWishlist=useSelector(state=>state.wishlistReducer)
  return (
    <>
      <Navbar expand="lg" className="bg-info w-100 position-fixed top-0" style={{ zIndex: '10' }}>
        <Container>
          <Navbar.Brand><Link className='fw-bold' to={'/'} style={{ textDecoration: 'none', color: 'white' }}><i className='fa-solid fa-truck-fast me-2'></i>FF - Store</Link> </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              { insideHome && <Nav.Link>
                <input onChange={e=>dispatch(searchProduct(e.target.value.toLowerCase()))} style={{ width: '500px' }} type="text" className='border-0 rounded p-1' placeholder='Search products here!!' />
              </Nav.Link>}
              <Nav.Link><Link className='fw-bold' style={{ textDecoration: 'none', color: 'white' }} to={'/wishlist'}><i className='fa-solid fa-heart text-danger'></i>Wishlist <Badge>{yourWishlist?.length}</Badge></Link></Nav.Link>
              <Nav.Link><Link className='fw-bold' style={{ textDecoration: 'none', color: 'white' }} to={'/cart'}><i className='fa-solid fa-cart-plus text-success'></i>Cart<Badge>10</Badge></Link></Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    </>
  )
}

export default Header