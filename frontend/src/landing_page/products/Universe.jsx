import React from 'react'

function Universe() {
  return (
    <div className="container p-5">
      <div className="row text-muted text-center">
        <h2>The Zerodha Universe</h2>
        <p className='pt-2'>Extend your trading and investment experience even further with our partner platforms</p>
        <div className="col-4 p-4">
          <img src='media\images\zerodhaFundhouse.png' style={{width: "50%"}}/>
          <p className='text-small text-muted'>Our asset management venture</p>
        </div>
        <div className="col-4 p-4">
          <img src='media\images\sensibullLogo.svg' style={{width: "60%"}} />
          <p className='text-small text-muted'>data points like open interest, FII/DII, and more.</p>
        </div>
        <div className="col-4 p-4">
          <img src='media\images\tijori.svg' style={{width: "40%"}}/>
          <p className='text-small text-muted'>sectors, supply chains, and more.</p>
        </div>
        <div className="col-4 p-4 mt-4">
          <img src='media\images\streakLogo.png' style={{width: "45%"}}/>
          <p className='text-small text-muted'>Systematic trading platform</p>
        </div>
        <div className="col-4 p-4 mt-4">
          <img src='media\images\smallcaseLogo.png' />
          <p className='text-small text-muted'>Thematic investing platform</p>
        </div>
        <div className="col-4 p-4 mt-4">
          <img src='media\images\dittoLogo.png' style={{width: "40%"}} />
          <p className='text-small text-muted'>Personalized advice on life</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mt-4' style={{width:"20%", margin:"0 auto"}}>Sign up now</button> 
      </div>
    </div>
  )
}

export default Universe
