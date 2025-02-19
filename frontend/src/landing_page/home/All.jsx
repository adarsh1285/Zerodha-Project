import React from 'react'
import Hero from './Hero'
import Education from './Education'
import Stats from './Stats'
import Pricing from './Pricing'
import Awards from './Awards'

import Navbar from '../Navbar'
import OpenAccount from '../OpenAccount'
import Footer from '../Footer'

function All() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
      <Footer/>
    </div>
  )
}

export default All
