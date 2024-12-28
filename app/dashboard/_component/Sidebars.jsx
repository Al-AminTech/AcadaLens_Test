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
import { useState } from "react";
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
import { Ai, logo } from "@/app/img";
import { FaPeopleGroup } from "react-icons/fa6";
import SignOutModal from "./SignOutModal";
import { HomeIcon } from "lucide-react";
import { AiFillProfile } from "react-icons/ai";

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAiLearningDropdownOpen, setIsAiLearningDropdownOpen] =
    useState(false);
  const [isCommunityDropdownOpen, setIsCommunityDropdownOpen] = useState(false);
  const [isSignOutModalOpen, setIsSignOutModalOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

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
    <div
      className={`fixed top-0 left-0 flex flex-col h-screen bg-white shadow-sm text-gray-500 transition-all duration-300 ${
        isCollapsed ? "w-20" : "w-64"
      } flex-shrink-0`}
    >
      {/* Logo */}
      <div
        className={`flex items-center p-4 text-xl font-bold ${
          isCollapsed ? "justify-center" : "justify-center"
        }`}
      >
        {isCollapsed ? (
          "D"
        ) : (
          <Image src={logo} className="w-28 h-12" alt="Logo" />
        )}
      </div>

      {/* Menu Items */}
      <nav className="flex-grow mt-4">
        <ul>
          <li
            className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
              "/dashboard"
            )}`}
          >
            <Link href="/dashboard" className="flex items-center gap-4">
              <FiHome size={24} />
              {!isCollapsed && <span className="font-semibold">Dashboard</span>}
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
              onClick={toggleCommunityDropdown}
              className={`flex items-center gap-2 p-3 m-3 rounded-md ${isActive(
                "/ailearning"
              )}`}
            >
              <FaPeopleGroup size={24} />
              {!isCollapsed && <span className="font-semibold">Community</span>}
              {!isCollapsed && (
                <FiChevronDown
                  className={`ml-auto text-lg font-bold transform ${
                    isCommunityDropdownOpen ? "rotate-180" : ""
                  }`}
                />
              )}
            </button>
            {/* Community Dropdown items */}
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
                  <Link href="/dashboard/community/home" className="font-bold">
                    Home
                  </Link>
                </li>
                <li
                  className={`flex items-center gap-4 p-2 m-1 ${isActive(
                    "/dashboard/community/profile"
                  )}`}
                >
                  <b>
                    <IoPerson />
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

          {/* AI Learning Dropdown */}
          <li>
            {" "}
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
            {/* Dropdown items */}
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

          <li
            className={`flex items-center gap-4 p-3 m-3 rounded-md ${isActive(
              "/dashboard/subscription"
            )}`}
          >
            <Link
              href="/dashboard/subscription"
              className="flex items-center gap-4"
            >
              <MdSubscriptions size={24} />
              {!isCollapsed && (
                <span className="font-semibold">Subscription</span>
              )}
            </Link>
          </li>
        </ul>
      </nav>

      {/* Bottom Items */}
      <nav className="mt-8">
        <ul>
          <li
            className={`flex items-center gap-4 p-3 m-4 rounded-md ${isActive(
              "/support"
            )}`}
          >
            <Link href="/dashboard/support" className="flex items-center gap-4">
              <FiHelpCircle size={24} />
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
              {!isCollapsed && <span className="font-semibold">Settings</span>}
            </Link>
          </li>
          <li
            className={`flex items-center gap-4 p-3 m-3 rounded-md cursor-pointer`}
          >
            <div onClick={handleSignOut} className="flex items-center gap-4">
              <FiLogOut size={24} />
              {!isCollapsed && <span className="font-semibold">Sign Out</span>}
            </div>
          </li>
        </ul>

        {/* User Profile */}
        <div className="flex ">
          <div className="flex items-center gap-4 p-4">
            <img
              src="https://via.placeholder.com/40"
              alt="User Profile"
              className="w-10 h-10 rounded-full"
            />
            {!isCollapsed && (
              <div>
                <p className="text-sm">Bilal Opeyemi</p>
                <p className="text-xs text-gray-400">opemibilal@example.com</p>
              </div>
            )}
          </div>

          <div className="flex justify-center p-4">
            <button onClick={toggleSidebar} className="text-gray-500">
              {isCollapsed ? <FiMenu size={24} /> : <FiChevronLeft size={24} />}
            </button>
          </div>
        </div>
      </nav>

      <SignOutModal
        isOpen={isSignOutModalOpen}
        onClose={() => setIsSignOutModalOpen(false)}
        onConfirm={confirmSignOut}
      />
    </div>
  );
};

export default Sidebar;
