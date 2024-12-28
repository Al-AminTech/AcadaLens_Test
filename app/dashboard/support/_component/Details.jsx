'use client'

import { Check } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { CiCalendar } from 'react-icons/ci'
import { IoTimeOutline } from 'react-icons/io5'

export default function Success() {
  return (
    <div className="min-h-screen bg-white flex items-center justify-center">
      <div className="max-w-md w-full mx-auto p-6 text-center space-y-8">
        {/* Checkmark Icon */}
        <div className="mx-auto w-20 h-20 bg-sky-200 rounded-full flex items-center justify-center">
          <Check className="w-10 h-10 text-white" />
        </div>

        {/* Date and Time */}
        <div className="flex justify-center gap-8">
          <div className="flex items-center gap-2">
            <div className="rounded-full border p-2">
            <CiCalendar/>
            </div>
            <span>Dec 25, 2024</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="rounded-full border p-2">
            <IoTimeOutline />
            </div>
            <span>5:30 PM- 5:55 PM</span>
          </div>
        </div>

        {/* Thank you message */}
        <div className="space-y-4">
          <h1 className="text-2xl font-semibold">Thank you!</h1>
          <p className="text-gray-600">
            Your call booking is completed. An email has been sent to you with details of the call details.
          </p>
        </div>

        {/* Completed Button */}
        <Button 
          className="w-full bg-teal-800 hover:bg-teal-700"
          onClick={() => window.location.href = '/'}
        >
          Completed
        </Button>
      </div>
    </div>
  )
}

