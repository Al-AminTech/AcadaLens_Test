import React from 'react'
import Component from './_omponents/Property'
import Offers from './_omponents/Offers'
import Steam from './_omponents/Team'
import Teacher from '../_component/Teacher'
import TestimonialCarousel from '../_component/Testimonial'
import Learn from '../_component/Learn'
import Footer from '../_component/Footer'
import Academic from '../_component/Acedemic'
import Header from '../_component/Header'
import Hero from './_omponents/Hero'
import Experience from './_omponents/Experience'

function page() {
  return (
    <div>
      <div className="relative">
        <div className="absolute z-10 w-full mt-3">
          <Header  />
        </div>
        <div>
          <Hero />
        </div>
      </div>
      <Experience/>
      <Component />
      <Offers/>
      <Steam/>
      <Teacher/>
      <Academic/>
      <TestimonialCarousel/>
      <Learn/>
      <Footer/>
    </div>
  )
}

export default page
