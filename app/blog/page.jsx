import React from 'react'
import Header from '../_component/Header'
import OurBlog from './_component/Ourblog'
import ArticlesPage from './articles'
import Learn from '../_component/Learn'
import Footer from '../_component/Footer'

function page() {
  return (
    <div>
         <div className="relative">
        <div className="absolute w-full mt-3">
          <Header />
        </div>
        <div>
          <OurBlog />
        </div>
        <ArticlesPage/>
        <Learn/>
        <Footer/>
      </div>
    </div>
  )
}

export default page
