'use client'

import { useState, useEffect } from 'react'
import { ChevronLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { IoPersonOutline, IoTimeOutline } from 'react-icons/io5'
import { CiCalendar } from 'react-icons/ci'
import Link from 'next/link'

export default function ConfirmDetails() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTime, setSelectedTime] = useState('')
  
  useEffect(() => {
    // Get date and time from URL parameters
    const params = new URLSearchParams(window.location.search)
    setSelectedDate(params.get('date') || '')
    setSelectedTime(params.get('time') || '')
  }, [])

  const [formData, setFormData] = useState({
    fullName: 'Sanni Ahmed Agboola',
    email: 'sanniahmedagboola@gmail.com',
    subject: '',
    description: '',
    file: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Navigate to success page with date and time
    window.location.href = `/success?date=${encodeURIComponent(selectedDate)}&time=${encodeURIComponent(selectedTime)}`
  }

  return (
    <div className="min-h-screen shadow-sm bg-white">
      {/* Header */}
      <div className="border-b">
        <div className="px-4 py-2">
         <Link href={"/dashboard/support/step1"}>
         <Button variant="ghost" className="text-teal-800 gap-2" onClick={() => window.location.href = '/calendar'}>
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
         </Link>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-96 border-r p-6">
          {/* <div className="mb-8">
            <img src="/acada-lens-logo.png" alt="Acada Lens" className="h-8" />
          </div> */}

          <div className="space-y-6">
            <div className="flex items-center gap-4">
              <Avatar className="h-16 w-16">
                <img src="/placeholder.svg" alt="Profile" />
              </Avatar>
              <div>
                <div className="text-sm text-muted-foreground">Post UTME, University of Ilorin</div>
                <div className="font-medium">Sanni Ahmed Agboola</div>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-2 text-teal-800">
                <div className="h-2 w-2 rounded-full bg-teal-800" />
                Step 2
              </div>
              <div className="text-lg font-medium">Enter your data correctly</div>
            </div>

            <div className="space-y-4 border-l-2 border-dotted pl-6 py-4 relative">
              {/* <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300" style={{ left: '0.2rem' }}></div> */}
              <div className="flex gap-2 items-center">
                <div className="rounded-full border p-2 bg-white z-10">
                 <IoTimeOutline />
                </div>
                <div>{selectedDate}</div>
              </div>

              <div className="flex gap-2 items-center">
                <div className="rounded-full border p-2 bg-white z-10">
                <CiCalendar/>
                </div>
                <div>{selectedTime}</div>
              </div>

              <div className="flex gap-2 items-center">
                <div className="rounded-full border p-2 bg-white z-10">
                <IoPersonOutline />
                </div>
                <div>Enter information</div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 p-6">
          <div className="w-[35rem] mx-auto">
            <h1 className="text-2xl font-semibold mb-8">Confirm your details</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="fullName">
                  Full name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="fullName"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">
                  Email address <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="subject">
                  Subject <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="subject"
                  placeholder="What you want to report on"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description">
                  Description <span className="text-red-500">*</span>
                </Label>
                <Textarea
                  id="description"
                  rows={6}
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="file">
                  Attach file <span className="text-gray-400">(optional)</span>
                </Label>
                <Input
                  id="file"
                  type="file"
                  onChange={(e) => setFormData({ ...formData, file: e.target.files[0] })}
                  className="cursor-pointer"
                />
              </div>

              <Button type="submit" className="w-full bg-teal-800 hover:bg-teal-700">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

