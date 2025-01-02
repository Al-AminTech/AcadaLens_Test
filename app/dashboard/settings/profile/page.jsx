import React from 'react'
import ProfileHeader from '../ProfileHeader'
import ProfileForm from '../ProfileForm'

function page() {
  return (
    <div className='bg-white shadow-lg w-[60rem] h-[44rem] m-4 rounded-md '>
      <ProfileHeader/>
      <ProfileForm/>
    </div>
  )
}

export default page
