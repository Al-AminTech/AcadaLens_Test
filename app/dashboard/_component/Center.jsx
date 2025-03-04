// import React from "react";
// import { IoMdSearch } from "react-icons/io";
// import { MdNotificationAdd } from "react-icons/md";
// import { BiUpArrowAlt } from "react-icons/bi";
// import { BiDownArrowAlt } from "react-icons/bi";
// import Exam from "./ExamFeedback";
// import Summary from "./Summary";
// import UserProfiles from "./UserProfiles";
// import { FaBell, FaRegBell } from "react-icons/fa";
// import Image from "next/image";
// import { Profile } from "@/app/img";

// function Center() {
//   return (
//     <div className="flex   flex-col gap-7">
//       <div className="flex  justify-between bg-white shadow-sm border-b p-4 items-center">
//         <div>
//           <h1 className="font-bold text-2xl">Overview Summary</h1>
//         </div>
//         <div className="flex  items-center gap-4">
//         <Image src={Profile} className="w-10 h-10"/>
//         <FaRegBell className="text-blue-500 text-2xl" />
//         </div>
//       </div>
//       <div>
//         <div className="">
//           <div>
//             <h1 className="font-bold pl-4 text-2xl  ">Your Exam Summary</h1>
//           </div>
//           <div className=" mt-10 ml-4  flex gap-10">
//             <div>
//               {" "}
//               <Exam
//                 number={"35/100"}
//                 name="Total exam done"
//                 percent={"13"}
//                 className="text-green-500"
//                 icon={<BiUpArrowAlt />}
//               />
//             </div>
//             <div>
//               {" "}
//               <Exam
//                 number={"35/100"}
//                 name="Total exam passed"
//                 percent={"13"}
//                 className="text-green-500"
//                 icon={<BiUpArrowAlt />}
//               />
//             </div>
//             <div>
//               {" "}
//               <Exam
//                 number={"35/100"}
//                 name="Total exam failed"
//                 percent={"13"}
//                 className="text-red-500"
//                 icon={<BiDownArrowAlt />}
//               />
//             </div>
//             <div>
//               {" "}
//               <Exam
//                 number={"35/100"}
//                 name="Total AI Correction"
//                 percent={"13"}
//                 className="text-green-500"
//                 icon={<BiUpArrowAlt />}
//               />
//             </div>
//           </div>
//         </div>
//         <div>
//           <UserProfiles />
//         </div>
//         <div className="mt-52">
//           <div>
//             <h1 className="font-bold pl-4 text-2xl">Your AI Class Summary</h1>
//           </div>
//           <div className="p-3">
//             <div className="flex gap-6">
//               <Summary name="UoE" subject="Use of English" topic="Oral Sound" />
//               <Summary name="UE" subject={"Mathematics"} topic={"Accounting"} />
//               <Summary name="UE" subject={"Mathematics"} topic={"Accounting"} />
//               <Summary name="UE" subject={"Mathematics"} topic={"Accounting"} />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Center;


import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdNotificationAdd } from "react-icons/md";
import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import Exam from "./ExamFeedback";
import Summary from "./Summary";
import UserProfiles from "./UserProfiles";
import { FaBell, FaRegBell } from "react-icons/fa";
import Image from "next/image";
import { Profile } from "@/app/img";
import Header from "./Header";


function Center() {
  return (
    <div className="flex flex-col gap-2 min-h-screen">
      <div className="flex flex-col gap-8">
        {/* Exam Summary Section */}
        <div className="mt-4">
          <h1 className="font-bold pl-5 text-2xl sm:text-xl">Your Exam Summary</h1>
          <div className="mt-10 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="w-full">
                <Exam
                  number={"35/100"}
                  name="Total exam done"
                  percent={"13"}
                  className="text-green-500"
                  icon={<BiUpArrowAlt />}
                />
              </div>
              <div className="w-full">
                <Exam
                  number={"35/100"}
                  name="Total exam passed"
                  percent={"13"}
                  className="text-green-500"
                  icon={<BiUpArrowAlt />}
                />
              </div>
              <div className="w-full">
                <Exam
                  number={"35/100"}
                  name="Total exam failed"
                  percent={"13"}
                  className="text-red-500"
                  icon={<BiDownArrowAlt />}
                />
              </div>
              <div className="w-full">
                <Exam
                  number={"35/100"}
                  name="Total AI Correction"
                  percent={"13"}
                  className="text-green-500"
                  icon={<BiUpArrowAlt />}
                />
              </div>
            </div>
          </div>
        </div>

        <div>
          <UserProfiles />
        </div>

        {/* AI Class Summary Section */}
        <div className="mt-20">
          <h1 className="font-bold pl-4 text-2xl sm:text-xl">Your AI Class Summary</h1>
          <div className="mt-10 px-4 max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="w-full">
            <Summary name="UoE" subject="Use of English" topic="Oral Sound" />
            </div>
             
              <div className="w-full">
              <Summary name="UE" subject="Mathematics" topic="Accounting" />
              </div>
              <div className="w-full">
              <Summary name="UE" subject="Mathematics" topic="Accounting" />
              </div>
              <div className="w-full">
              <Summary name="UE" subject="Mathematics" topic="Accounting" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
// function Center() {
//   return (
//     <div className="flex flex-col gap-2 min-h-screen">

//       <div className="flex flex-col gap-8">
//         {/* Exam Summary Section */}
//         <div className="mt-4">
//           <h1 className="font-bold pl-5 text-2xl sm:text-xl">Your Exam Summary</h1>
//           <div className="mt-10  justify-center  flex flex-wrap gap-4 sm:gap-6">
//             <div>
//               <Exam
//                 number={"35/100"}
//                 name="Total exam done"
//                 percent={"13"}
//                 className="text-green-500"
//                 icon={<BiUpArrowAlt />}
//               />
//             </div>
//             <div>
//               <Exam
//                 number={"35/100"}
//                 name="Total exam passed"
//                 percent={"13"}
//                 className="text-green-500"
//                 icon={<BiUpArrowAlt />}
//               />
//             </div>
//             <div>
//               <Exam
//                 number={"35/100"}
//                 name="Total exam failed"
//                 percent={"13"}
//                 className="text-red-500"
//                 icon={<BiDownArrowAlt />}
//               />
//             </div>
//             <div>
//               <Exam
//                 number={"35/100"}
//                 name="Total AI Correction"
//                 percent={"13"}
//                 className="text-green-500"
//                 icon={<BiUpArrowAlt />}
//               />
//             </div>
//           </div>
//         </div>

//         <div>
//           <UserProfiles />
//         </div>

//         {/* AI Class Summary Section */}
//         <div className="mt-20">
//           <h1 className="font-bold pl-4 text-2xl sm:text-xl">Your AI Class Summary</h1>
//           <div className="p-3">
//             <div className="flex flex-wrap gap-4 sm:gap-4">
//               <Summary name="UoE" subject="Use of English" topic="Oral Sound" />
//               <Summary name="UE" subject="Mathematics" topic="Accounting" />
//               <Summary name="UE" subject="Mathematics" topic="Accounting" />
//               <Summary name="UE" subject="Mathematics" topic="Accounting" />
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

export default Center;
