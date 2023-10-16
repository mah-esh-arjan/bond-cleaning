import React from 'react';
import './CSS/navbar.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import logo from './img/logo.jpg'

const NavigationBar = () => {
    return (
        <div className="navbar-container">
            <nav className="navbar-sticky">
                <div className="page-header flex justify-between align-center">
                    <div className="nav-left">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="nav-right">
                        <a href="mailto:youremail@example.com">
                            <EmailIcon /> youremail@example.com
                        </a>
                        <a href="tel:+1234567890">
                            <PhoneIcon /> +1 (234) 567-890
                        </a>
                        <a>
                            <PlaceIcon /> Sample Address
                        </a>
                    </div>
                </div>
                <ul className="nav-links">
                    <li>
                        <a href="#home">Home</a>
                    </li>
                    <li>
                        <a href="#about-us">About Us</a>
                    </li>
                    <li>
                        <a href="#services">Services</a>
                    </li>
                    <li>
                        <a href="#our-location">Our Location</a>
                    </li>
                    <li>
                        <a href="#blog">Blog</a>
                    </li>
                    <li>
                        <a href="#contact-us">Contact Us</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default NavigationBar;
