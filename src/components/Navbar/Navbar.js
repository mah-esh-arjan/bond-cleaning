import React from 'react'

import './Navbar.scss'

const Navbar = () => {
  return (
    <div className='navbar' style={{ backgroundColor: 'rgba(103, 103, 235, 0.492)' }}>
      <div className="container">
        <nav id='main-nav' className='col-12 d-flex align-items-center justify-content-between py-2'>
          <div className="list-holder">
            <ul className="nav-list d-flex">
              <li>
                <a href="#home" className="nav-link">Home</a>
              </li>
              <li>
                <a href="#about-us" className="nav-link">About Us</a>
              </li>
              <li>
                <a href="#services" className="nav-link">Services</a>
              </li>
              <li>
                <a href="#our-location" className="nav-link">Our Location</a>
              </li>
              <li>
                <a href="#blog" className="nav-link">Blog</a>
              </li>
              <li>
                <a href="#contact-us" className="nav-link">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="button-holder">
            <button className="btn btn-primary query">Query</button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar