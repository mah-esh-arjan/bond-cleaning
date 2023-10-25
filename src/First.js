import React from 'react';
import service from './img/service.jpg'
import './CSS/navbar.css';

function First() {

    return (
        <div className="container">
            <div className="hero-section" style={{ backgroundImage: `url(${service})`, backgroundSize: 'cover', backgroundPosition: '50% 50%' }}>
                <div className="row container">
                    <div className="col-lg-6 col-12">
                        <div className="text-overlay">
                            <h1 className="overlay-heading">Experience the Magic of Immaculate Spaces with Our Bond Cleaning!</h1>
                            <p className="overlay-paragraph">EasyBondClean is your dedicated partner for comprehensive bond cleaning services.
                                We specialize in delivering top-quality, meticulous cleaning solutions that guarantee your bond refund, making your move-out process stress-free.
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-12">
                        <div class="form-group">
                            <div class="form-inside ">
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
                </div>
            </div>
        </div>
    )
}

export default First;
