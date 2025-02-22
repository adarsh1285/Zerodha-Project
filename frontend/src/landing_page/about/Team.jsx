import React from 'react'


function Team() {
  return (
    <div className="container p-3">
      <div className="row text-muted text-center">
        <h2>People</h2>
      </div>
      <div className="row p-5">
        <div className="col-6 mt-4 text-center">
          <img src='media/images/adarsh.jpg' style={{width: "50%", borderRadius: "50%"}}/>
          <h4 className='text-muted mt-4'>Adarsh Pal</h4>
          <h5 className='text-muted'>(Creater)</h5>
        </div>
        <div className="col-6">
          <p className='my-5'>Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry. <br/><br/>
          He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).<br/><br/>
          Playing basketball is his zen.<br/><br/>
          Connect on TradingQnA / Twitter</p>
        </div>
      </div>
    </div>
  )
}

export default Team
