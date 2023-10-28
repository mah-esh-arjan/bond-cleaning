import React from 'react'

const Copyright = () => {
  return (
    <div className="copyright-block py-2" style={{ backgroundColor: 'rgb(103, 103, 235)'}}>
      <div className="container">
        <div className="d-flex flex-wrap justify-content-between text-white">
          <div className="text-wrap">
            &copy; 2023 GS Bond Cleaning | Designed and Marketing by TGC Nepal
          </div>
          <div className="list-holder text-capitalize">
            <ul className="copyright-list d-flex flex-wrap">
              <li className='px-2'>
                <span>Privacy Policy</span>
              </li>
              <li className='px-2'>
                <span>terms &amp; conditions</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Copyright