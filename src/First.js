import React from 'react';
import service from './img/service.jpg'
import './CSS/navbar.css';

function First() {
    return (
        <div className="image-container">
            <img src={service} alt="service" />
            <div class="text-overlay">
                <h1 class="overlay-heading">Experience the Magic of Immaculate Spaces with Our Bond Cleaning!</h1>
                <p class="overlay-paragraph">EasyBondClean is your dedicated partner for comprehensive bond cleaning services.
                    We specialize in delivering top-quality, meticulous cleaning solutions that guarantee your bond refund, making your move-out process stress-free.
                    With our experienced team and commitment to excellence, we ensure a seamless transition to your new place, leaving it spotless and ready for the next chapter in your life.</p>

            </div>
            <div class="form-group">
                <div class="form-inside">
                    <form>
                        <div>
                            <input type="text" id="name" name="name" placeholder='Enter your FullName' />
                        </div>
                        <div>
                            <input type="email" id="email" name="email" placeholder='Enter your Email' />
                        </div>
                        <div>
                            <input type="tel" id="phone" name="phone" placeholder='Enter your Phone number' />
                        </div>
                        <div>
                            <input type="text" id="address" name="address" placeholder='Enter your address' />
                        </div>
                        <div>
                            <textarea id="message" placeholder='Enter Message' name="message" rows="4" cols="50"></textarea>
                        </div>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            </div>
        </div>


    )
}

export default First;
