import React from 'react'

import CustomCard from '../components/CustomCard'

const CARDS_DATA = [
  {
    id: 1,
    title: 'end of lease cleaning',
    description: 'Get comprehensive bond clean Adelaide service for a smooth exit. We sanitize, scrub, and polish, leaving no corner untouched. Get your bond back hassle-free. Get comprehensive bond clean Adelaide service for a smooth exit.'
  },
  {
    id: 2,
    title: 'Office Cleaning',
    description: 'Elevate your workspace hygiene with professional office cleaning for a pristine and organized workspace that impresses clients.'
  },
  {
    id: 3,
    title: 'Carpet Cleaning',
    description: 'Restore your carpet’s brilliance. We deep-clean, remove stains, and eliminate allergens, breathing new life into your floors and improving indoor air quality.'
  },
  {
    id: 4,
    title: 'Spring Cleaning',
    description: 'Welcome to the season with freshness. We dust, declutter, sanitize, and rejuvenate your space, creating a healthier and invigorating atmosphere.'
  },
  {
    id: 5,
    title: 'Bond Cleaning',
    description: 'Secure your bond back with perfection. We meticulously clean every inch, from walls to floors, guaranteeing landlord approval and a full bond refund.'
  },
  {
    id: 6,
    title: 'Kitchen Cleaning',
    description: 'Revive your kitchen’s sparkle with thorough kitchen cleaning, tackling grease and grime to create a safe cooking environment.'
  }
]

const Services = () => {
  return (
    <section id="services" className='text-center py-5' style={{ backgroundColor: '#F2F6FF' }}>
      <div className="container">
        <div className="block-header mb-5">
          <h2>Our services range:</h2>
        </div>
        <div className="list-holder">
          <ul className="services-list d-flex flex-wrap">
              {
                CARDS_DATA.map(cardItem => {
                  return (
                    <li className='col-4 mb-5 px-2'  key={cardItem.id}>
                      <CustomCard className='h-100' title={cardItem.title} description={cardItem.description} />
                    </li>
                  )
                })
              }
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Services