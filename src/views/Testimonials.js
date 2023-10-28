import React from 'react'
import Slider from "react-slick";
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import './Testimonials.scss'

const SLIDER_SETTINGS = {
  arrows: false,
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const SLIDES_DATA = [
  {
    id: 0,
    user: 'Mahesh DallE',
    testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  },
  {
    id: 1,
    user: 'Xtreme Opponent',
    testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis ptio deserunt modi, cum quidem quae libero aliquam expedita ducimus illo repellat. Repellendus eum fugit rerum culpa asperiores!'
  },
  {
    id: 2,
    user: 'Sasto Dev',
    testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium hic reiciendis',
  },
  {
    id: 3,
    user: 'Qr Deu',
    testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis praesentium hic reiciendis optio deserunt modi, cum quidem quae libero aliquam expedita ducimus illo repellat. Repellendus eum fugit rerum culpa asperiores!',
  },
]

const TestimonialSlide = ({ testimonial, user }) => {
  return (
    <div className="slide">
      <div className="icon-holder">
        <FormatQuoteIcon fontSize='inherit' />
      </div>
      <div className="slide-content">
        <p>{testimonial}</p>
        <strong className='text-lg'>{user}</strong>
      </div>
    </div>
  )
}

const Testimonial = () => {
  return (
    <section id='testimonials' className='py-5' style={{ backgroundColor: 'rgb(103, 103, 235)' }}>
      <div className="container">
        <div className="block-header text-center text-white mb-5">
            <h2>Providing the Best Services<br />for our Customers</h2>
        </div>
        <div className="content-holder">
          <Slider {...SLIDER_SETTINGS}>
            {
              SLIDES_DATA.map(slide => <TestimonialSlide {...slide} />)
            }
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Testimonial