import React from 'react'
import Bird from './_component/Bird'
import Contact from './_component/Contact'
import Header from '../_component/Header'
import Footer from '../_component/Footer'
import Learn from '../_component/Learn'
import Contacts from './_component/Contacts'

function page() {
  return (
    <div>
       <div className="relative">
        <div className="absolute w-full mt-3">
          <Header />
        </div>
        <div>
          <Contacts />
        </div>
      </div>
        <Bird/>
        <Contact/>
      <Learn/>
      <Footer/>
    </div>
  )
}

export default page