import React from 'react'


function Hero() {
  return (
    <div className="container-fluid" style={{ backgroundColor: '#387ed1', color: 'white' }}>
      <div className="container p-5">
        <div className="row">
          <div className="col-6">
            <h5>Support portal</h5>
          </div>
          <div className="col-6">
            <a href='#' style={{ color: 'white' }} className='d-flex justify-content-end'>Track tickets</a>
          </div>
        </div>
        <div className="row pt-4">
          <div className="col-6">
            <h4>Search for an answer or browse help topics to create a ticket</h4>
            <div>
              <input className='search' placeholder="Eg: how do i activate F&O, why is my order getting rejected ..." />
            </div>
            <div className='pt-3'>
              <a className='me-3' href='#' style={{color: 'white'}}>Track account opning</a>
              <a className='me-3' href='#' style={{color: 'white'}}>Track segment activation</a>
              <a className='me-3' href='#' style={{color: 'white'}}>Traday margins</a><br/><br/>
              <a className='me-3' href='#' style={{color: 'white'}}>Kite user munual</a>
            </div>
          </div>
          <div className="col-6 pt-5">
            <h5>Featured</h5>
            <div>
              <ul className='p-3'>
                <ol>
                  <li><a href='#' style={{ color: 'white' }}>Rights Entitlements listing in February 2025</a></li>
                  <li className='pt-4'><a href='#' style={{ color: 'white' }}>Latest Intraday leverages and Square-off timings</a></li>
                </ol>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
