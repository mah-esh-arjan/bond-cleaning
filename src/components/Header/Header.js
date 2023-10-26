import React, { useEffect } from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import ClearIcon from '@mui/icons-material/Clear';

import './Header.scss'
import Navbar from '../Navbar';

const ACTIVE_NAV_CLASS = 'navbar-active'

const Header = () => {
  const toggleMenu = () => {
    document.body.classList.toggle(ACTIVE_NAV_CLASS)
  }

  useEffect(() => {
    const hideOnClickOutside = (e) => {
      if(e.target.classList.contains('burger-menu') || e.target.closest('.burger-menu')) return
      if(e.target.classList.contains('header-content') || e.target.closest('.header-content')) return

      document.body.classList.remove(ACTIVE_NAV_CLASS)
    }

    document.body.addEventListener('click', hideOnClickOutside)

    return () => {
      document.body.removeEventListener('click', hideOnClickOutside)
    }
  }, [])

  return (
    <header>
      <div className="topbar d-md-none">
        <div className="container">
          <div className="d-flex justify-content-between align-items-center py-2">
            <div className='logo'>
              <img src='images/logo.png' alt="Easy bond clean pros" />
            </div>
            <div className="burger-menu" onClick={toggleMenu}>
              <span className="burger-span"></span>
              <span className="burger-span"></span>
              <span className="burger-span"></span>
            </div>
          </div>
        </div>
      </div>
      <div className="header-content">
        <div className="topbar position-relative">
          <div className='container'>
            <div className="d-md-flex justify-content-md-between align-items-md-center py-2 py-md-3">
              <div className='logo'>
                <img src='images/logo.png' alt="Easy bond clean pros" />
              </div>
              <div className="close-icon d-md-none" onClick={toggleMenu}>
                <ClearIcon />
              </div>
              <div className="list-holder col-12 col-md-auto">
                <ul className="link-list d-md-flex justify-content-md-end">
                  <li className='col-auto'>
                    <a href="mailto:youremail@example.com">
                        <EmailIcon /> youremail@example.com
                    </a>
                  </li>
                  <li className='col-auto'>
                    <a href="tel:+1234567890">
                      <PhoneIcon /> +1 (234) 567-890
                    </a>
                  </li>
                  <li className='col-auto'>
                    <PlaceIcon /> Sample Address
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <Navbar />
      </div>
    </header>
  )
}

export default Header