import React from 'react'
import Slider from "react-slick";

import './Projects.scss'

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
    title: 'outdoor cleaning',
    imgSrc: 'images/img01.jpg'
  },
  {
    id: 1,
    title: 'car cleaning',
    imgSrc: 'images/img02.jpg'
  },
  {
    id: 2,
    title: 'furniture cleaning',
    imgSrc: 'images/img03.jpg'
  },
  {
    id: 3,
    title: 'kitchen cleaning',
    imgSrc: 'images/img04.jpg'
  },
]

const ProjectSlide = ({ imgSrc, title }) => {
  return (
    <div className="slide">
      <div className="slide-content">
        <div className="overflow-hidden">
          <div className="img-holder" style={{ backgroundImage: `url(${imgSrc})`, paddingTop: '80%' }}>
          </div>
        </div>
        <div className="text-wrap px-4 py-3">
          <h3 className='text-capitalize mb-0'>{title}</h3>
          <span>{title}</span>
        </div>
      </div>
    </div>
  )
}

const Projects = () => {
  return (
    <section id="projects" className='py-5' style={{ backgroundColor: 'rgb(103, 103, 235)' }}>
      <div className="container">
        <div className="block-header text-center text-capitalize text-white mb-5">
          <h2>Keep your vision to our <br /> latest projects</h2>
        </div>
        <div className="content-holder pt-5">
          <Slider {...SLIDER_SETTINGS}>
            {
              SLIDES_DATA.map(slide => <ProjectSlide key={slide.id} {...slide} />)
            }
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Projects