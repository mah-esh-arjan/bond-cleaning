import React from 'react';
import service from './img/service.jpg'
import './CSS/navbar.css';

function First() {
    return (
        <div>
            <div className="image-container">
                <img src={service} alt="service" />
                <div class="text-overlay">
                    <h1 class="overlay-heading">Experience the Magic of Immaculate Spaces with Our Bond Cleaning!</h1>
                    <p class="overlay-paragraph">Your Paragraph Here</p>
                </div>
                <div class="form-container">
                    <form>
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" />
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" />
                        </div>
                        <div class="form-group">
                            <label for="phone">Phone</label>
                            <input type="tel" id="phone" name="phone" />
                        </div>
                        <div class="form-group">
                            <label for="address">Address</label>
                            <input type="text" id="address" name="address" />
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default First;
