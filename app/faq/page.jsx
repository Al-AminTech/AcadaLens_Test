import React from 'react'
import Question from './_component/Question'
import { AccordionDemo } from './_component/Accords'
import Started from './_component/Started'
import Learn from '../_component/Learn'
import Footer from '../_component/Footer'
import Header from '../_component/Header'
// import Accord from './_component/Accord'
function page() {
  return (
    <div>
         <Header />
        <Question/>
        <AccordionDemo/>
        <Started/>
        <Learn/>
        <Footer/>
    </div>
  )
}

export default page