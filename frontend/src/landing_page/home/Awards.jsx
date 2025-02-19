import React from 'react'

function Awards() {
  return (
    <div className='container mt-5'>
      <div className='row'>
        <div className='col-6 p-4'>
          <img src='media/images/largestBroker.svg'/>
        </div>
        <div className='col-6 p-4'>
          <h1 className='mb-3'>Largest stock broker in India</h1>
          <p className='mb-5'>2+ million Zerodha clients contridute to over 15% of all retail order volumes in India daily by 
            trading and investing in: </p>
            <div className="row">
              <div className="col-6">
                <ul>
                  <li className='mb-2'>
                    Futures and options
                  </li>
                  <li className='mb-2'>
                    Commodity derivatives
                  </li>
                  <li className='mb-2'>
                    Currency derivatives
                  </li>
                </ul>
              </div>
              <div className="col-6">
                <ul>
                  <li className='mb-2'>
                    Stocks & IPOs
                  </li>
                  <li className='mb-2'>
                    Direct mutual funds
                  </li>
                  <li className='mb-2'>
                    Bonds and Govt. Securities
                  </li>
                </ul>
              </div>
            </div>
            <img src='media/images/pressLogos.png' style={{width:'90%'}} className='mt-5'/>
        </div>
      </div>
    </div>
  )
}

export default Awards
