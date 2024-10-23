// // "use client";
// // import { Calendar, ChevronDown, Settings } from "lucide-react";
// // import Link from "next/link";
// // import { usePathname } from "next/navigation"; // Next.js pathname hook
// // import {
// //   Sidebar,
// //   SidebarContent,
// //   SidebarGroup,
// //   SidebarGroupContent,
// //   SidebarGroupLabel,
// //   SidebarMenu,
// //   SidebarMenuButton,
// //   SidebarMenuItem,
// // } from "@/components/ui/sidebar";
// // import {
// //   DropdownMenu,
// //   DropdownMenuTrigger,
// //   DropdownMenuContent,
// //   DropdownMenuItem,
// // } from "@/components/ui/dropdown-menu";
// // import { MdContactSupport, MdDashboard, MdPeople } from "react-icons/md";
// // import { GiPaperBagFolded } from "react-icons/gi";
// // import { FaSignOutAlt } from "react-icons/fa";
// // import Image from "next/image";
// // import { logo } from "@/app/img";

// // // Top items
// // const topItems = [
// //   {
// //     title: "Dashboard",
// //     url: "/dashboard",
// //     icon: MdDashboard,
// //   },
// //   {
// //     title: "Inbox",
// //     url: "/inbox",
// //     icon: GiPaperBagFolded,
// //   },
// //   {
// //     title: "Calendar",
// //     url: "/calendar",
// //     icon: Calendar,
// //     dropdown: [
// //       { label: "View Events", url: "/calendar/events" },
// //       { label: "Add Event", url: "/calendar/add" },
// //     ], // Dropdown menu items for Calendar
// //   },
// //   {
// //     title: "Community",
// //     url: "/community",
// //     icon: MdPeople,
// //   },
// // ];

// // // Bottom items
// // const bottomItems = [
// //   {
// //     title: "Support",
// //     url: "/support",
// //     icon: MdContactSupport,
// //   },
// //   {
// //     title: "Settings",
// //     url: "/settings",
// //     icon: Settings,
// //   },
// //   {
// //     title: "Sign Out",
// //     url: "/sign-out",
// //     icon: FaSignOutAlt,
// //   },
// // ];

// // export function AppSidebar() {
// //   const pathname = usePathname();

// //   return (
// //     <Sidebar className="flex flex-col h-full">
// //       <SidebarContent className="flex-grow">
// //         <SidebarGroup>
// //           <SidebarGroupLabel className="p-6 pb-7">
// //             <Image src={logo} alt="logo" />
// //           </SidebarGroupLabel>
// //           <SidebarGroupContent>
// //             <SidebarMenu>
// //               {topItems.map((item) => (
// //                 <SidebarMenuItem key={item.title}>
// //                   {item.dropdown ? (
// //                     <DropdownMenu>
// //                       <DropdownMenuTrigger asChild>
// //                         <SidebarMenuButton
// //                           asChild
// //                           className={pathname === item.url ? "bg-[#E5FAFF]" : ""}
// //                         >
// //                           <div className="flex items-center space-x-2">
// //                             {/* Adjust the icon size here */}
// //                             <item.icon className="w-5 h-5" />
// //                             <span className="font-bold text-md">{item.title}</span>
// //                             <ChevronDown className="w-4 h-4" />
// //                           </div>
// //                         </SidebarMenuButton>
// //                       </DropdownMenuTrigger>
// //                       <DropdownMenuContent>
// //                         {item.dropdown.map((subItem) => (
// //                           <DropdownMenuItem key={subItem.url} asChild>
// //                             <Link
// //                               href={subItem.url}
// //                               className={
// //                                 pathname === subItem.url
// //                                   ? "bg-[#E5FAFF]"
// //                                   : ""
// //                               }
// //                             >
// //                               {subItem.label}
// //                             </Link>
// //                           </DropdownMenuItem>
// //                         ))}
// //                       </DropdownMenuContent>
// //                     </DropdownMenu>
// //                   ) : (
// //                     <SidebarMenuButton
// //                       asChild
// //                       className={pathname === item.url ? "bg-[#E5FAFF]" : ""}
// //                     >
// //                       <Link href={item.url}>
// //                         <div className="flex items-center space-x-2">
// //                           {/* Adjust the icon size here */}
// //                           <item.icon className="w-5 h-5" />
// //                           <span className="font-bold text-md">{item.title}</span>
// //                         </div>
// //                       </Link>
// //                     </SidebarMenuButton>
// //                   )}
// //                 </SidebarMenuItem>
// //               ))}
// //             </SidebarMenu>
// //           </SidebarGroupContent>
// //         </SidebarGroup>
// //       </SidebarContent>

// //       {/* Bottom items section aligned to the bottom */}
// //       <SidebarGroup className="mt-auto">
// //         <SidebarGroupContent>
// //           <SidebarMenu>
// //             {bottomItems.map((item) => (
// //               <SidebarMenuItem key={item.title}>
// //                 <SidebarMenuButton
// //                   asChild
// //                   className={pathname === item.url ? "bg-[#E5FAFF]" : ""}
// //                 >
// //                   <Link href={item.url}>
// //                     <div className="flex items-center space-x-2">
// //                       {/* Adjust the icon size here */}
// //                       <item.icon className="w-5 h-5" />
// //                       <span className="font-bold text-md">{item.title}</span>
// //                     </div>
// //                   </Link>
// //                 </SidebarMenuButton>
// //               </SidebarMenuItem>
// //             ))}
// //           </SidebarMenu>
// //         </SidebarGroupContent>
// //       </SidebarGroup>
// //     </Sidebar>
// //   );
// // }
// "use client";
// import { Calendar, ChevronDown, Settings } from "lucide-react";
// import Link from "next/link";
// import { usePathname } from "next/navigation"; // Next.js pathname hook
// import {
//   Sidebar,
//   SidebarContent,
//   SidebarGroup,
//   SidebarGroupContent,
//   SidebarGroupLabel,
//   SidebarMenu,
//   SidebarMenuButton,
//   SidebarMenuItem,
// } from "@/components/ui/sidebar";
// import {
//   DropdownMenu,
//   DropdownMenuTrigger,
//   DropdownMenuContent,
//   DropdownMenuItem,
// } from "@/components/ui/dropdown-menu";
// import { MdContactSupport, MdDashboard, MdPeople } from "react-icons/md";
// import { GiPaperBagFolded } from "react-icons/gi";
// import { FaSignOutAlt } from "react-icons/fa";
// import Image from "next/image";
// import { logo } from "@/app/img";

// // Top items
// const topItems = [
//   {
//     title: "Dashboard",
//     url: "/dashboard",
//     icon: MdDashboard,
//   },
//   {
//     title: "Inbox",
//     url: "/inbox",
//     icon: GiPaperBagFolded,
//   },
//   {
//     title: "Calendar",
//     url: "/calendar",
//     icon: Calendar,
//     dropdown: [
//       { label: "View Events", url: "/calendar/events" },
//       { label: "Add Event", url: "/calendar/add" },
//     ], // Dropdown menu items for Calendar
//   },
//   {
//     title: "Community",
//     url: "/community",
//     icon: MdPeople,
//   },
// ];

// // Bottom items
// const bottomItems = [
//   {
//     title: "Support",
//     url: "/support",
//     icon: MdContactSupport,
//   },
//   {
//     title: "Settings",
//     url: "/settings",
//     icon: Settings,
//   },
//   {
//     title: "Sign Out",
//     url: "/sign-out",
//     icon: FaSignOutAlt,
//   },
// ];

// export function AppSidebar() {
//   const pathname = usePathname();

//   return (
//     <Sidebar className="flex flex-col h-full">
//       <SidebarContent className="flex-grow">
//         <SidebarGroup>
//           <SidebarGroupLabel className="p-6 pb-7">
//             <Image src={logo} alt="logo" />
//           </SidebarGroupLabel>
//           <SidebarGroupContent>
//             <SidebarMenu>
//               {topItems.map((item) => (
//                 <SidebarMenuItem key={item.title}>
//                   {item.dropdown ? (
//                     <DropdownMenu>
//                       <DropdownMenuTrigger asChild>
//                         <SidebarMenuButton
//                           asChild
//                           className={pathname === item.url ? "bg-[#E5FAFF]" : ""}
//                         >
//                           <div className="flex items-center space-x-2">
//                             {/* Adjust the icon size here */}
//                             <item.icon className="w-5 h-5 hidden sm:block" />
//                             <span className="font-bold text-md">{item.title}</span>
//                             <ChevronDown className="w-4 h-4" />
//                           </div>
//                         </SidebarMenuButton>
//                       </DropdownMenuTrigger>
//                       <DropdownMenuContent>
//                         {item.dropdown.map((subItem) => (
//                           <DropdownMenuItem key={subItem.url} asChild>
//                             <Link
//                               href={subItem.url}
//                               className={
//                                 pathname === subItem.url
//                                   ? "bg-[#E5FAFF]"
//                                   : ""
//                               }
//                             >
//                               {subItem.label}
//                             </Link>
//                           </DropdownMenuItem>
//                         ))}
//                       </DropdownMenuContent>
//                     </DropdownMenu>
//                   ) : (
//                     <SidebarMenuButton
//                       asChild
//                       className={pathname === item.url ? "bg-[#E5FAFF]" : ""}
//                     >
//                       <Link href={item.url}>
//                         <div className="flex items-center space-x-2">
//                           {/* Adjust the icon size here */}
//                           <item.icon className="w-5 h-5 hidden sm:block" />
//                           <span className="font-bold text-md">{item.title}</span>
//                         </div>
//                       </Link>
//                     </SidebarMenuButton>
//                   )}
//                 </SidebarMenuItem>
//               ))}
//             </SidebarMenu>
//           </SidebarGroupContent>
//         </SidebarGroup>
//       </SidebarContent>

//       {/* Bottom items section aligned to the bottom */}
//       <SidebarGroup className="mt-auto">
//         <SidebarGroupContent>
//           <SidebarMenu>
//             {bottomItems.map((item) => (
//               <SidebarMenuItem key={item.title}>
//                 <SidebarMenuButton
//                   asChild
//                   className={pathname === item.url ? "bg-[#E5FAFF]" : ""}
//                 >
//                   <Link href={item.url}>
//                     <div className="flex items-center space-x-2">
//                       {/* Adjust the icon size here */}
//                       <item.icon className="w-5 h-5 hidden sm:block" />
//                       <span className="font-bold text-md">{item.title}</span>
//                     </div>
//                   </Link>
//                 </SidebarMenuButton>
//               </SidebarMenuItem>
//             ))}
//           </SidebarMenu>
//         </SidebarGroupContent>
//       </SidebarGroup>
//     </Sidebar>
//   );
// }
"use client"
import { useState } from 'react';
import { FiHome, FiBook, FiUsers, FiSettings, FiLogOut, FiMenu, FiChevronLeft, FiPieChart, FiHelpCircle, FiChevronDown } from 'react-icons/fi';
import { MdSubscriptions } from 'react-icons/md';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // Use usePathname from next/navigation

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [isAiLearningDropdownOpen, setIsAiLearningDropdownOpen] = useState(false);
  const pathname = usePathname(); // Get the current path

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  const toggleAiLearningDropdown = () => {
    setIsAiLearningDropdownOpen(!isAiLearningDropdownOpen);
  };

  const isActive = (path) => pathname === path ? 'bg-[#E5FAFF]' : '';

  return (
    <div className={`flex flex-col h-screen bg-white shadow-sm text-gray-500 transition-all duration-300 ${isCollapsed ? 'w-20' : 'w-64'}`}>
      {/* Logo */}
      <div className={`flex items-center p-4 text-xl font-bold ${isCollapsed ? 'justify-center' : 'justify-start'}`}>
        {isCollapsed ? 'D' : 'DATS'}
      </div>

      {/* Menu Items */}
      <nav className="flex-grow mt-8 space-y-4">
        <ul>
          <li className={`flex items-center gap-4 p-2 m-2 rounded-md  ${isActive('/dashboard')}`}>
            <Link href="/dashboard">
              <Link href={""} className="flex items-center gap-4">
                <FiHome size={24} />
                {!isCollapsed && <span className='font-semibold'>Dashboard</span>}
              </Link>
            </Link>
          </li>
          <li className={`flex items-center gap-4 p-2 m-2 rounded-md  ${isActive('/dashboard/examination')}`}>
            <Link href="/dashboard/examination">
              <Link href={"/dashboard/examination"} className="flex items-center gap-4">
                <FiBook size={24} />
                {!isCollapsed && <span className='font-semibold'>Examination</span>}
              </Link>
            </Link>
          </li>
          <li className={`flex items-center gap-4 p-2 m-2 rounded-md  ${isActive('/community')}`}>
            <Link href="/community">
              <Link  href={""} className="flex items-center gap-4">
                <FiUsers size={24} />
                {!isCollapsed && <span className='font-semibold'>Community</span>}
              </Link>
            </Link>
          </li>

          {/* AI Learning Dropdown */}
          <li>
            <button onClick={toggleAiLearningDropdown} className={`flex items-center gap-4 p-2 w-full m-2 rounded-md  ${isActive('/ailearning')}`}>
              <FiPieChart size={24} />
              {!isCollapsed && <span className='font-semibold'>AI Learning</span>}
              {!isCollapsed && <FiChevronDown className={`ml-auto transform ${isAiLearningDropdownOpen ? 'rotate-180' : ''}`} />}
            </button>
            {/* Dropdown items */}
            {isAiLearningDropdownOpen && !isCollapsed && (
              <ul className="pl-8 space-y-2">
                <li className={`flex items-center gap-4 p-2  ${isActive('/ailearning/course1')}`}>
                  <Link href="/ailearning/course1">
                    <Link href={""}>Course 1</Link>
                  </Link>
                </li>
                <li className={`flex items-center gap-4 p-2  ${isActive('/ailearning/course2')}`}>
                  <Link href="/ailearning/course2">
                    <Link href={""}>Course 2</Link>
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className={`flex items-center gap-4 p-2 m-2 rounded-md  ${isActive('/subscription')}`}>
            <Link href="/subscription">
              <Link href={""} className="flex items-center gap-4">
                <MdSubscriptions size={24} />
                {!isCollapsed && <span className='font-semibold'>Subscription</span>}
              </Link>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Bottom Items */}
      <nav className="mb-4">
        <ul>
          <li className={`flex items-center gap-4 p-2 m-2 rounded-md  ${isActive('/support')}`}>
            <Link href="/support">
              <Link href={""} className="flex items-center gap-4">
                <FiHelpCircle size={24} />
                {!isCollapsed && <span className='font-semibold'>Support</span>}
              </Link>
            </Link>
          </li>
          <li className={`flex items-center gap-4 p-2 m-2 rounded-md  ${isActive('/settings')}`}>
            <Link href="/settings">
              <Link href={""} className="flex items-center gap-4">
                <FiSettings size={24} />
                {!isCollapsed && <span className='font-semibold'> Settings</span>}
              </Link>
            </Link>
          </li>
          <li className={`flex items-center gap-4 p-2 m-2 rounded-md  ${isActive('/signout')}`}>
            <Link href="/signout">
              <Link href={""} className="flex items-center gap-4">
                <FiLogOut size={24} />
                {!isCollapsed && <span className='font-semibold'>Sign Out</span>}
              </Link>
            </Link>
          </li>
        </ul>

        {/* User Profile */}
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

        {/* Collapse Icon at the Bottom */}
        <div className="flex justify-center p-4">
          <button onClick={toggleSidebar} className="text-white">
            {isCollapsed ? <FiMenu size={24} /> : <FiChevronLeft size={24} />}
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
