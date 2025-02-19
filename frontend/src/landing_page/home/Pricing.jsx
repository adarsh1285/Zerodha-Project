import React from 'react'

function Pricing() {
  return (
    <div className="container p-5">
      <div className="row">
        <div className="col-4">
          <h2>Unbeatable pricing</h2>
          <p>We pioneered the concept of discount broking and price transparency in India. Flat fees and no hidden charges.</p>
        </div>
        <div className="col-2"></div>
        <div className="col-6">
          <div className="row text-center">
            <div className="col border">
              <h2>₹0</h2>
              <p>Free quality delivery and direct mutual funds</p>
            </div>
            <div className="col border">
            <h2>₹20</h2>
            <p>Intraday and F&O</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Pricing
