import React from 'react';
import './CSS/third.css';
import bubble from './img/bubble.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';

function Third() {
    return (
        <div className="container">
            <div className="third-heading">
                <h1>Our services range:</h1>
            </div>
            <div className="third-card row">
                <div className="card card-spacing col-4">
                    <div className="card-body custom-card">
                        <h5 className="card-title">Service 1</h5>
                        <p className="card-text">Description of Service 1</p>
                    </div>
                </div>
                <div className="card card-spacing col-4">
                    <div className="card-body custom-card">
                        <h5 className="card-title">Service 2</h5>
                        <p className="card-text">Description of Service 2</p>
                    </div>
                </div>
                <div className="card card-spacing col-4">
                    <div className="card-body custom-card">
                        <h5 className="card-title">Service 3</h5>
                        <p className="card-text">Description of Service 3</p>
                    </div>
                </div>
            </div>
            <div className="bubble">
                <div className="row">
                    <div className="col-md-10">
                        <img src={bubble} alt="service" />
                    </div>
                    <div className="bubble-overlay">
                        <h1 className="bubble-heading">
                            Ready for a pristine space? Ensure your space gleams with our top-tier cleaning services. Get in touch with us today for a home that sparkles!
                        </h1>
                        <div className="col-md-2">
                            <button className="btn btn-outline-primary bubble-button">
                                Click Me
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Third;
