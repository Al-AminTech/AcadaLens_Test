import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { Ai } from '../img'

function Acedemic() {
  return (
    <div className='hidden md:flex flex-col gap-3  items-center justify-center bg-[#F2FDFF] pt-10 '>
        <div>
            <h1 className='font-extrabold text-2xl '>Academic Excellence With AI Chatbot</h1>
            <p className='text-center font-medium'>Helping you revise through AI Chatbot</p>
        </div>
        <div>
            <Image src={Ai} className='w-[843px]'/>
        </div>
        <Button className="h-10 w-64">Learn More</Button>
    </div>
  )
}

export default Acedemic;