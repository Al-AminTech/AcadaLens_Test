import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'
import { hero } from '../img'

function HeroSec() {
  return (
    <div className='flex flex-col md:flex-row  gap-7 md:justify-around mt-10'>
        <div>
            <h3 className=' text-[30px] md:text-[40px] md:w-[421px] w-full font-bold text-center md:text-start'><span className='text-[#005C73]'>Best Platform</span> Where You Can Dive Into Greatness of <span className='text-[#005C73]  italic text-end'>Learning</span></h3>
            <p className='text-[14px] md:text-[17px] w-full md:w-[427px] text-center md:text-start font-medium p-2'>A web solution that care for your all round academic solution for Pre-college stage and college stage</p>
            <div className='flex justify-start gap-5 ml-6'>
                <Button  className="bg-[#0090B2] rounded-full w-36 h-10">Get Started</Button>
                <Button variant="outline"  className="border w-36 h-10 text-lg border-[#0090B2] rounded-full text-[#0090B2]">Login</Button>
            </div>
        </div>
        <div>
            <Image  src={hero} className='p-4 image md:h-[26rem] h-full w-full md:w-[27rem] ' />
        </div>
    </div>
  )
}

export default HeroSec