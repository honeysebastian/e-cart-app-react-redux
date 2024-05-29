import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
    return (
       <>
       <div style={{ height: '300px' }} className='mt-5 w-100 bg-info p-5 text-white'>
            <div className="d-flex justify-content-between">
                <div style={{ width: '400px' }} className="intro">
                    <h5 style={{fontSize:'1.5rem'}}><i className='fa-solid fa-truck-fast me-2'></i>FF - Store</h5>
                    <p>Designed and built with all the love in the world by the Bootstrap team with the help of our contributors.</p>
                    <p>Code licensed MIT, docs CC BY 3.0.</p>
                    <p>Currently v5.3.3.</p>
                </div>
                <div className="links d-flex flex-column">
                    <h5 style={{fontSize:'1.5rem'}}>Links</h5>
                    <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
                    <Link to={'/cart'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
                    <Link to={'/wishlist'} style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link>


                </div>
                <div className="guides d-flex flex-column">
                    <h5 style={{fontSize:'1.5rem'}}>Guides</h5>
                    <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React</a>
                    <a href="https://react-bootstrap.github.io/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</a>
                    <a href="https://reactrouter.com/en/main" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React Router</a>

                </div>
                <div className="contact  d-flex flex-column">
                    <h5 style={{fontSize:'1.5rem'}}>Contact Us</h5>
                    <div className="d-flex">
                        <input type="text" className='border-0 rounded me-3' placeholder='Enter Your Email Here' />
                        <button style={{ color: 'white', width: '60px', height: '60px' }} className='bg-warning border-0 rounded fw-bolder fs-5 '><i className="fa-solid fa-arrow-right"></i></button>
                    </div>
                    <div className="d-flex justify-content-between mt-4">
                        <a href='' style={{ textDecoration: 'none', color: 'white' }} target='_blank'> <i className="fa-solid fa-envelope"></i></a>
                        <a href='' style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-twitter"></i></a>
                        <a href='' style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-linkedin"></i></a>
                        <a href='' style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-instagram"></i></a>
                        <a href='' style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-github"></i></a>
                        <a href='' style={{ textDecoration: 'none', color: 'white' }} target='_blank'><i className="fa-brands fa-facebook"></i></a>
                    </div>
                </div>
            </div>
            <p className='text-center'>Copyright &copy; FF - Store 2024. Built with React</p>
        </div>
       </>
    )
}

export default Footer