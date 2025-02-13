import Image from "next/image";
import React from "react";
import { footer } from "../img";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { MailIcon } from "lucide-react";

function Footer() {
  const MenuList = [
    { name: "Home", path: "/dashboard" },
    { name: "About Us", path: "/about" },
    { name: "Blog", path: "/blog" },
    { name: "How it Works", path: "/how-it-works" },
  ];
  const MenuLists = [
    { name: "Contact", path: "/contact" },
    { name: "Faq", path: "/faq" },
    { name: "Blog", path: "/blog" },
    { name: "How it Works", path: "/how-it-works" },
  ];

  return (
    <div className="bg-[#313131] pb-5  flex flex-col md:flex-row min-h-screen md:min-h-0  gap-0 md:gap-20 px-0 md:px-4">
      <div>
        <Image src={footer} className="w-36 pt-10 ml-8 md:ml-0" />
      </div>
      <div className="flex flex-col md:flex-row gap-0 md:gap-12  justify-around items-center">
        <div>
          <nav className="flex gap-6  md:gap-40  justify-around pt-24 md:pt-0">
            <ul className="flex gap-4 flex-col">
              <h1 className="font-bold text-2xl text-white">Pages</h1>
              {MenuList.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.path}
                    className={`text-white font-medium hover:text-[#00A5CC]`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex gap-4 flex-col">
              <h1 className="font-bold text-2xl text-white">Company</h1>
              {MenuLists.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.path}
                    className={`text-white font-medium hover:text-[#00A5CC]`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
            <ul className="flex gap-4 flex-col">
              <h1 className="font-bold text-2xl text-white">Policies</h1>
              {MenuList.map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.path}
                    className={`text-white font-medium hover:text-[#00A5CC]`}
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="pt-8 md:pt-44">
          <div className="pl-5">
            <h1 className="text-[#E9F0FB] font-bold text-2xl md:text-3xl">
              Join our weekly digest
            </h1>
            <p className="text-[#CCF5FF] pt-3 md:w-[368px] w-full">
              Get all the exclusive promotions & updates directly in your email.
            </p>
          </div>
          <form className="flex m-2 md:m-0 ">
            <input
              type="email"
              placeholder="Enter your email here"
              className="flex-grow px-4  outline-none h-14 py-2 rounded-l-md text-gray-900"
              required
            />
            <Button
              type="submit"
              className="bg-[#005C73] flex  text-white h-14 px-6 py-2 rounded-r-md font-bold hover:bg-[#005C73] transition-colors"
            >
              <MailIcon/>
              Subscribe
            </Button>
          </form>
          <div className="border-b mt-12 md:border-none border-[#E9F0FB]"></div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
