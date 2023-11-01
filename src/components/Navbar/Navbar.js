import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Navbar.scss'

const Navbar = () => {
  const navigate = useNavigate();

  const handleAboutUsClick = () => {
    navigate('/about-us');
  };

  return (
    <div className="navbar text-center text-md-left">
      <div className="container">
        <nav id='main-nav' className='col-12 d-flex flex-wrap align-items-center justify-content-between py-md-2'>
          <div className="list-holder col-12 col-md-auto mb-2 mb-md-0">
            <ul className="nav-list d-flex flex-wrap">
              <li className='col-12 col-md-auto'>
                <a href="#home" className="nav-link">Home</a>
              </li>
              <li className='col-12 col-md-auto'>
                <button className="nav-link" onClick={handleAboutUsClick}>About Us</button>
              </li>
              <li className='col-12 col-md-auto'>
                <a href="#services" className="nav-link">Services</a>
              </li>
              <li className='col-12 col-md-auto'>
                <a href="#our-location" className="nav-link">Our Location</a>
              </li>
              <li className='col-12 col-md-auto'>
                <a href="#blog" className="nav-link">Blog</a>
              </li>
              <li className='col-12 col-md-auto'>
                <a href="#contact-us" className="nav-link">Contact Us</a>
              </li>
            </ul>
          </div>
          <div className="button-holder col-12 col-md-auto">
            <button className="btn btn-primary query">Query</button>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Navbar