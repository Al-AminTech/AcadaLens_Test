// "use client";
// import Image from "next/image";
// import { usePathname } from "next/navigation";
// import React, { useState, useEffect } from "react";
// import { logo } from "../img";
// import { Button } from "@/components/ui/button";
// import { FaBars } from "react-icons/fa";
// import { FaChevronDown } from "react-icons/fa";
// import Link from "next/link";

// function Header() {
//   const pathname = usePathname();
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isFixed, setIsFixed] = useState(false); // To handle scroll event

//   const MenuList = [
//     { name: "Home", path: "/" },
//     { name: "About Us", path: "/about" },
//     { name: "Contact", path: "/contact" },
//     { name: "Product", path: "#" },
//     { name: "Blog", path: "/blog" },
//   ];

//   // Handle scroll event
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setIsFixed(true); // Navbar becomes fixed after 50px scroll
//       } else {
//         setIsFixed(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   const toggleDropdown = () => {
//     setDropdownOpen(!dropdownOpen);
//   };

//   return (
//     <div>
//       <div
//         className={`flex justify-between  items-center bg-white shadow-md p-4  transition-all duration-300 ease-in-out ${
//           isFixed ? "fixed top-0 left-0 right-0 z-50 w-full  duration-300" : "rounded-md mx-0 md:mx-20 m-4"
//         }`}
//       >
//         <div>
//           <Image src={logo} className="w-[120.08px] h-[36px]" alt="Logo" />
//         </div>
//         <div className="md:hidden">
//           <FaBars onClick={toggleMenu} className="cursor-pointer text-xl text-[#005C73]" />
//         </div>
//         <nav
//           className={`md:flex justify-around ${
//             menuOpen ? "block" : "hidden"
//           } transition-all duration-500 ease-in-out absolute md:static top-full left-0 w-full bg-white md:bg-transparent md:space-x-8`}
//         >
//           <ul className="md:flex md:space-x-8 space-y-4 md:space-y-0 p-4 md:p-0">
//             {MenuList.map((item, i) => (
//               <li key={i} className="relative">
//                 {item.name === "Product" ? (
//                   <div>
//                     <button
//                       onClick={toggleDropdown}
//                       className={`flex items-center ${
//                         pathname === item.path ? "text-[#0090B2]" : "text-black"
//                       } hover:text-[#0091b2] focus:outline-none`}
//                     >
//                       {item.name}
//                       <FaChevronDown
//                         className={`ml-2 transition-transform ${
//                           dropdownOpen ? "rotate-180" : ""
//                         }`}
//                       />
//                     </button>
//                     {dropdownOpen && (
//                       <div className="absolute mt-2 bg-white shadow-lg rounded-md p-2 w-40 z-10">
//                         <Link
//                           href="/rent"
//                           className="block text-black border-b pb-2  hover:text-[#0091b2c6] cursor-pointer"
//                         >
//                           House Rent
//                         </Link>
//                         <Link
//                           href="#"
//                           className="block text-black  pt-3 hover:text-[#0091b2c6] cursor-pointer"
//                         >
//                           Learning
//                         </Link>
//                       </div>
//                     )}
//                   </div>
//                 ) : (
//                   <Link
//                     href={item.path}
//                     className={`${
//                       pathname === item.path ? "text-[#0090B2]" : "text-black"
//                     } hover:text-[#0091b2c3]`}
//                   >
//                     {item.name}
//                   </Link>
//                 )}
//               </li>
//             ))}
//           </ul>
//           {menuOpen && (
//             <Button onClick={toggleMenu} className="md:hidden">
//               Cancel
//             </Button>
//           )}
//         </nav>
//         <div className="hidden md:flex space-x-4">
//           <Link href={"/login"}>
//             <Button
//               variant="outline"
//               className="border w-28 border-[#0090B2] text-[#0090B2]"
//             >
//               Login
//             </Button>
//           </Link>

//           <Link href={"/signup"}>
//             <Button className="bg-[#0090B2] w-28 text-white">Sign Up</Button>
//           </Link>
//         </div>
//       </div>

//       <div
//         className={`md:hidden ${
//           menuOpen ? "block" : "hidden"
//         } bg-white w-full shadow-md transition-all duration-500 ease-in-out`}
//       >
//         <ul className="space-y-4 p-4">
//           {MenuList.map((item, i) => (
//             <li key={i}>
//               <Link
//                 href={item.path}
//                 className={`${
//                   pathname === item.path ? "text-blue-500" : "text-black"
//                 } hover:text-blue-500`}
//               >
//                 {item.name}
//               </Link>
//             </li>
//           ))}
//         </ul>
//         <div className="p-4">
//           <Button className="w-full border border-[#0090B2] text-[#0090B2]">
//             Login
//           </Button>
//           <Button className="w-full bg-[#0090B2] mt-3 text-white">Sign Up</Button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Header;

"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { hamburger, logo } from "../img";
import { Button } from "@/components/ui/button";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false);

  const MenuList = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Product", path: "#" },
    { name: "Blog", path: "/blog" },
  ];

  // Handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      setIsFixed(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close menu on large screens when resizing
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  return (
    <div>
      <div
        className={`flex justify-between items-center bg-white shadow-md p-4  transition-all duration-300 ease-in-out ${
          isFixed
            ? "fixed top-0 left-0 right-0 z-50 w-full"
            : "rounded-none md:rounded-md mx-0 md:mx-20 m-0 md:m-4"
        }`}
      >
        <div>
          <Image src={logo} className="w-28 h-16" alt="Logo" />
        </div>
        <div className="md:hidden">
          {menuOpen ? (
            <FaTimes
              onClick={toggleMenu}
              className="cursor-pointer text-xl text-[#005C73]"
            />
          ) : (
            <Image 
              src={hamburger}
              onClick={toggleMenu}
              className="cursor-pointer w-10 h-10 text-[#005C73]"
            />
          )}
        </div>
        <nav className="hidden md:flex justify-around md:space-x-8">
          <ul className="md:flex md:space-x-8 space-y-4 md:space-y-0 p-4 md:p-0">
            {MenuList.map((item, i) => (
              <li key={i} className="relative">
                {item.name === "Product" ? (
                  <div>
                    <button
                      onClick={toggleDropdown}
                      className={`flex items-center ${
                        pathname === item.path ? "text-[#0090B2]" : "text-black"
                      } hover:text-[#0091b2] focus:outline-none`}
                    >
                      {item.name}
                      <FaChevronDown
                        className={`ml-2 transition-transform ${
                          dropdownOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {dropdownOpen && (
                      <div className="absolute mt-2 bg-white shadow-lg rounded-md p-2 w-40 z-10">
                        <Link
                          href="/rent"
                          className="block text-black border-b pb-2 hover:text-[#0091b2c6] cursor-pointer"
                        >
                          House Rent
                        </Link>
                        <Link
                          href="#"
                          className="block text-black pt-3 hover:text-[#0091b2c6] cursor-pointer"
                        >
                          Learning
                        </Link>
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.path}
                    className={`${
                      pathname === item.path ? "text-[#0090B2]" : "text-black"
                    } hover:text-[#0090B2]`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden md:flex space-x-4">
          <Link href={"/login"}>
            <Button
              variant="outline"
              className="border w-28 border-[#00A5CC] text-[#00A5CC]"
            >
              Login
            </Button>
          </Link>
          <Link href={"/signup"}>
            <Button className="bg-[#00A5CC] w-28 text-white">Sign Up</Button>
          </Link>
        </div>
      </div>

      {/* Overlay when menu is open */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40"
          onClick={toggleMenu}
        ></div>
      )}

      {/* Full-screen mobile menu */}
      <div
        className={`md:hidden fixed inset-0 z-50 bg-white overflow-y-auto transition-transform duration-500 ease-in-out ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-4">
          <FaTimes
            onClick={toggleMenu}
            className="cursor-pointer text-2xl text-[#005C73]"
          />
        </div>
        <ul className="space-y-4 p-4">
          {MenuList.map((item, i) => (
            <li key={i}>
              <Link
                href={item.path}
                className={`block text-lg ${
                  pathname === item.path ? "text-[#0090B2]" : "text-black"
                } hover:text-[#0090B2]`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="p-4">
          <Link href={"/login"}>
            <Button className="w-full border bg-white border-[#00A5CC] text-[##00A5CC]">
              Login
            </Button>
          </Link>
          <Link href={"/signup"}>
            <Button className="w-full bg-[#00A5CC] mt-3 text-white">
              Sign Up
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
