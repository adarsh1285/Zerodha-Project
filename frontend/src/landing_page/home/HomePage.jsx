import React from 'react'
import Hero from './Hero'
import Education from './Education'
import Stats from './Stats'
import Pricing from './Pricing'
import Awards from './Awards'


import OpenAccount from '../OpenAccount'


function HomePage() {
  return (
    <div>
      <Hero/> 
      <Awards/>
      <Stats/>
      <Pricing/>
      <Education/>
      <OpenAccount/>
    </div>
  )
}

export default HomePage
