"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaRegBell } from "react-icons/fa";
import { Profile } from "@/app/img";
export default function Header() {
  const pathname = usePathname();

  let headerText = "";
  switch (pathname) {
    case "/dashboard":
      headerText = "Overview Summary";
      break;
    case "/dashboard/examination":
      headerText = "Examination";
      break;
    case "/expired":
      headerText = "Expiring/Expired";
      break;
    case "/dashboard/examination/examinstruct":
      headerText = "Exam Instructions";
      break;
    case "/dashboard/examination/examoption":
      headerText = "Exam Options";
      break;
    case "/dashboard/subscription":
      headerText = "Subscription";
      break;
    case "/privateemail":
      headerText = "Private Email";
      break;
    case "/dashboard/ai/aiclass":
      headerText = "AI Class";
      break;
    case "/dashboard/settings":
      headerText = "Settings";
      break;
    case "/dashboard/support":
      headerText = "Support";
      break;
    default:
      headerText = "Overview Summary"; 
  }

  return (
    <div className="flex justify-between w-full bg-white shadow-sm border-b p-4 items-center">
      <div>
        <h1 className="font-bold text-lg pl-10 sm:pl-0 sm:text-xl">{headerText}</h1>
      </div>
      <div className="flex items-center gap-4">
        <Image src={Profile} className="w-10 h-10" alt="Profile" />
        <FaRegBell className="text-blue-500 text-2xl" />
      </div>
    </div>
  );
}

