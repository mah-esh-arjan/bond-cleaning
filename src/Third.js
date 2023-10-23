import React from 'react';
import './CSS/third.css';
import bubble from './img/bubble.jpg'
import { Card, CardContent, Typography } from '@mui/material';
import 'bootstrap/dist/css/bootstrap.min.css';

function Third() {
    return (
        <div>
            <div className='third-heading'>
                <h1>Our services range:</h1>
            </div>
            <div className='third-card'>
                <Card className='card-spacing'>
                    <CardContent>
                        <Typography variant='h5'>Service 1</Typography>
                        <Typography variant='body2'>Description of Service 1</Typography>
                    </CardContent>
                </Card>
                <Card className='card-spacing'>
                    <CardContent>
                        <Typography variant='h5'>Service 2</Typography>
                        <Typography variant='body2'>
                            Description of Service 2
                        </Typography>
                    </CardContent>
                </Card>
                <Card className='card-spacing'>
                    <CardContent>
                        <Typography variant='h5'>Service 3</Typography>
                        <Typography variant='body2'>Description of Service 3</Typography>
                    </CardContent>
                </Card>
            </div>
            <div className='bubble'>
                <div className="row">
                    <div className="col-md-10 ">
                        <img src={bubble} alt='service' />
                    </div>

                    <div class='bubble-overlay'>
                        <h1 class='bubble-heading'>
                            Ready for a pristine space? Ensure your space gleams with our top-tier cleaning services.
                            Get in touch with us today for a home that sparkles!
                        </h1>
                        {/* Add a Bootstrap button with outline and hover effect */}
                        <div className="col-md-2" >
                            <button className='btn btn-outline-primary bubble-button' >
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