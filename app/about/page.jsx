import React from 'react'
import Hersecs from './_component/Hersecs'
import Values from './_component/Values'
import Team from './_component/Team'
import Learn from '../_component/Learn'
import Footer from '../_component/Footer'
import Header from '../_component/Header'

function page() {
  return (
    <div>
      <Header/>
        <Hersecs/>
        <Values/>
        <Team/>
        <Learn/>
        <Footer/>
    </div>
  )
}

export default page