import React from 'react';
import second from './img/second.jpg'
import './CSS/second.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function Second() {
    return (
        <div className="second-container">
            <img src={second} alt="second" />
            <div class="content vertical-text">
                <h1>Cleanliness Reigns Supreme</h1>
            </div>
            <div class="text-overlay1">
                <h1 class="overlay1-heading">Experience the Magic of Immaculate Spaces with Our Bond Cleaning!</h1>
                <p class="overlay1-paragraph">
                    At our dedicated cleaning service, we specialize in a select range of meticulous and comprehensive cleaning solutions tailored to meet your unique needs. Our services encompass the art of creating immaculate spaces, ensuring a seamless transition for our valued customers. Our core offerings include:
                    Our expertise in bond cleaning ensures a pristine environment, guaranteeing the return of your deposit. We meticulously restore spaces to their original state, leaving no room for stress during the inspection.
                    With a commitment to excellence, we provide end-of-lease cleaning that reflects our dedication to customer satisfaction. Our services are designed to leave your property looking impeccable, helping you smoothly conclude your lease agreement.
                    Our exit cleaning services are a testament to our meticulous approach. We take pride in preparing your space for its next chapter, delivering an exceptional cleaning experience that sets the stage for new beginnings.
                    Each of our services is marked by precision, attention to detail, and a commitment to ensuring your complete satisfaction throughout the moving process.</p>
            </div>
        </div>

    )
}

export default Second;