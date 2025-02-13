import React from 'react'
import Question from './_component/Question'
import { AccordionDemo } from './_component/Accords'
import Started from './_component/Started'
import Learn from '../_component/Learn'
import Footer from '../_component/Footer'
import Header from '../_component/Header'
import FaQ from './_component/Faqs'
// import Accord from './_component/Accord'
function page() {
  return (
    <div>
      <div className="relative">
        <div className="absolute w-full mt-3">
          <Header />
        </div>
        <div>
          <FaQ />
        </div>
      </div>
        <Question/>
        <AccordionDemo/>
        <Started/>
        <Learn/>
        <Footer/>
    </div>
  )
}

export default page