"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React, { useState, useEffect } from "react";
import { logo } from "../img";
import { Button } from "@/components/ui/button";
import { FaBars } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import Link from "next/link";

function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isFixed, setIsFixed] = useState(false); // To handle scroll event

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
      if (window.scrollY > 50) {
        setIsFixed(true); // Navbar becomes fixed after 50px scroll
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
        className={`flex justify-between m-4 mx-0 md:mx-20 items-center bg-white shadow-md p-4 rounded-md transition-all duration-300 ease-in-out ${
          isFixed ? "fixed top-0 left-0 right-0 z-50 w-full" : ""
        }`}
      >
        <div>
          <Image src={logo} className="w-[180.08px] h-[36px]" alt="Logo" />
        </div>
        <div className="md:hidden">
          <FaBars onClick={toggleMenu} className="cursor-pointer text-xl text-[#005C73]" />
        </div>
        <nav
          className={`md:flex justify-around ${
            menuOpen ? "block" : "hidden"
          } transition-all duration-500 ease-in-out absolute md:static top-full left-0 w-full bg-white md:bg-transparent md:space-x-8`}
        >
          <ul className="md:flex md:space-x-8 space-y-4 md:space-y-0 p-4 md:p-0">
            {MenuList.map((item, i) => (
              <li key={i} className="relative">
                {item.name === "Product" ? (
                  <div>
                    <button
                      onClick={toggleDropdown}
                      className={`flex items-center ${
                        pathname === item.path ? "text-[#0090B2]" : "text-black"
                      } hover:text-blue-500 focus:outline-none`}
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
                          className="block text-black border-b pb-2  hover:text-blue-500 cursor-pointer"
                        >
                          House Rent
                        </Link>
                        <Link
                          href="#"
                          className="block text-black  pt-3 hover:text-blue-500 cursor-pointer"
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
                    } hover:text-blue-500`}
                  >
                    {item.name}
                  </Link>
                )}
              </li>
            ))}
          </ul>
          {menuOpen && (
            <Button onClick={toggleMenu} className="md:hidden">
              Cancel
            </Button>
          )}
        </nav>
        <div className="hidden md:flex space-x-4">
          <Link href={"/login"}>
            <Button
              variant="outline"
              className="border w-28 border-[#0090B2] text-[#0090B2]"
            >
              Login
            </Button>
          </Link>

          <Link href={"/signup"}>
            <Button className="bg-[#0090B2] w-28 text-white">Sign Up</Button>
          </Link>
        </div>
      </div>

      <div
        className={`md:hidden ${
          menuOpen ? "block" : "hidden"
        } bg-white w-full shadow-md transition-all duration-500 ease-in-out`}
      >
        <ul className="space-y-4 p-4">
          {MenuList.map((item, i) => (
            <li key={i}>
              <Link
                href={item.path}
                className={`${
                  pathname === item.path ? "text-blue-500" : "text-black"
                } hover:text-blue-500`}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className="p-4">
          <Button className="w-full border border-[#0090B2] text-[#0090B2]">
            Login
          </Button>
          <Button className="w-full bg-[#0090B2] mt-3 text-white">Sign Up</Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
