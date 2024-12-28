'use client'
import { useState } from 'react'
import { Calendar1, ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Avatar } from "@/components/ui/avatar"
import { IoTimeOutline } from "react-icons/io5";
import { CiCalendar } from "react-icons/ci";
import { IoPersonOutline } from "react-icons/io5";

export default function Calendar() {
  const [selectedDate, setSelectedDate] = useState(null)
  const [selectedTime, setSelectedTime] = useState(null)
  const [currentMonth, setCurrentMonth] = useState(new Date())
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear())
  const [showMonths, setShowMonths] = useState(false)

  const availableDates = [14, 15, 16, 18, 20, 21, 25, 26, 27, 28, 29, 30]

  const getDaysInMonth = (date) => {
    const year = date.getFullYear()
    const month = date.getMonth()
    const days = new Date(year, month + 1, 0).getDate()
    const firstDay = new Date(year, month, 1).getDay()
    return { days, firstDay }
  }

  const { days, firstDay } = getDaysInMonth(currentMonth)

  const handleTimeClick = (time) => {
    setSelectedTime(time);
    if (selectedDate) {
      // Format the date and pass it in URL parameters
      const formattedDate = `${currentMonth.toLocaleString('default', { month: 'short' })} ${selectedDate}, ${currentYear}`;
      window.location.href = `/dashboard/support/step2?date=${encodeURIComponent(formattedDate)}&time=${encodeURIComponent(time)}`;
    }
  };
  

  return (
    <div className="min-h-screen shadow-sm w-full bg-white">
      {/* Header */}
      <div className="border-b">
        <div className="px-4 py-2">
          <Button variant="ghost" className="text-teal-800 gap-2" onClick={() => history.back()}>
            <ChevronLeft className="h-4 w-4" />
            Back
          </Button>
        </div>
      </div>

      <div className="flex">
        {/* Sidebar */}
        <div className="w-96 border-r p-6">
          <div className="mb-8">
            <img src="/acada-lens-logo.png" alt="Acada Lens" className="h-8" />
          </div>

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
                Step 1
              </div>
              <div className="text-lg font-medium">Enter your data correctly</div>
            </div>

            <div className="space-y-4 border-l-2 border-dotted pl-6 py-4 relative">
              <div className="absolute left-0 top-0 bottom-0 w-0.5 bg-gray-300" style={{ left: '0.2rem' }}></div>
              <div className="flex gap-2 items-center">
                <div className="rounded-full border p-2 bg-white z-10">
               <CiCalendar/>
                </div>
                <div>{selectedDate ? `${currentMonth.toLocaleString('default', { month: 'short' })} ${selectedDate}, ${currentYear}` : '18 Set, 2023'}</div>
              </div>

              <div className="flex gap-2 items-center">
                <div className="rounded-full border p-2 bg-white z-10">
                <IoTimeOutline />
                </div>
                <div>{selectedTime || '5:30 PM- 5:55 PM'}</div>
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
          <div className="max-w-4xl mx-auto">
            <h1 className="text-2xl font-semibold mb-8">Select day and time</h1>

            <div className="flex gap-12">
              {/* Calendar */}
              <div className="flex-1">
                <div className="flex items-center justify-between mb-6">
                  <Button variant="ghost" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)))}>
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div 
                    className="text-lg cursor-pointer" 
                    onClick={() => setShowMonths(!showMonths)}
                  >
                    {currentMonth.toLocaleString('default', { month: 'long' })} {currentYear}
                  </div>
                  <Button variant="ghost" onClick={() => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)))}>
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
                {showMonths && (
                  <div className="absolute top-full left-0 bg-white border shadow-lg grid grid-cols-3 gap-2 p-2">
                    {[...Array(12)].map((_, index) => (
                      <button
                        key={index}
                        className="p-2 hover:bg-gray-100"
                        onClick={() => {
                          setCurrentMonth(new Date(currentYear, index))
                          setShowMonths(false)
                        }}
                      >
                        {new Date(0, index).toLocaleString('default', { month: 'short' })}
                      </button>
                    ))}
                  </div>
                )}
                <div className="grid grid-cols-7 gap-4">
                  {['Sun', 'Mon', 'Tue', 'Wed', 'Thur', 'Fri', 'Sat'].map(day => (
                    <div key={day} className="text-center text-sm">{day}</div>
                  ))}

                  {[...Array(firstDay)].map((_, index) => (
                    <div key={`empty-${index}`} />
                  ))}

                  {[...Array(days)].map((_, index) => {
                    const day = index + 1
                    const isAvailable = availableDates.includes(day)
                    const isSelected = selectedDate === day

                    return (
                      <button
                        key={day}
                        className={`
                          rounded-full w-8 h-8 flex items-center justify-center
                          ${isAvailable ? 'hover:bg-teal-100' : 'text-gray-400'}
                          ${isSelected ? 'bg-teal-800 text-white' : ''}
                          ${isAvailable && !isSelected ? 'bg-teal-50' : ''}
                        `}
                        disabled={!isAvailable}
                        onClick={() => setSelectedDate(day)}
                      >
                        {day}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Time Slots */}
              <div className="w-48">
                <div className="text-sm text-gray-500 mb-2">
                  {selectedDate
                    ? `${currentMonth.toLocaleString('default', { month: 'long' })} ${selectedDate}, ${currentYear}`
                    : 'Select a date'}
                </div>
                {['5:30 PM', '6:30 PM', '7:30 PM', '8:30 PM', '9:30 PM'].map(time => (
                  <button
                    key={time}
                    className={`
                      w-full p-4 mb-2 rounded-lg border text-center
                      ${selectedTime === time ? 'bg-teal-800 text-white' : 'hover:bg-gray-50'}
                    `}
                    onClick={() => handleTimeClick(time)}
                  >
                    {time}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

