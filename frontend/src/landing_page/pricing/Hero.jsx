import React from 'react'

function Hero() {
  return (
    <div className="container">
      <div className="row text-center text-muted p-5">
        <h2 className='pt-2'>Princing</h2>
        <p className='pb-5'>Free epuity investments and flat ₹20 traday and F&Q trades</p>
      </div>
      <div className="row">
        <div className="col-4">
          <img src='media\images\pricing0.svg'/>
          <div className='text-center text-muted'>
            <h3>Free equity delivery</h3>
            <p>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
          </div>
        </div>
        <div className="col-4">
        <img src='media\images\intradayTrades.svg'/>
        <div className='text-center text-muted'>
          <h3>Intraday and F&O trades</h3>
          <p>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
        </div>
        </div>
        <div className="col-4">
        <img src='media\images\pricing0.svg'/>
        <div className='text-center text-muted'>
          <h3>Free direct MF</h3>
          <p>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
        </div>
        </div>
      </div>
      <div className="row">
      <div className='container p-5 mb-5 sm-'>
      <div className='row text-center'>
        {/* <img src='media/images/homeHero.png' alt='Hero image' className='md-5'/> */}
        <h1 className='mt-5'>Invest in everything</h1>
        <p className='p-3'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Sign up now</button> 
      </div>
    </div>
      </div>
    </div>
  )
}

export default Hero
