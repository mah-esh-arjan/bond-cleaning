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

const Projects = () => {
  return (
    <section id="projects" className='py-5' style={{ backgroundColor: 'rgb(103, 103, 235)' }}>
      <div className="container">
        <div className="block-header text-center text-capitalize text-white">
          <h2>Keep your vision to our <br /> latest projects</h2>
        </div>
        <div className="content-holder">
          <Slider {...SLIDER_SETTINGS}>
            {
              SLIDES_DATA.map(slide => {
                return (
                  <div className="slide" key={slide.id}>
                    <div className="img-holder">
                      <img src={slide.imgSrc} alt={slide.title} />
                    </div>
                    <div className="text-wrap">
                      <h3>{slide.title}</h3>
                      <span>{slide.title}</span>
                    </div>
                  </div>
                )
              })
            }
          </Slider>
        </div>
      </div>
    </section>
  )
}

export default Projects