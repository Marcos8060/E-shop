import React from 'react'
import './css/footer.css'

function Footer() {
  return (
    <>
      <div className="app__footer">
          <div className="container-fluid">
              <div className="row">
                  <div className="col-md-4 text-center">
                      <h1 className='logo__footer'>E-shop</h1>
                  </div>
                  <div className="col-md-4 text-center">
                      <p>@Copyright Allrights Reserved</p>
                  </div>
                  <div className="col-md-4 text-center">
                      <h2>2022</h2>
                  </div>
              </div>
          </div>
      </div>
    </>
  )
}

export default Footer