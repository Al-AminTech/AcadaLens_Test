import { Button } from '@/components/ui/button'
import React from 'react'

function Learn() {
  return (
    <div className='learn pt-32 md:pt-0 pl-3 md:text-center flex flex-col md:justify-center justify-start '>
        <h3 className='font-bold  text-xl md:text-3xl text-white'>Learn, Practice, Compete And Interact From Anywhere</h3>
        <div className='flex flex-col md:flex-row justify-start md:justify-center  gap-4 mt-4 md:mt-3 m-3 md:m-0'>
            <input type="text" placeholder='Enter Your Email'  className='rounded-md  pl-3  md:m-0 w-full md:w-[25rem] text-black h-12 outline-none text-md'/>
            <Button className="bg-[#005C73] rounded-md w-full md:w-36 h-12">Get Started</Button>
        </div>
    </div>
  )
}

export default Learn