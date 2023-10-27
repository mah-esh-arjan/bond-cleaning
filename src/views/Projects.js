import React from 'react'
import Slider from "react-slick";

const SLIDER_SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1
};

const SLIDES_DATA = [
  {
    title: 'outdoor cleaning',
    imgSrc: 'images/img01.jpg'
  },
  {
    title: 'car cleaning',
    imgSrc: 'images/img02.jpg'
  },
  {
    title: 'furniture cleaning',
    imgSrc: 'images/img03.jpg'
  },
  {
    title: 'kitchen cleaning',
    imgSrc: 'images/img04.jpg'
  },
]

const Projects = () => {
  return (
    <section id="projects" className='py-5' style={{ backgroundColor: 'rgb(103, 103, 235)' }}>
      <div className="container">
        <div className="block-header text-center text-capitalize text-white">
          <h2>Keep your vision to our <br /> latest projects</h2>
        </div>
        <div className="content-holder">
          <Slider {...SLIDER_SETTINGS}>

          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Projects