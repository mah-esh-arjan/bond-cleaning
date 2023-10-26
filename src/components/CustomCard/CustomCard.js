import React from 'react'
import Card from 'react-bootstrap/Card';

import './CustomCard.scss'

const CustomCard = ({ title, description, className }) => {
  return (
    <Card className={`custom-card overflow-hidden position-relative p-5 ${className || ''}`}>
      <div className="card-bg-patterns">
        <div className="bg-pattern pattern-top" style={{ backgroundImage: "url('images/card-bg-pattern.svg')" }} />
        <div className="bg-pattern pattern-right" style={{ backgroundImage: "url('images/card-bg-pattern-vertical.svg')" }} />
        <div className="bg-pattern pattern-bottom" style={{ backgroundImage: "url('images/card-bg-pattern.svg')" }} />
        <div className="bg-pattern pattern-left" style={{ backgroundImage: "url('images/card-bg-pattern-vertical.svg')" }} />
      </div>
      <div className="card-content position-relative">
        <Card.Title className='text-capitalize' as='h2'>{ title }</Card.Title>
        <Card.Text>
          { description }
        </Card.Text>
      </div>
    </Card>
  )
}

export default CustomCard