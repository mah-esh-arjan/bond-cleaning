import React from 'react'
import Card from 'react-bootstrap/Card';

const CustomCard = ({ title, description }) => {
  return (
    <Card className='position-relative'>
      <div className="bg-image">
        <img src='images/bg-pattern.svg' alt='card background' />
      </div>
      <Card.Title>{ title }</Card.Title>
      <Card.Text>
        { description }
      </Card.Text>
    </Card>
  )
}

export default CustomCard