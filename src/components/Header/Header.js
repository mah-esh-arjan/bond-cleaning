import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';

import './Header.scss'
import Navbar from '../Navbar/Navbar';

const Header = () => {
  return (
    <header className='header'>
      <div className='container'>
        <div class="header-content row justify-content-between align-items-center">
          <div className='logo'>
            <img src='images/logo.png' alt="Easy bond clean pros" className="img-fluid" />
          </div>
          <div class="list-holder col-auto">
            <ul className="link-list row justify-content-end">
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
      <Navbar />
    </header>
  )
}

export default Header