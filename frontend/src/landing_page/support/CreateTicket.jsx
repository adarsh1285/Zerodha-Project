import React from 'react'

function CreateTicket() {
  return (
    <div className="container p-5">
      <h4 className='text-muted'>To create a ticket, select a relevant topic</h4>
      <div className="row">
        <div className="col-4 p-3">
         <p><i class="fa-solid fa-plus"></i> Account Opening</p>
         <ul className='list-unstyled'>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Getting start</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Online</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Ofline</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Charges</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Conpany, Partnership and HUF</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Non Resident Indian (NRI)</a></li>
         </ul>
        </div>
        <div className="col-4 p-3">
          <p><i class="fa-regular fa-user"></i> Your Zerodha Account</p>
          <ul className='list-unstyled'>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Login Credentials</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Your Profile</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Account modification and segment addition</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>CMR and DP ID</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Nomination</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Transfer and conversion of shares</a></li>
         </ul>
        </div>
        <div className="col-4 p-3">
          <p><i class="fa-solid fa-signal"></i> Trading and Markets</p>
          <ul className='list-unstyled'>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Tranding FAQs</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Kite</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Margines</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Product and order types</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Corporate actions</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Kite features</a></li>
         </ul>
        </div>
      </div>
   
      <div className="row">
        <div className="col-4 p-3">
         <p><i class="fa-regular fa-folder"></i> Funds</p>
         <ul className='list-unstyled'>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Fund withdrawal</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Adding funds</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Adding bank accounts</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>eMandates</a></li>
         </ul>
        </div>
        <div className="col-4 p-3">
          <p><i class="fa-regular fa-circle-xmark"></i> Console</p>
          <ul className='list-unstyled'>
          <li><a href='#' className='text-decoration-none d-block mb-2'>IPO</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Portfolio</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Funds statement</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Profile</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Reports</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Referral program</a></li>
         </ul>
        </div>
        <div className="col-4 p-3">
          <p><i class="fa-solid fa-coins"></i> Coins</p>
          <ul className='list-unstyled'>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Understanding mutual funds and Coin</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Coin app</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Coin web</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>Transactions and reports</a></li>
          <li><a href='#' className='text-decoration-none d-block mb-2'>National Pension Scheme (NPS)</a></li>
         </ul>
        </div>
      </div>
    </div>
  )
}

export default CreateTicket
