import React from 'react'
import Bird from './_component/Bird'
import Contact from './_component/Contact'
import Header from '../_component/Header'
import Footer from '../_component/Footer'
import Learn from '../_component/Learn'

function page() {
  return (
    <div>
      <Header/>
        <Bird/>
        <Contact/>
      <Learn/>
      <Footer/>
    </div>
  )
}

export default page