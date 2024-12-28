import React from 'react'
import Header from '../_component/Header'
import OurBlog from './_component/Ourblog'
import ArticlesPage from './articles'

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
      </div>
    </div>
  )
}

export default page
