import { faq } from '@/app/img'
import Image from 'next/image'
import React from 'react'

function Question() {
  return (
    <div className=' bg-[#f0f8f9]'>
        <div className='flex flex-col md:flex-row items-center justify-center gap-0 md:gap-5 '>
            <div>
                <Image src={faq}/>
            </div>
            <div className='pt-10'>
                <h1 className='font-bold text-2xl  text-center'>We are here to answer all your questions</h1>
                <p className='font-medium w-full pt-3 md:w-[637px] text-center'>These are questions and answers to general popular questions from our users and enquirers</p>
            </div>
        </div>
    </div>
  )
}

export default Question;