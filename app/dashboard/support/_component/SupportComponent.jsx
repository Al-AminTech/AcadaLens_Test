"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { User, Phone, Mail, MessageCircle, BookOpen } from "lucide-react";
import { MdSupportAgent } from "react-icons/md";
import { IoBook } from "react-icons/io5";
import { useState } from "react";
import { MdOutlineErrorOutline } from "react-icons/md";
import { FaPhoneAlt, FaRegBell } from "react-icons/fa";
import Calendar from "./Step1";
import ConfirmDetails from "./Step2";
import Link from "next/link";
import Image from "next/image";
import { Profile } from "@/app/img";
import Header from "../../_component/Header";
export default function SupportPage() {
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showFaqModal, setShowFaqModal] = useState(false);

  return (
    <div className="bg-white w-full md:max-w-[60rem] min-h-screen m-0 md:m-4 rounded-md shadow-lg">
  <div className="container mx-auto py-5 px-4 grid gap-8 max-w-7xl">
    <div className="grid md:grid-cols-2 gap-5">
      <div className="bg-[#FAFEFF] w-full max-w-sm h-72 rounded-lg p-8 flex flex-col items-center text-center">
        <div className="h-12 w-12 bg-[#D9F8FF] rounded-full flex items-center justify-center mb-4">
          <MdSupportAgent className="h-6 w-6 text-blue-500" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">Request support</h2>
        <p className="text-gray-600 mb-6">
          Having any issue on our platform? Reach out to our support team for assistance.
        </p>
        <button
          onClick={() => setShowSupportModal(true)}
          className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition-colors"
        >
          Contact support
        </button>
      </div>

      <div className="bg-[#FAFEFF] w-full max-w-sm h-72 rounded-lg p-8 flex flex-col items-center text-center">
        <div className="h-12 w-12 bg-[#D9F8FF] rounded-full flex items-center justify-center mb-4">
          <IoBook className="h-6 w-6 text-blue-500" />
        </div>
        <h2 className="text-2xl font-semibold mb-4">FAQs and Articles</h2>
        <p className="text-gray-600 mb-6">
          Get answers quickly through some of the most popular questions.
        </p>
        <button
          onClick={() => setShowFaqModal(true)}
          className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition-colors"
        >
          View FAQs
        </button>
      </div>
    </div>

    <div className="max-w-sm w-full mx-auto bg-[#FAFEFF] h-72 rounded-lg p-8 flex flex-col items-center text-center">
      <div className="h-12 w-12 bg-[#D9F8FF] rounded-full flex items-center justify-center mb-4">
        <MdOutlineErrorOutline className="h-6 w-6 text-blue-500" />
      </div>
      <h2 className="text-2xl font-semibold mb-4">Report error</h2>
      <p className="text-gray-600 mb-6">
        Found an incorrect answer? Submit it for review.
      </p>
      <button className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition-colors">
        Report issue
      </button>
    </div>

    <Dialog open={showSupportModal} onOpenChange={setShowSupportModal}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Request support</DialogTitle>
        </DialogHeader>
        <div className="space-y-6 py-4">
          <Link href={"/dashboard/support/step1"}>
            <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
              <div className="bg-[#F2FDFF] rounded-full text-center w-10 h-10 hover:bg-teal-700 hover:text-white transition-colors">
                <FaPhoneAlt className="h-8 w-8 text-center pl-2 pt-2 text-teal-700 hover:text-white" />
              </div>
              <div className="text-left">
                <h3 className="font-semibold">Call back request</h3>
                <p className="text-sm text-gray-600">Schedule a call with support.</p>
              </div>
            </button>
          </Link>
          <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <div className="bg-[#F2FDFF] rounded-full text-center w-10 h-10 hover:bg-teal-700 hover:text-white transition-colors">
              <Mail className="h-8 w-8 text-center pl-2 pt-2 text-teal-700 hover:text-white" />
            </div>
            <div className="text-left">
              <h3 className="font-semibold">Send an email</h3>
              <p className="text-sm text-gray-600">You’ll get a response within hours.</p>
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
              <p className="text-sm text-gray-600">Find quick answers to common questions.</p>
            </div>
          </button>
          <button className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors">
            <BookOpen className="h-6 w-6 text-teal-700" />
            <div className="text-left">
              <h3 className="font-semibold">Read articles</h3>
              <p className="text-sm text-gray-600">Explore more detailed explanations.</p>
            </div>
          </button>
        </div>
      </DialogContent>
    </Dialog>
  </div>
</div>

  );
}

// 'use client'

// import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
// import { useState } from "react"
// import { MdSupportAgent } from "react-icons/md"
// import { IoBook } from "react-icons/io5"
// import { MdOutlineErrorOutline } from "react-icons/md"
// import { FaPhoneAlt } from "react-icons/fa"
// import Calendar from "./Step1"
// import ConfirmDetails from "./Step2"

// export default function SupportPage() {
//   const [showSupportModal, setShowSupportModal] = useState(false)
//   const [currentStep, setCurrentStep] = useState(null) // Track the current step

//   const handleCallbackRequest = () => {
//     setCurrentStep('step1') // Show Step1 when "Call back request" is clicked
//     setShowSupportModal(false) // Close modal if open
//   }

//   const handleDateAndMonthClick = () => {
//     setCurrentStep('step2') // Move directly to Step2
//     setShowSupportModal(false) // Close modal if open
//   }

//   return (
//     <div className="container mx-auto py-12 grid gap-8 max-w-7xl">
//       <div className="grid md:grid-cols-2 m-4 gap-8">
//         <div className="bg-[#FAFEFF] rounded-lg p-8 flex flex-col items-center text-center">
//           <div className="h-12 w-12 bg-[#D9F8FF] rounded-full flex items-center justify-center mb-4">
//             <MdSupportAgent className="h-6 w-6 text-blue-500" />
//           </div>
//           <h2 className="text-2xl font-semibold mb-4">Request support</h2>
//           <p className="text-gray-600 mb-6">
//             Having any issue on our platform? Reach out to our support team for assistance on the issue
//           </p>
//           <button
//             onClick={() => setShowSupportModal(true)}
//             className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition-colors"
//           >
//             Contact support
//           </button>
//         </div>
//         <div className="bg-[#FAFEFF] rounded-lg p-8 flex flex-col items-center text-center">
//           <div className="h-12 w-12 bg-[#D9F8FF] rounded-full flex items-center justify-center mb-4">
//             <IoBook className="h-6 w-6 text-blue-500" />
//           </div>
//           <h2 className="text-2xl font-semibold mb-4">FAQs and Articles</h2>
//           <p className="text-gray-600 mb-6">
//             Get answers quickly through some of the important popular questions you can have about AcadaLens
//           </p>
//           <button
//             onClick={() => setShowSupportModal(true)}
//             className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition-colors"
//           >
//             Contact support
//           </button>
//         </div>
//       </div>
//       <div className="max-w-md mx-auto bg-[#FAFEFF] rounded-lg p-8 flex flex-col items-center text-center">
//         <div className="h-12 w-12 bg-[#D9F8FF] rounded-full flex items-center justify-center mb-4">
//           <MdOutlineErrorOutline className="h-6 w-6 text-blue-500" />
//         </div>
//         <h2 className="text-2xl font-semibold mb-4">Report error</h2>
//         <p className="text-gray-600 mb-6">
//           If you encounter any wrong solution and answer on the platform, submit the question for review to better the platform at a token if you are right
//         </p>
//         <button className="bg-teal-700 text-white px-6 py-2 rounded-full hover:bg-teal-800 transition-colors">
//           Contact support
//         </button>
//       </div>

//       <Dialog open={showSupportModal} onOpenChange={setShowSupportModal}>
//         <DialogContent className="sm:max-w-md">
//           <DialogHeader>
//             <DialogTitle>Request support</DialogTitle>
//           </DialogHeader>
//           <div className="space-y-6 py-4">
//             <button
//               onClick={handleCallbackRequest}
//               className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
//             >
//               <div className="bg-[#F2FDFF] rounded-full text-center w-10 h-10">
//                 <FaPhoneAlt className="h-8 w-8 text-center pl-2 pt-2 text-teal-700" />
//               </div>
//               <div className="text-left">
//                 <h3 className="font-semibold">Call back request</h3>
//                 <p className="text-sm text-gray-600">Schedule a call with our support team</p>
//               </div>
//             </button>
//             <button
//               onClick={handleDateAndMonthClick}
//               className="w-full flex items-center gap-4 p-4 hover:bg-gray-50 rounded-lg transition-colors"
//             >
//               <div className="bg-[#F2FDFF] rounded-full text-center w-10 h-10">
//                 <IoBook className="h-8 w-8 text-teal-700" />
//               </div>
//               <div className="text-left">
//                 <h3 className="font-semibold">Select Date & Month</h3>
//                 <p className="text-sm text-gray-600">Choose a date and move forward</p>
//               </div>
//             </button>
//           </div>
//         </DialogContent>
//       </Dialog>

//       {currentStep === 'step1' && <Calendar/>}
//       {currentStep === 'step2' && <ConfirmDetails />}
//     </div>
//   )
// }
