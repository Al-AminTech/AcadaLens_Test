'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { User, Phone, Mail, MessageCircle, BookOpen } from 'lucide-react'
import { useState } from "react"

export default function SupportPage() {
  const [showSupportModal, setShowSupportModal] = useState(false)
  const [showFaqModal, setShowFaqModal] = useState(false)

  return (
    <div className="container mx-auto py-12 grid gap-8 max-w-7xl">
      <div className="grid md:grid-cols-2 m-4 gap-8">
  
        <div className="bg-[#F2FDFF] rounded-lg p-8 flex flex-col items-center text-center">
          <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <User className="h-6 w-6 text-blue-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">Request support</h2>
          <p className="text-gray-600 mb-6">
            Having any issue on our platform? Reach out to our support team for assistance on the issue
          </p>
          <button
            onClick={() => setShowSupportModal(true)}
            className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition-colors"
          >
            Contact support
          </button>
        </div>

        {/* FAQs and Articles Section */}
        <div className="bg-[#F2FDFF] rounded-lg p-8 flex flex-col items-center text-center">
          <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
            <User className="h-6 w-6 text-blue-500" />
          </div>
          <h2 className="text-2xl font-semibold mb-4">FAQs and Articles</h2>
          <p className="text-gray-600 mb-6">
            Get answers quickly through some of the important popular questions you can have about AcadaLens
          </p>
          <button
            onClick={() => setShowFaqModal(true)}
            className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition-colors"
          >
            Contact support
          </button>
        </div>
      </div>

      {/* Report Error Section */}
      <div className="max-w-md mx-auto bg-[#F2FDFF] rounded-lg p-8 flex flex-col items-center text-center">
        <div className="h-12 w-12 bg-blue-50 rounded-full flex items-center justify-center mb-4">
          <User className="h-6 w-6 text-blue-500" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Report error</h2>
        <p className="text-gray-600 mb-6">
          If you encounter any wrong solution and answer on the platform, submit the question for review to better the platform at a token if you are right
        </p>
        <button className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition-colors">
          Contact support
        </button>
      </div>
      <Dialog open={showSupportModal} onOpenChange={setShowSupportModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Request support</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <Phone className="h-6 w-6 text-teal-700" />
              <div className="text-left">
                <h3 className="font-semibold">Call back request</h3>
                <p className="text-sm text-gray-600">Schedule a call with our support team</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <Mail className="h-6 w-6 text-teal-700" />
              <div className="text-left">
                <h3 className="font-semibold">Send an email</h3>
                <p className="text-sm text-gray-600">You get response within the hours</p>
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>

      {/* FAQs Modal */}
      <Dialog open={showFaqModal} onOpenChange={setShowFaqModal}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>FAQs and articles</DialogTitle>
          </DialogHeader>
          <div className="space-y-6 py-4">
            <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <MessageCircle className="h-6 w-6 text-teal-700" />
              <div className="text-left">
                <h3 className="font-semibold">Check FAQs</h3>
                <p className="text-sm text-gray-600">Get answers fast on your question</p>
              </div>
            </button>
            <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <BookOpen className="h-6 w-6 text-teal-700" />
              <div className="text-left">
                <h3 className="font-semibold">Read articles</h3>
                <p className="text-sm text-gray-600">Get enlightened on some topics</p>
              </div>
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  )
}

