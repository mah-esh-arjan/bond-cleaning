import React from 'react'
import Accordion from 'react-bootstrap/Accordion';

import './Faq.scss'

const FAQ_DATA = [
  {
    id: 0,
    question: 'Why choose GS Bond Cleaners in Adelaide?',
    answer: 'GS Bond Cleaning ensures flawless results, hassle-free moves, experienced teams, and eco-friendly practices.'
  },
  {
    id: 1,
    question: 'Are GS Bond Cleaners Adelaide insured?',
    answer: 'Yes, GS Bond Cleaners in Adelaide are fully insured, providing peace of mind to your cleaning needs.'
  },
  {
    id: 2,
    question: 'What makes GS Bond Cleaners in Adelaide stand out?',
    answer: 'GS Bond Cleaners excel with expertise, dedication, customer satisfaction, and a history of successful bond refunds.'
  },
  {
    id: 3,
    question: 'How does GS Bond Cleaning benefit you?',
    answer: 'GS Adelaide’s Bond Cleaning services guarantee your bond refund, leaving your property spotless, stress-free, and ready for your new journey.'
  }
]

const Faq = ({ isVisible }) => {
  return (
    <section id='faq' style={{ backgroundColor: '#F2F6FF' }}  className={`py-5 ${isVisible ? 'anim-active' : ''}`}>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="img-holder">
              <img src="images/faq_img02.png" alt="cleaner" />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="block-header mb-5">
              <h3>Frequently Asked Question from Our Clients</h3>
            </div>
            <Accordion defaultActiveKey={0}>
              {
                FAQ_DATA.map(item => {
                  return (
                    <Accordion.Item eventKey={item.id} key={item.id} className='mb-4'>
                      <Accordion.Header>
                        <div className="position-relative py-3 w-100" style={{ paddingRight: '55px' }}>
                          <strong>{item.question}</strong>
                          <div className="accordion-icon"></div>
                        </div>
                      </Accordion.Header>
                      <Accordion.Body>
                        {item.answer}
                      </Accordion.Body>
                    </Accordion.Item>
                  )
                })
              }
            </Accordion>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Faq