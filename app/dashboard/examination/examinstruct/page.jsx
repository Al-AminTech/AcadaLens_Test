// import { Button } from "@/components/ui/button";
// import Link from "next/link";

// export default function ExamInstructions() {
//   return (
//     <div className="max-w-2xl mx-auto p-6 space-y-8">
//       <div className="space-y-6">
//         <h1 className="text-3xl font-bold">
//           Hi Agboola, read instructions properly before starting your
//           examination
//         </h1>

//         <div className="space-y-4">
//           <h2 className="text-xl font-semibold">
//             Single Mode Examination Score
//           </h2>
//           <ul className="list-disc pl-6 space-y-2">
//             <li>Use of English 25 questions</li>
//             <li>Mathematics 25 questions</li>
//             <li>Economics 25 questions</li>
//             <li>Financial Accounting 25 questions</li>
//           </ul>
//         </div>

//         <p className="text-xl font-semibold">Exam takes 25 Mins Per Subject</p>
//       </div>

//       <div className="flex gap-4 pt-4">
//         <Link href={"/dashboard/examination/examoptions"} className="">
//           <Button variant="outline" className="flex-1 text-base h-12 w-52 border-[#006B7D]  text-[#006B7D]">
//             Cancel
//           </Button>
//         </Link>
//         <Button className=" text-base h-12 bg-[#006B7D] w-52 hover:bg-[#005A6B]">
//           Start exam
//         </Button>
//       </div>
//     </div>
//   );
// }
'use client'

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card"
import { Book, Calculator, DollarSign, GraduationCap, Clock, AlertCircle } from 'lucide-react'

export default function ExamInstructions() {
  const subjects = [
    { name: "Use of English", icon: Book },
    { name: "Mathematics", icon: Calculator },
    { name: "Economics", icon: DollarSign },
    { name: "Financial Accounting", icon: GraduationCap }
  ];

  return (
    <div className="w-full min-h-screen bg-white shadow-lg rounded-md">
      <div className="min-h-screen">
        <div className="">
          <div className="space-y-6 border-b p-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between">
              <div>
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900">
                  Welcome, Agboola
                </h1>
                <p className="text-gray-500 mt-2">
                  Please read the examination instructions carefully before proceeding.
                </p>
              </div>
              <div className="hidden md:flex items-center gap-2 bg-blue-50 text-blue-700 px-4 py-2 rounded-lg">
                <Clock className="w-5 h-5" />
                <span className="font-medium">25 mins per subject</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-6">
            <div className="space-y-6">
              {/* Exam Structure */}
              <div>
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Single Mode Examination Structure
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {subjects.map((subject, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-4 p-4 rounded-lg border bg-white hover:shadow-md transition-shadow"
                    >
                      <div className="p-2 rounded-lg bg-primary/10">
                        <subject.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="font-medium text-gray-900">{subject.name}</p>
                        <p className="text-sm text-gray-500">25 questions</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Important Notes */}
              <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
                <div className="text-sm text-amber-800">
                  <p className="font-medium mb-1">Important Notes:</p>
                  <ul className="list-disc pl-4 space-y-1">
                    <li>Each subject has a time limit of 25 minutes</li>
                    <li>You cannot return to previous questions once submitted</li>
                    <li>Ensure stable internet connection before starting</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t p-6">
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <Button
                variant="outline"
                className="flex-1 h-11 border border-[#005C73] text-[#005C73]"
              >
                Cancel
              </Button>
              <Button className="flex-1 h-11 bg-[#005C73] hover:bg-primary/90">
                Start Examination
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


