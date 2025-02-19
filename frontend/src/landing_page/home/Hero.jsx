import React from 'react'

function Hero() {
  return (
    <div className='container p-5 mb-5 sm-'>
      <div className='row text-center'>
        <img src='media/images/homeHero.png' alt='Hero image' className='md-5'/>
        <h1 className='mt-5'>Invest in everything</h1>
        <p className='p-3'>Online platform to invest in stocks, derivatives, mutual funds, ETFs, bonds, and more.</p>
        <button className='p-2 btn btn-primary fs-5' style={{width:"20%", margin:"0 auto"}}>Sign up now</button> 
      </div>
    </div>
  )
}

export default Hero
