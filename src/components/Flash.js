import React from 'react'
import flash1 from '../images/flash1.webp'
import flash2 from '../images/flash2.webp'
import './css/flash.css'


function Flash() {
  return (
    <>
      <div className="app__flash">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-4 mb-4">
                      <img className='img-fluid' src={flash1} alt="" />
                  </div>
                  <div className="col-md-8">
                      <img className='img-fluid' src={flash2} alt="" />
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Flash