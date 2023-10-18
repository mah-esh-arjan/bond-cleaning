import React from 'react';
import './CSS/third.css';
import bubble from './img/bubble.jpg'
import { Card, CardContent, Typography } from '@mui/material';

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
                        <Typography variant='body2'>Description of Service 2 </Typography>
                    </CardContent>
                </Card>
                <Card className='card-spacing'>
                    <CardContent>
                        <Typography variant='h5'>Service 3</Typography>
                        <Typography variant='body2'>Description of Service 3</Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}

export default Third;