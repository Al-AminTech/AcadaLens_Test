// "use client";
// import { useState } from "react";
// import {
//   FiHome,
//   FiBook,
//   FiUsers,
//   FiSettings,
//   FiLogOut,
//   FiMenu,
//   FiChevronLeft,
//   FiPieChart,
//   FiHelpCircle,
//   FiChevronDown,
// } from "react-icons/fi";
// import { MdSubscriptions } from "react-icons/md";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { logo } from "@/app/img";
// import { FaPeopleGroup } from "react-icons/fa6";

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isAiLearningDropdownOpen, setIsAiLearningDropdownOpen] =
//     useState(false);
//   const pathname = usePathname();

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const toggleAiLearningDropdown = () => {
//     setIsAiLearningDropdownOpen(!isAiLearningDropdownOpen);
//   };

//   const isActive = (path) => (pathname === path ? "bg-[#E5FAFF]" : "");

//   return (
//     <div
//       className={`fixed top-0 left-0 flex flex-col h-screen bg-white shadow-sm text-gray-500 transition-all duration-300 ${
//         isCollapsed ? "w-20" : "w-64"
//       } flex-shrink-0`}
//     >
//       {/* Logo */}
//       <div
//         className={`flex items-center p-4 text-xl font-bold ${
//           isCollapsed ? "justify-center" : "justify-center"
//         }`}
//       >
//         {isCollapsed ? "D" : <Image src={logo} className="w-44 h-14" />}
//       </div>

//       {/* Menu Items */}
//       <nav className="flex-grow mt-4">
//         <ul>
//           <li
//             className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
//               "/dashboard"
//             )}`}
//           >
//             <Link href="/dashboard" className="flex items-center gap-4">
//               <FiHome size={24} />
//               {!isCollapsed && <span className="font-semibold">Dashboard</span>}
//             </Link>
//           </li>
//           <li
//             className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
//               "/dashboard/examination"
//             )}`}
//           >
//             <Link
//               href="/dashboard/examination"
//               className="flex items-center gap-4"
//             >
//               <FiBook size={24} />
//               {!isCollapsed && (
//                 <span className="font-semibold">Examination</span>
//               )}
//             </Link>
//           </li>
//           <li>
//             <button
//               onClick={toggleAiLearningDropdown}
//               className={`flex items-center gap-2 p-3 m-3 rounded-md ${isActive(
//                 "/dashboard/community"
//               )}`}
//             >
//               <FaPeopleGroup size={24} />
//               {!isCollapsed && (
//                 <span className="font-semibold">Community </span>
//               )}
//               {!isCollapsed && (
//                 <FiChevronDown
//                   className={`ml-auto text-lg font-bold transform ${
//                     isAiLearningDropdownOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               )}
//             </button>
//             {/* Dropdown items */}
//             {isAiLearningDropdownOpen && !isCollapsed && (
//               <ul className="pl-8 space-y-2">
//                 <li
//                   className={`flex items-center gap-4 p-2 m-1  ${isActive(
//                     "/dashboard/community/home"
//                   )}`}
//                 >
//                   <Link href="/dashboard/community/home">Home</Link>
//                 </li>
//                 <li
//                   className={`flex items-center gap-4 p-2 m-1 ${isActive(
//                     "/dashboard/community/profile"
//                   )}`}
//                 >
//                   <Link href="/dashboard/community/profile">Profile</Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           {/* AI Learning Dropdown */}
//           <li>
//             <button
//               onClick={toggleAiLearningDropdown}
//               className={`flex items-center gap-2 p-3 m-3 rounded-md ${isActive(
//                 "/ailearning"
//               )}`}
//             >
//               <FiPieChart size={24} />
//               {!isCollapsed && (
//                 <span className="font-semibold">AI Learning</span>
//               )}
//               {!isCollapsed && (
//                 <FiChevronDown
//                   className={`ml-auto text-lg font-bold transform ${
//                     isAiLearningDropdownOpen ? "rotate-180" : ""
//                   }`}
//                 />
//               )}
//             </button>
//             {/* Dropdown items */}
//             {isAiLearningDropdownOpen && !isCollapsed && (
//               <ul className="pl-8 space-y-2">
//                 <li
//                   className={`flex items-center gap-4 p-2 ${isActive(
//                     "/ailearning/course1"
//                   )}`}
//                 >
//                   <Link href="/ailearning/course1">AI Classroom</Link>
//                 </li>
//                 <li
//                   className={`flex items-center gap-4 p-2 ${isActive(
//                     "/ailearning/course2"
//                   )}`}
//                 >
//                   <Link href="/ailearning/course2">AI Corrections</Link>
//                 </li>
//               </ul>
//             )}
//           </li>

//           <li
//             className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
//               "/dashboard/subscription"
//             )}`}
//           >
//             <Link
//               href="/dashboard/subscription"
//               className="flex items-center gap-4"
//             >
//               <MdSubscriptions size={24} />
//               {!isCollapsed && (
//                 <span className="font-semibold">Subscription</span>
//               )}
//             </Link>
//           </li>
//         </ul>
//       </nav>

//       {/* Bottom Items */}
//       <nav className="mt-8">
//         <ul>
//           <li
//             className={`flex items-center gap-4 p-3 m-4 rounded-md ${isActive(
//               "/support"
//             )}`}
//           >
//             <Link href="/support" className="flex items-center gap-4">
//               <FiHelpCircle size={24} />
//               {!isCollapsed && <span className="font-semibold">Support</span>}
//             </Link>
//           </li>
//           <li
//             className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
//               "/dashboard/settings"
//             )}`}
//           >
//             <Link
//               href="/dashboard/settings"
//               className="flex items-center gap-4"
//             >
//               <FiSettings size={24} />
//               {!isCollapsed && <span className="font-semibold">Settings</span>}
//             </Link>
//           </li>
//           <li
//             className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
//               "/signout"
//             )}`}
//           >
//             <Link href="/signout" className="flex items-center gap-4">
//               <FiLogOut size={24} />
//               {!isCollapsed && <span className="font-semibold">Sign Out</span>}
//             </Link>
//           </li>
//         </ul>

//         {/* User Profile */}
//         <div className="flex items-center gap-4 p-4">
//           <img
//             src="https://via.placeholder.com/40"
//             alt="User Profile"
//             className="w-10 h-10 rounded-full"
//           />
//           {!isCollapsed && (
//             <div>
//               <p className="text-sm">Bilal Opeyemi</p>
//               <p className="text-xs text-gray-400">opemibilal@example.com</p>
//             </div>
//           )}
//         </div>

//         {/* Collapse Icon at the Bottom */}
//         <div className="flex justify-center p-4">
//           <button onClick={toggleSidebar} className="text-white">
//             {isCollapsed ? <FiMenu size={24} /> : <FiChevronLeft size={24} />}
//           </button>
//         </div>
//       </nav>
//     </div>
//   );
// };

// export default Sidebar;

"use client";
import { useEffect, useState } from "react";
import { IoPerson } from "react-icons/io5";
import {
  FiHome,
  FiBook,
  FiUsers,
  FiSettings,
  FiLogOut,
  FiMenu,
  FiChevronLeft,
  FiPieChart,
  FiHelpCircle,
  FiChevronDown,
} from "react-icons/fi";
import { MdSubscriptions } from "react-icons/md";
import { VscRobot } from "react-icons/vsc";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Image from "next/image";
import { Ai, logo, LogoCollapse } from "@/app/img";
import { FaPeopleGroup } from "react-icons/fa6";
import SignOutModal from "./SignOutModal";
import { HomeIcon } from "lucide-react";
import { AiFillProfile } from "react-icons/ai";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { FaBell } from "react-icons/fa";
import { GiCancel } from "react-icons/gi";
import { IoPersonOutline } from "react-icons/io5";
import { MdOutlineDashboard } from "react-icons/md";
import { BsHeadset } from "react-icons/bs";
import { FaRegCreditCard } from "react-icons/fa6";

// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isAiLearningDropdownOpen, setIsAiLearningDropdownOpen] =
//     useState(false);
//   const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] =
//     useState(false);
//   const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
//   const [isToggleClicked, setIsToggleClicked] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const toggleAiLearningDropdown = () => {
//     setIsAiLearningDropdownOpen(!isAiLearningDropdownOpen);
//     if (!isCollapsed) {
//       setIsCommunityDropdownOpen(false);
//     }
//   };

//   const toggleCommunityDropdown = () => {
//     setIsCommunityDropdownOpen(!isCommunityDropdownOpen);
//     if (!isCollapsed) {
//       setIsAiLearningDropdownOpen(false);
//     }
//   };

//   const handleSignOut = () => {
//     setIsSignOutModalOpen(true);
//   };

//   const confirmSignOut = () => {
//     setIsSignOutModalOpen(false);
//     router.push("/signout");
//   };

//   const isActive = (path) => (pathname === path ? "bg-[#E5FAFF]" : "");
//   const toggleMobileSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   const handleToggleClick = () => {
//     setIsToggleClicked(true);
//   };
//   return (
//     <>
//       <button
//         className="fixed top-4 left-4 z-50 text-gray-500 sm:hidden"
//         onClick={() => {
//           toggleMobileSidebar();
//           setIsToggleClicked(!isToggleClicked);
//         }}
//       >
//         {isToggleClicked ? <GiCancel size={24} /> : <FiMenu size={24} />}
//       </button>

//       <div
//         className={`fixed top-0 left-0  flex flex-col h-screen bg-white shadow-sm border-r text-gray-500 transition-transform duration-300 z-40 ${
//           isSidebarOpen ? "translate-x-0" : "-translate-x-full"
//         } sm:translate-x-0 ${isCollapsed ? "w-24" : "w-64"} flex-shrink-0`}
//       >
//         {/* <button
//           className="absolute top-4 right-4 sm:hidden"
//           onClick={toggleMobileSidebar}
//         >
//           <FiChevronLeft size={24} />
//         </button> */}

//         <div
//           className={`flex items-center p-4 text-xl font-bold ${
//             isCollapsed ? "justify-center" : "justify-center"
//           }`}
//         >
//           {isCollapsed ? (
//            <Image src={logo} className="w-810h-8" alt="Logo" />
//           ) : (
//             <Image src={logo} className="w-28 h-12" alt="Logo" />
//           )}
//         </div>

//         {/* Menu Items */}
//         <nav className="flex-grow mt-4">
//           <ul>
//             <li
//               className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
//                 "/dashboard"
//               )}`}
//             >
//               <Link href="/dashboard" className="flex items-center gap-4">
//                 <MdOutlineDashboard size={24} />
//                 {!isCollapsed && (
//                   <span className="font-semibold">Dashboard</span>
//                 )}
//               </Link>
//             </li>
//             <li
//               className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
//                 "/dashboard/examination"
//               )}`}
//             >
//               <Link
//                 href="/dashboard/examination"
//                 className="flex items-center gap-4"
//               >
//                 <FiBook size={24} />
//                 {!isCollapsed && (
//                   <span className="font-semibold">Examination</span>
//                 )}
//               </Link>
//             </li>
//             <li>
//               {" "}
//               <button
//                 onClick={toggleAiLearningDropdown}
//                 className={`flex items-center gap-2 p-3 m-3 rounded-md ${isActive(
//                   "/ailearning"
//                 )}`}
//               >
//                 <FiPieChart size={24} />
//                 {!isCollapsed && (
//                   <span className="font-semibold">AI Learning</span>
//                 )}
//                 {!isCollapsed && (
//                   <FiChevronDown
//                     className={`ml-auto text-lg font-bold transform ${
//                       isAiLearningDropdownOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 )}
//               </button>
//               {/* Dropdown items */}
//               {isAiLearningDropdownOpen && !isCollapsed && (
//                 <ul className="pl-8 space-y-2">
//                   <li
//                     className={`flex items-center gap-4 p-2 ${isActive(
//                       "/dashboard/ai/aiclass"
//                     )}`}
//                   >
//                     <b>
//                       <VscRobot />
//                     </b>
//                     <Link href="/dashboard/ai/aiclass" className="font-bold">
//                       AI Classroom
//                     </Link>
//                   </li>
//                   <li
//                     className={`flex items-center gap-4 p-2 ${isActive(
//                       "/ailearning/course2"
//                     )}`}
//                   >
//                     <Link href="/ailearning/course2">AI Corrections</Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <button
//                 onClick={toggleCommunityDropdown}
//                 className={`flex items-center gap-2 p-3 m-3 rounded-md ${isActive(
//                   "/ailearning"
//                 )}`}
//               >
//                 <FaPeopleGroup size={24} />
//                 {!isCollapsed && (
//                   <span className="font-semibold">Community</span>
//                 )}
//                 {!isCollapsed && (
//                   <FiChevronDown
//                     className={`ml-auto text-lg font-bold transform ${
//                       isCommunityDropdownOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 )}
//               </button>
//               {/* Community Dropdown items */}
//               {isCommunityDropdownOpen && !isCollapsed && (
//                 <ul className="pl-8 space-y-2">
//                   <li
//                     className={`flex items-center gap-4 p-2 m-1 ${isActive(
//                       "/dashboard/community/home"
//                     )}`}
//                   >
//                     <b>
//                       <HomeIcon />
//                     </b>
//                     <Link
//                       href="/dashboard/community/home"
//                       className="font-bold"
//                     >
//                       Home
//                     </Link>
//                   </li>
//                   <li
//                     className={`flex items-center gap-4 p-2 m-1 ${isActive(
//                       "/dashboard/community/profile"
//                     )}`}
//                   >
//                     <b>
//                       <IoPersonOutline className="text-lg" />
//                     </b>
//                     <Link
//                       href="/dashboard/community/profile"
//                       className="font-bold"
//                     >
//                       Profile
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>

//             <li
//               className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
//                 "/dashboard/subscription"
//               )}`}
//             >
//               <Link
//                 href="/dashboard/subscription"
//                 className="flex items-center gap-4"
//               >
//                 <FaRegCreditCard  size={24} />
//                 {!isCollapsed && (
//                   <span className="font-semibold">Subscription</span>
//                 )}
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         {/* Bottom Items */}
//         <nav className="mt-8">
//           <ul>
//             <li
//               className={`flex items-center gap-4 p-3 m-4 rounded-md ${isActive(
//                 "/support"
//               )}`}
//             >
//               <Link
//                 href="/dashboard/support"
//                 className="flex items-center gap-4"
//               >
//                 <BsHeadset size={24} />
//                 {!isCollapsed && <span className="font-semibold">Support</span>}
//               </Link>
//             </li>
//             <li
//               className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
//                 "/dashboard/settings"
//               )}`}
//             >
//               <Link
//                 href="/dashboard/settings"
//                 className="flex items-center gap-4"
//               >
//                 <FiSettings size={24} />
//                 {!isCollapsed && (
//                   <span className="font-semibold">Settings</span>
//                 )}
//               </Link>
//             </li>
//             <li
//               className={`flex items-center gap-4 p-3 m-3 rounded-md cursor-pointer`}
//             >
//               <div onClick={handleSignOut} className="flex items-center gap-4">
//                 <FiLogOut size={24} />
//                 {!isCollapsed && (
//                   <span className="font-semibold">Sign Out</span>
//                 )}
//               </div>
//             </li>
//           </ul>

//           <div
//             className={`flex  ${
//               isCollapsed ? "flex-col items-center" : "flex-row "
//             } `}
//           >
//             <div className="flex items-center gap-2 p-2">
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="User Profile"
//                 className="w-10 h-10 rounded-full"
//               />
//               {!isCollapsed && (
//                 <div>
//                   <p className="text-sm">Bilal Opeyemi</p>
//                   <p className="text-xs text-gray-400">
//                     opemibilal@example.com
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div
//               className={`flex ${
//                 isCollapsed ? "justify-normal" : "justify-center"
//               }  p-3`}
//             >
//               <button onClick={toggleSidebar} className="text-gray-500">
//                 {isCollapsed ? (
//                   <FiMenu size={24} />
//                 ) : (
//                   <MdKeyboardDoubleArrowLeft size={24} />
//                 )}
//               </button>
//             </div>
//           </div>
//         </nav>

//         <SignOutModal
//           isOpen={isSignOutModalOpen}
//           onClose={() => setIsSignOutModalOpen(false)}
//           onConfirm={confirmSignOut}
//         />
//       </div>
//     </>
//   );
// };


// const Sidebar = () => {
//   const [isCollapsed, setIsCollapsed] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(false);
//   const [isAiLearningDropdownOpen, setIsAiLearningDropdownOpen] = useState(false);
//   const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState(false);
//   const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
//   const [isToggleClicked, setIsToggleClicked] = useState(false);
//   const pathname = usePathname();
//   const router = useRouter();

//   const toggleSidebar = () => {
//     setIsCollapsed(!isCollapsed);
//   };

//   const toggleAiLearningDropdown = () => {
//     setIsAiLearningDropdownOpen(!isAiLearningDropdownOpen);
//     if (!isCollapsed) {
//       setIsCommunityDropdownOpen(false);
//     }
//   };

//   const toggleCommunityDropdown = () => {
//     setIsCommunityDropdownOpen(!isCommunityDropdownOpen);
//     if (!isCollapsed) {
//       setIsAiLearningDropdownOpen(false);
//     }
//   };

//   const handleSignOut = () => {
//     setIsSignOutModalOpen(true);
//   };

//   const confirmSignOut = () => {
//     setIsSignOutModalOpen(false);
//     router.push("/signout");
//   };

//   const isActive = (path) => (pathname === path ? "bg-[#E5FAFF]" : "");
//   const toggleMobileSidebar = () => {
//     setIsSidebarOpen(!isSidebarOpen);
//   };
//   const handleToggleClick = () => {
//     setIsToggleClicked(true);
//   };

//   return (
//     <>
//       {/* <button
//         className="text-gray-500 sm:hidden"
//         onClick={() => {
//           toggleMobileSidebar();
//           setIsToggleClicked(!isToggleClicked);
//         }}
//       > */}
//         {/* {isToggleClicked ? <GiCancel size={24} /> : <FiMenu size={24} />} */}
//       {/* </button> */}

//       <div
//         className={`flex flex-col min-h-screen  bg-white shadow-sm border-r text-gray-500 transition-transform duration-300 z-40  sm:translate-x-0 sm:w-24 ${isCollapsed ? "w-24" : "w-72"} flex-shrink-0`}
//       >
//         <div
//           className={`flex items-center p-4 text-xl font-bold ${
//             isCollapsed ? "justify-center" : "justify-center"
//           }`}
//         >
//           {isCollapsed ? (
//             <Image src={LogoCollapse} className="w-8 h-10" alt="Logo" />
//           ) : (
//             <Image src={logo} className="w-28 h-16" alt="Logo" />
//           )}
//         </div>

//         <nav className="flex-grow mt-4">
//           <ul>
//             <li
//               className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
//                 "/dashboard"
//               )}`}
//             >
//               <Link href="/dashboard" className="flex items-center gap-4">
//                 <MdOutlineDashboard size={24} />
//                 {!isCollapsed && (
//                   <span className="font-semibold">Dashboard</span>
//                 )}
//               </Link>
//             </li>
//             <li
//               className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
//                 "/dashboard/examination"
//               )}`}
//             >
//               <Link
//                 href="/dashboard/examination"
//                 className="flex items-center gap-4"
//               >
//                 <FiBook size={24} />
//                 {!isCollapsed && (
//                   <span className="font-semibold">Examination</span>
//                 )}
//               </Link>
//             </li>
//             <li>
//               <button
//                 onClick={toggleAiLearningDropdown}
//                 className={`flex items-center gap-2 p-3 m-3 rounded-md ${isActive(
//                   "/ailearning"
//                 )}`}
//               >
//                 <FiPieChart size={24} />
//                 {!isCollapsed && (
//                   <span className="font-semibold">AI Learning</span>
//                 )}
//                 {!isCollapsed && (
//                   <FiChevronDown
//                     className={`ml-auto text-lg font-bold transform ${
//                       isAiLearningDropdownOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 )}
//               </button>
//               {isAiLearningDropdownOpen && !isCollapsed && (
//                 <ul className="pl-8 space-y-2">
//                   <li
//                     className={`flex items-center gap-4 p-2 ${isActive(
//                       "/dashboard/ai/aiclass"
//                     )}`}
//                   >
//                     <b>
//                       <VscRobot />
//                     </b>
//                     <Link href="/dashboard/ai/aiclass" className="font-bold">
//                       AI Classroom
//                     </Link>
//                   </li>
//                   <li
//                     className={`flex items-center gap-4 p-2 ${isActive(
//                       "/ailearning/course2"
//                     )}`}
//                   >
//                     <Link href="/ailearning/course2">AI Corrections</Link>
//                   </li>
//                 </ul>
//               )}
//             </li>
//             <li>
//               <button
//                 onClick={toggleCommunityDropdown}
//                 className={`flex items-center gap-2 p-3 m-3 rounded-md ${isActive(
//                   "/ailearning"
//                 )}`}
//               >
//                 <FaPeopleGroup size={24} />
//                 {!isCollapsed && (
//                   <span className="font-semibold">Community</span>
//                 )}
//                 {!isCollapsed && (
//                   <FiChevronDown
//                     className={`ml-auto text-lg font-bold transform ${
//                       isCommunityDropdownOpen ? "rotate-180" : ""
//                     }`}
//                   />
//                 )}
//               </button>
//               {isCommunityDropdownOpen && !isCollapsed && (
//                 <ul className="pl-8 space-y-2">
//                   <li
//                     className={`flex items-center gap-4 p-2 m-1 ${isActive(
//                       "/dashboard/community/home"
//                     )}`}
//                   >
//                     <b>
//                       <HomeIcon />
//                     </b>
//                     <Link
//                       href="/dashboard/community/home"
//                       className="font-bold"
//                     >
//                       Home
//                     </Link>
//                   </li>
//                   <li
//                     className={`flex items-center gap-4 p-2 m-1 ${isActive(
//                       "/dashboard/community/profile"
//                     )}`}
//                   >
//                     <b>
//                       <IoPersonOutline className="text-lg" />
//                     </b>
//                     <Link
//                       href="/dashboard/community/profile"
//                       className="font-bold"
//                     >
//                       Profile
//                     </Link>
//                   </li>
//                 </ul>
//               )}
//             </li>

//             <li
//               className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
//                 "/dashboard/subscription"
//               )}`}
//             >
//               <Link
//                 href="/dashboard/subscription"
//                 className="flex items-center gap-4"
//               >
//                 <FaRegCreditCard size={24} />
//                 {!isCollapsed && (
//                   <span className="font-semibold">Subscription</span>
//                 )}
//               </Link>
//             </li>
//           </ul>
//         </nav>

//         <nav className="mt-8">
//           <ul>
//             <li
//               className={`flex items-center gap-4 p-3 m-4 rounded-md ${isActive(
//                 "/support"
//               )}`}
//             >
//               <Link
//                 href="/dashboard/support"
//                 className="flex items-center gap-4"
//               >
//                 <BsHeadset size={24} />
//                 {!isCollapsed && <span className="font-semibold">Support</span>}
//               </Link>
//             </li>
//             <li
//               className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
//                 "/dashboard/settings"
//               )}`}
//             >
//               <Link
//                 href="/dashboard/settings"
//                 className="flex items-center gap-4"
//               >
//                 <FiSettings size={24} />
//                 {!isCollapsed && (
//                   <span className="font-semibold">Settings</span>
//                 )}
//               </Link>
//             </li>
//             <li
//               className={`flex items-center gap-4 p-3 m-3 rounded-md cursor-pointer`}
//             >
//               <div onClick={handleSignOut} className="flex items-center gap-4">
//                 <FiLogOut size={24} />
//                 {!isCollapsed && (
//                   <span className="font-semibold">Sign Out</span>
//                 )}
//               </div>
//             </li>
//           </ul>

//           <div
//             className={`flex  ${
//               isCollapsed ? "flex-col items-center" : "flex-row "
//             } `}
//           >
//             <div className="flex items-center gap-2 p-2">
//               <img
//                 src="https://via.placeholder.com/40"
//                 alt="User Profile"
//                 className="w-10 h-10 rounded-full"
//               />
//               {!isCollapsed && (
//                 <div>
//                   <p className="text-sm">Bilal Opeyemi</p>
//                   <p className="text-xs text-gray-400">
//                     opemibilal@example.com
//                   </p>
//                 </div>
//               )}
//             </div>

//             <div
//               className={`flex ${
//                 isCollapsed ? "justify-normal" : "justify-center"
//               }  p-3`}
//             >
//               <button onClick={toggleSidebar} className="text-gray-500">
//                 {isCollapsed ? (
//                   <FiMenu size={24} />
//                 ) : (
//                   <MdKeyboardDoubleArrowLeft size={24} />
//                 )}
//               </button>
//             </div>
//           </div>
//         </nav>

//         <SignOutModal
//           isOpen={isSignOutModalOpen}
//           onClose={() => setIsSignOutModalOpen(false)}
//           onConfirm={confirmSignOut}
//         />
//       </div>
//     </>
//   );
// };

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAiLearningDropdownOpen, setIsAiLearningDropdownOpen] = useState(false);
  const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState(false);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setIsCollapsed(true);
      } else {
        setIsCollapsed(false);
      }
    };


    handleResize();


    window.addEventListener('resize', handleResize);

    // Cleanup event listener on unmount
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleAiLearningDropdown = () => {
    setIsAiLearningDropdownOpen(!isAiLearningDropdownOpen);
    if (!isCollapsed) {
      setIsCommunityDropdownOpen(false);
    }
  };

  const toggleCommunityDropdown = () => {
    setIsCommunityDropdownOpen(!isCommunityDropdownOpen);
    if (!isCollapsed) {
      setIsAiLearningDropdownOpen(false);
    }
  };

  const handleSignOut = () => {
    setIsSignOutModalOpen(true);
  };

  const confirmSignOut = () => {
    setIsSignOutModalOpen(false);
    router.push("/signout");
  };

  const isActive = (path) => (pathname === path ? "bg-[#E5FAFF]" : "");

  return (
    <>
      <div
        className={`flex flex-col min-h-screen bg-white shadow-sm border-r text-gray-500 transition-all duration-300 z-40 ${
          isCollapsed ? "w-24" : "w-72"
        } flex-shrink-0`}
      >
        <div
          className={`flex items-center p-4 text-xl font-bold ${
            isCollapsed ? "justify-center" : "justify-center"
          }`}
        >
          {isCollapsed ? (
            <Image src={LogoCollapse} width={32} height={40} alt="Logo" />
          ) : (
            <Image src={logo} width={112} height={64} alt="Logo" />
          )}
        </div>

        {/* Navigation Links */}
        <nav className="flex-grow mt-4">
          <ul>
            <li
              className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
                "/dashboard"
              )}`}
            >
              <Link href="/dashboard" className="flex items-center gap-4">
                <MdOutlineDashboard size={24} />
                {!isCollapsed && (
                  <span className="font-semibold">Dashboard</span>
                )}
              </Link>
            </li>
            <li
              className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
                "/dashboard/examination"
              )}`}
            >
              <Link
                href="/dashboard/examination"
                className="flex items-center gap-4"
              >
                <FiBook size={24} />
                {!isCollapsed && (
                  <span className="font-semibold">Examination</span>
                )}
              </Link>
            </li>
            <li>
              <button
                onClick={toggleAiLearningDropdown}
                className={`flex items-center gap-2 p-3 m-3 rounded-md ${isActive(
                  "/ailearning"
                )}`}
              >
                <FiPieChart size={24} />
                {!isCollapsed && (
                  <span className="font-semibold">AI Learning</span>
                )}
                {!isCollapsed && (
                  <FiChevronDown
                    className={`ml-auto text-lg font-bold transform ${
                      isAiLearningDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {isAiLearningDropdownOpen && !isCollapsed && (
                <ul className="pl-8 space-y-2">
                  <li
                    className={`flex items-center gap-4 p-2 ${isActive(
                      "/dashboard/ai/aiclass"
                    )}`}
                  >
                    <b>
                      <VscRobot />
                    </b>
                    <Link href="/dashboard/ai/aiclass" className="font-bold">
                      AI Classroom
                    </Link>
                  </li>
                  <li
                    className={`flex items-center gap-4 p-2 ${isActive(
                      "/ailearning/course2"
                    )}`}
                  >
                    <Link href="/ailearning/course2">AI Corrections</Link>
                  </li>
                </ul>
              )}
            </li>
            <li>
              <button
                onClick={toggleCommunityDropdown}
                className={`flex items-center gap-2 p-3 m-3 rounded-md ${isActive(
                  "/ailearning"
                )}`}
              >
                <FaPeopleGroup size={24} />
                {!isCollapsed && (
                  <span className="font-semibold">Community</span>
                )}
                {!isCollapsed && (
                  <FiChevronDown
                    className={`ml-auto text-lg font-bold transform ${
                      isCommunityDropdownOpen ? "rotate-180" : ""
                    }`}
                  />
                )}
              </button>
              {isCommunityDropdownOpen && !isCollapsed && (
                <ul className="pl-8 space-y-2">
                  <li
                    className={`flex items-center gap-4 p-2 m-1 ${isActive(
                      "/dashboard/community/home"
                    )}`}
                  >
                    <b>
                      <HomeIcon />
                    </b>
                    <Link
                      href="/dashboard/community/home"
                      className="font-bold"
                    >
                      Home
                    </Link>
                  </li>
                  <li
                    className={`flex items-center gap-4 p-2 m-1 ${isActive(
                      "/dashboard/community/profile"
                    )}`}
                  >
                    <b>
                      <IoPersonOutline className="text-lg" />
                    </b>
                    <Link
                      href="/dashboard/community/profile"
                      className="font-bold"
                    >
                      Profile
                    </Link>
                  </li>
                </ul>
              )}
            </li>
            <li
              className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
                "/dashboard/subscription"
              )}`}
            >
              <Link
                href="/dashboard/subscription"
                className="flex items-center gap-4"
              >
                <FaRegCreditCard size={24} />
                {!isCollapsed && (
                  <span className="font-semibold">Subscription</span>
                )}
              </Link>
            </li>
          </ul>
        </nav>

        {/* Bottom Section (Support, Settings, Sign Out) */}
        <nav className="mt-8">
          <ul>
            <li
              className={`flex items-center gap-4 p-3 m-4 rounded-md ${isActive(
                "/support"
              )}`}
            >
              <Link
                href="/dashboard/support"
                className="flex items-center gap-4"
              >
                <BsHeadset size={24} />
                {!isCollapsed && <span className="font-semibold">Support</span>}
              </Link>
            </li>
            <li
              className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
                "/dashboard/settings"
              )}`}
            >
              <Link
                href="/dashboard/settings"
                className="flex items-center gap-4"
              >
                <FiSettings size={24} />
                {!isCollapsed && (
                  <span className="font-semibold">Settings</span>
                )}
              </Link>
            </li>
            <li
              className={`flex items-center gap-4 p-3 m-3 rounded-md cursor-pointer`}
            >
              <div onClick={handleSignOut} className="flex items-center gap-4">
                <FiLogOut size={24} />
                {!isCollapsed && (
                  <span className="font-semibold">Sign Out</span>
                )}
              </div>
            </li>
          </ul>

          {/* User Profile and Toggle Button */}
          <div
            className={`flex ${
              isCollapsed ? "flex-col items-center" : "flex-row"
            }`}
          >
            <div className="flex items-center gap-2 p-2">
              <img
                src="https://via.placeholder.com/40"
                alt="User Profile"
                className="w-10 h-10 rounded-full"
              />
              {!isCollapsed && (
                <div>
                  <p className="text-sm">Bilal Opeyemi</p>
                  <p className="text-xs text-gray-400">
                    opemibilal@example.com
                  </p>
                </div>
              )}
            </div>

            <div
              className={`flex ${
                isCollapsed ? "justify-normal" : "justify-center"
              } p-3`}
            >
              <button onClick={toggleSidebar} className="text-gray-500">
                {isCollapsed ? (
                  <FiMenu size={24} />
                ) : (
                  <MdKeyboardDoubleArrowLeft size={24} />
                )}
              </button>
            </div>
          </div>
        </nav>

        {/* Sign Out Modal */}
        <SignOutModal
          isOpen={isSignOutModalOpen}
          onClose={() => setIsSignOutModalOpen(false)}
          onConfirm={confirmSignOut}
        />
      </div>
    </>
  );
};
export default Sidebar;
