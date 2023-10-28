import React from 'react'

import Newsletter from '../Newsletter';
import './Footer.scss'

const Footer = () => {
  return (
    <footer className='footer py-5' style={{ backgroundColor: '#F2F6FF' }}>
      <div className="container">
        <div className="footer-content row">
          <div className="col-md-3 px-3">
            <div className="block-header text-capitalize">
              <h3>Contact Us</h3>
            </div>
            <address>22 Gray St, Plympton SA 5038, Australia</address>
            <a href="mailto:quotes@gsbondcleaning.com.au">quotes@gsbondcleaning.com.</a>
          </div>
          <div className="col-md-3 px-3">
            <div className="block-header text-capitalize">
              <h3>Our Links</h3>
            </div>
            <div className="list-holder">
              <ul className="link-list text-capitalize">
                <li><a href="#">home</a></li>
                <li><a href="#">about</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">contact us</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 px-3">
            <div className="block-header text-capitalize">
              <h3>Our Services</h3>
            </div>
            <div className="list-holder">
              <ul className="services-list text-capitalize">
                <li><a href="#">bond cleaning</a></li>
                <li><a href="#">end of lease cleaning</a></li>
                <li><a href="#">carpet cleaning</a></li>
                <li><a href="#">spring cleaning</a></li>
                <li><a href="#">commercial cleaning</a></li>
              </ul>
            </div>
          </div>
          <div className="col-md-3 px-3">
            <Newsletter />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer