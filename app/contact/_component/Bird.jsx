import { dog } from '@/app/img'
import Image from 'next/image'
import React from 'react'

function Bird() {
  return (
    <div className='flex flex-col-reverse bg-[#F2FDFF] md:flex-row justify-center items-center gap-28'>
        <div className='flex justify-center w-full md:w-auto'>
            <Image src={dog}/>
        </div>
        <div className='pt-20 pl-5 md:pl-0'>
            <h1 className='font-black text-2xl'>Contact Us</h1>
            <p className='w-full md:w-[453px] text-[#000000]'>If you have any general question  for us at AcadaLens chances are you could find answers to them on our FAQs page.</p>
        </div>
    </div>
  )
}

export default Bird