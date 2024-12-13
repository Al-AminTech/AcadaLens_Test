'use client'

import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function ContactForm() {
  return (
    <div className=" p-6">
      <div className="flex items-center gap-2 mb-8">
        {/* <ArrowLeft className="w-5 h-5" /> */}
        <h1 className="text-xl font-semibold">Contact Information</h1>
      </div>

      <form className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="firstName" className="block text-sm">
              First Name
            </label>
            <Input
              id="firstName"
              defaultValue="Ahmed"
              className="w-full px-4 py-2 rounded-full border"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lastName" className="block text-sm">
              Last Name
            </label>
            <Input
              id="lastName"
              defaultValue="Sanni"
              className="w-full px-4 py-2 rounded-full border"
            />
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="address" className="block text-sm">
            Residential address
          </label>
          <Input
            id="address"
            defaultValue="5b Odeyemi Street, Off University of Ilorin Permanent site road, Tanke, Ilorin."
            className="w-full px-4 py-2 rounded-full border"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="email" className="block text-sm">
            Email address
          </label>
          <Input
            id="email"
            type="email"
            defaultValue="sanniahmedagboola@gmail.com"
            className="w-[30rem] px-4 h-20 rounded-full border"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="phone" className="block text-sm">
            Phone number <span className="text-red-500">*</span>
          </label>
          <Input
            id="phone"
            type="tel"
            defaultValue="+2348024039792"
            className="w-full px-4 py-2 rounded-full border"
          />
        </div>

        <div className="flex justify-between items-center pt-4">
          <Button
            variant="outline"
            className="px-8 py-2 rounded-full border-2"
          >
            Cancel
          </Button>
          <Button
            className="px-8 py-2 rounded-full bg-[#0891B2] text-white hover:bg-[#0891B2]/90"
          >
            Edit
          </Button>
          <Button
            variant="outline"
            className="px-8 py-2 rounded-full border-2"
          >
            Next
          </Button>
        </div>
      </form>
    </div>
  )
}

