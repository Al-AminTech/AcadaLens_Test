import { Button } from '@/components/ui/button'
import React from 'react'

function Learn() {
  return (
    <div className='bg-[#FABC05] pt-32 md:pt-0 pl-3 md:text-center flex flex-col md:justify-center justify-start h-[30rem] '>
        <h3 className='font-bold text-3xl text-white'>Learn, Practice, Compete And Interact From Anywhere</h3>
        <div className='flex justify-start md:justify-center  gap-4 mt-3'>
            <input type="text" placeholder='Enter Your Email'  className='rounded-md  pl-3 h-12 outline-none text-md'/>
            <Button className="bg-[#005C73] rounded-md w-36 h-12">Get Started</Button>
        </div>
    </div>
  )
}

export default Learn