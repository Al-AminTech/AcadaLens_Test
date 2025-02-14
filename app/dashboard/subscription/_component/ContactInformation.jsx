'use client'

import { ArrowLeft } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from 'next/link'

export default function ContactForm() {
  return (
    <div className="p-4 sm:p-6">
    <div className="flex items-center gap-2 mb-6">
      <h1 className="text-lg sm:text-xl font-semibold">Contact Information</h1>
    </div>
  
    <form className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <label htmlFor="firstName" className="block text-sm">
            First Name
          </label>
          <Input
            id="firstName"
            defaultValue="Ahmed"
            className=" w-72 md:w-full px-4 py-2 rounded-md border"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="lastName" className="block text-sm">
            Last Name
          </label>
          <Input
            id="lastName"
            defaultValue="Sanni"
            className="w-72 md:w-full px-4 py-2 rounded-md border"
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
          className="w-72 md:w-full px-4 py-2 rounded-md border"
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
          className="w-72 md:w-full px-4 h-10 rounded-full border"
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
          className="w-72 md:w-full px-4 py-2 rounded-full border"
        />
      </div>
  
      <div className="flex flex-wrap gap-4 pt-4">
        <Button variant="outline" className="px-6 py-2 rounded-full border-2">
          Cancel
        </Button>
        <Button className="px-6 py-2 rounded-full bg-[#0891B2] text-white hover:bg-[#0891B2]/90">
          Edit
        </Button>
        <Link href={"/dashboard/subscription/subscribe"}>
          <Button variant="outline" className="px-6 py-2 rounded-full border-2">
            Next
          </Button>
        </Link>
      </div>
    </form>
  </div>
  
  )
}

