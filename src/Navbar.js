import React, { useState, useEffect } from 'react';
import './CSS/navbar.css';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import PlaceIcon from '@mui/icons-material/Place';
import logo from './img/logo.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import MenuIcon from '@mui/icons-material/Menu';

const NavigationBar = () => {
    const [showSidebar, setShowSidebar] = useState(false);

    // Function to handle window resize events and update the state accordingly
    const handleWindowResize = () => {
        if (window.innerWidth >= 768) {
            // Show the sidebar if screen width is above "md"
            setShowSidebar(true);
        } else {
            // Hide the sidebar if screen width is below "md"
            setShowSidebar(false);
        }
    };

    // Add a resize event listener when the component mounts
    useEffect(() => {
        handleWindowResize(); // Call the function to set initial state
        window.addEventListener('resize', handleWindowResize);
        return () => {
            window.removeEventListener('resize', handleWindowResize);
        };
    }, []);

    const toggleSidebar = () => {
        setShowSidebar(!showSidebar);
    };

    return (
        <div className="navbar-container">
            <nav className="navbar-sticky container">
                <div className="page-header d-flex justify-content-between align-items-center">
                    <div className="nav-left mb-3 mb-md-0 text-center text-md-start">
                        <img src={logo} alt="Logo" className="img-fluid" />
                    </div>
                    <div className="nav-right d-none d-md-block text-center text-md-start">
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
                    <div className="d-md-none text-end">
                        <button className="btn btn-primary" onClick={toggleSidebar}>
                            <MenuIcon />
                        </button>
                    </div>
                </div>
                <div className={`text-center text-md-start ${showSidebar ? 'd-md-block' : 'd-none'}`}>
                    <ul className="nav-links list-unstyled">
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
                        <button className="btn btn-primary query">Query</button>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default NavigationBar;
