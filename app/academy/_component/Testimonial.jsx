// 'use client'

// import { useState } from 'react'
// import { ChevronLeft, ChevronRight } from 'lucide-react'

// const testimonials = [
//   {
//     id: 1,
//     content: "AcadaLens has helped in a lot of ways but more importantly it has helped scale through in topics from Physics and Chemistry that I've thought i could not understand. The guidance and personalized AI assistance learning is also top notch. Overall it's a platform i will recommend any day.",
//     name: "Sanni Ahmed Agboola",
//     role: "Learner's reviews",
//     avatar: "/placeholder.svg?height=56&width=56"
//   },
//   {
//     id: 2,
//     content: "AcadaLens has helped in a lot of ways but more importantly it has helped scale through in topics from Physics and Chemistry that I've thought i could not understand. The guidance and personalized AI assistance learning is also top notch. Overall it's a platform i will recommend any day.",
//     name: "Sanni Ahmed Agboola",
//     role: "Learner's reviews",
//     avatar: "/placeholder.svg?height=56&width=56"
//   },
//   {
//     id: 3,
//     content: "AcadaLens has helped in a lot of ways but more importantly it has helped scale through in topics from Physics and Chemistry that I've thought i could not understand. The guidance and personalized AI assistance learning is also top notch. Overall it's a platform i will recommend any day.",
//     name: "Sanni Ahmed Agboola",
//     role: "Learner's reviews",
//     avatar: "/placeholder.svg?height=56&width=56"
//   },
//   {
//     id: 4,
//     content: "AcadaLens has helped in a lot of ways but more importantly it has helped scale through in topics from Physics and Chemistry that I've thought i could not understand. The guidance and personalized AI assistance learning is also top notch. Overall it's a platform i will recommend any day.",
//     name: "Sanni Ahmed Agboola",
//     role: "Learner's reviews",
//     avatar: "/placeholder.svg?height=56&width=56"
//   }
// ]

// export default function TestimonialCarousel() {
//   const [currentIndex, setCurrentIndex] = useState(0)

//   const nextSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
//   }

//   const prevSlide = () => {
//     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
//   }

//   return (
//    <div className='bg-[#F2FDFF]'>
//      <div className="w-full max-w-7xl mx-auto px-4 py-16">
//       <h2 className="text-4xl font-bold text-center mb-12">What people are saying about AcadaLens</h2>
//       <div className="relative overflow-hidden">
//         <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}>
//           {testimonials.map((testimonial, index) => (
//             <div key={testimonial.id} className="w-1/3 flex-shrink-0 px-6 relative">
//               <div className="p-6 h-full">
//                 <p className="text-sm mb-4">{testimonial.content}</p>
//                 <div className="flex items-center">
//                   <div className="flex-grow">
//                     <h3 className="text-base font-semibold">{testimonial.name}</h3>
//                     <p className="text-xs text-gray-600">{testimonial.role}</p>
//                   </div>
//                   <img src={testimonial.avatar} alt={testimonial.name} className="w-14 h-14 rounded-full" />
//                 </div>
//               </div>
//               {index < testimonials.length - 1 && (
//                 <div className="absolute right-0 top-0 bottom-0 w-px bg-black" style={{ right: '1px' }} />
//               )}
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="flex justify-end mt-8">
//         <button
//           onClick={prevSlide}
//           className="bg-teal-600 text-white p-3 rounded-full mr-4"
//           aria-label="Previous testimonial"
//         >
//           <ChevronLeft className="w-6 h-6" />
//         </button>
//         <button
//           onClick={nextSlide}
//           className="bg-teal-600 text-white p-3 rounded-full"
//           aria-label="Next testimonial"
//         >
//           <ChevronRight className="w-6 h-6" />
//         </button>
//       </div>
//     </div>
//    </div>
//   )
// }
'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'
import { Learners } from '@/app/img'
// import { Learners } from '../img'

const testimonials = [
  {
    id: 1,
    content: "AcadaLens has helped in a lot of ways but more importantly it has helped scale through in topics from Physics and Chemistry that I've thought i could not understand. The guidance and personalized AI assistance learning is also top notch. Overall it's a platform i will recommend any day.",
    name: "Sanni Ahmed Agboola",
    role: "Learner's reviews",
    avatar: "/placeholder.svg?height=56&width=56"
  },
  {
    id: 2,
    content: "AcadaLens has helped in a lot of ways but more importantly it has helped scale through in topics from Physics and Chemistry that I've thought i could not understand. The guidance and personalized AI assistance learning is also top notch. Overall it's a platform i will recommend any day.",
    name: "Sanni Ahmed Agboola",
    role: "Learner's reviews",
    avatar: "/placeholder.svg?height=56&width=56"
  },
  {
    id: 3,
    content: "AcadaLens has helped in a lot of ways but more importantly it has helped scale through in topics from Physics and Chemistry that I've thought i could not understand. The guidance and personalized AI assistance learning is also top notch. Overall it's a platform i will recommend any day.",
    name: "Sanni Ahmed Agboola",
    role: "Learner's reviews",
    avatar: "/placeholder.svg?height=56&width=56"
  },
  {
    id: 4,
    content: "AcadaLens has helped in a lot of ways but more importantly it has helped scale through in topics from Physics and Chemistry that I've thought i could not understand. The guidance and personalized AI assistance learning is also top notch. Overall it's a platform i will recommend any day.",
    name: "Sanni Ahmed Agboola",
    role: "Learner's reviews",
    avatar: "/placeholder.svg?height=56&width=56"
  }
]

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    if (currentIndex < testimonials.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1)
    }
  }

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1)
    }
  }

  return (
    <div className="sm:bg-[#F2FDFF]">
      <div className="w-full max-w-7xl mx-auto px-0 md:px-4 py-16">
        <h2 className="text-3xl md:text-4xl  font-bold text-center mb-12">What people are saying about AcadaLens</h2>
        <div className="relative overflow-hidden">
          <div className="flex transition-transform duration-300 ease-in-out" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {testimonials.map((testimonial, index) => (
              <div key={testimonial.id} className="w-full sm:w-1/3 flex-shrink-0 px-6 relative">
                <div className="p-6 h-full">
                  <p className="text-sm mb-4">{testimonial.content}</p>
                  <div className="flex items-center">
                    <div className="flex-grow">
                      <h3 className="text-base font-semibold">{testimonial.name}</h3>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                    <Image src={Learners} alt={testimonial.name} className="w-14 h-14 rounded-full" />
                  </div>
                </div>
                {index < testimonials.length - 1 && (
                  <div className="absolute right-0 top-0 bottom-0 w-px bg-black" style={{ right: '1px' }} />
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center sm:justify-end mt-8">
          <button
            onClick={prevSlide}
            className="bg-teal-600 text-white p-3 rounded-full mr-4"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={nextSlide}
            className="bg-teal-600 text-white p-3 rounded-full"
            aria-label="Next testimonial"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  )
}
