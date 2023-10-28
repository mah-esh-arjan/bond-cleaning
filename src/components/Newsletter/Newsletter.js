import React from 'react'
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';

const Newsletter = () => {
  return (
    <div className="newsletter">
      <div className="block-header text-capitalize">
        <h3>newsletter</h3>
      </div>
      <div className="text-wrap mb-3">
        <span>Subscribe our newsletter to get our latest update & news</span>
      </div>
      <Form>
        <Form.Group className="mb-5" controlId="exampleForm.ControlInput1">
          <Form.Control type="email" placeholder="Your mail address" />
        </Form.Group>
        <Button variant="primary" className='text-uppercase' size='lg'>subscribe</Button>
      </Form>
    </div>
  )
}

export default Newsletter