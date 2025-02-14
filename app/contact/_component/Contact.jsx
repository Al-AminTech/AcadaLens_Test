import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail } from "lucide-react";
import Link from "next/link";
import React from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLocationArrow,
  FaTwitter,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
function Contact() {
  return (
    <div className="bg-[#F2FDFF] ">
      <div>
        <h1 className="font-bold text-3xl pl-5 pt-3 text-center md:text-center ">
          Contact us through any of the platforms
        </h1>
      </div>
      <div className="flex flex-col md:flex-row gap-12 md:gap-0 j items-center pt-10 justify-start md:justify-around ">
        <div className="pl-0 md:pl-5 pt-5 ">
          <form>
          <div className="pl-4">
          <h1 className="font-bold text-black text-3xl  ">Submit a request</h1>
            <p className="font-medium text-lg pt-3 ">
              Fill in Apropriate information and enquires
            </p>
          </div>
            <div className="flex flex-col w-full px-4">
              <div className="pt-8 flex flex-col">
                <Label className="font-bold flex text-2xl" htmlFor="fname">
                  Full name <sub className="pt-3 text-[#FE5621]">*</sub>
                </Label>
                <input
                  type="text"
                  placeholder="E.g Bilal Opeyemi"
                  className="mt-3 outline-none border border-gray-200 h-16 w-full max-w-[384px] rounded-xl pl-3"
                />
              </div>
              <div className="pt-8 flex flex-col">
                <Label className="font-bold flex text-2xl" htmlFor="email">
                  Email address <sub className="pt-3 text-[#FE5621]">*</sub>
                </Label>
                <input
                  type="text"
                  placeholder="E.g bilalopeyemi@gmail.com"
                  className="mt-3 outline-none border border-gray-200 h-16 w-full max-w-[384px] rounded-xl pl-3"
                />
              </div>
              <div className="pt-8 pb-8 flex flex-col">
                <Label htmlFor="message" className="font-bold text-2xl">
                  Subject
                </Label>
                <Textarea
                  type="text"
                  placeholder="E.g Enter Your Message"
                  className="mt-3 outline-none border border-gray-200 h-36 bg-white w-full max-w-[384px] rounded-xl pl-3"
                />
              </div>
            </div>

            <Button className="bg-[#005C73] text-white  rounded-lg h-16 w-full max-w-[384px] text-lg mb-4">
              Send Request
            </Button>
          </form>
        </div>
        <div className="flex pl-8  flex-col">
          <div>
            <div>
              <h1 className="font-bold text-2xl">Social Media</h1>
            </div>
            <div>
              <div className="pt-3">
                <Link
                  href={"/"}
                  className="flex  items-center gap-3 hover:text-blue-400"
                >
                  <FaTwitter className="" />
                  <p className="font-medium text-[#6D6D6D] hover:text-blue-400">
                    twitter.com/acadalens
                  </p>
                </Link>
              </div>
              <div className="pt-3">
                <Link
                  href={"/"}
                  className="flex  items-center gap-3 hover:text-blue-400"
                >
                  <FaFacebook className="" />
                  <p className="font-medium text-[#6D6D6D] hover:text-blue-400">
                    facebook/acadalens
                  </p>
                </Link>
              </div>
              <div className="pt-3">
                <Link
                  href={"/"}
                  className="flex  items-center gap-3 hover:text-blue-400"
                >
                  <FaInstagram className="" />
                  <p className="font-medium text-[#6D6D6D] hover:text-blue-400">
                    instagram.com/acadalens
                  </p>
                </Link>
              </div>
            </div>
          </div>
          <div className="pt-12">
            <h1 className="font-bold  text-2xl ">Email address</h1>
            <div>
              <Link
                href={"/"}
                className="flex items-center gap-3 pt-4 hover:text-blue-400"
              >
                <IoMdMail className="" />
                <p className="text-[#6D6D6D] hover:text-blue-400">
                  support@acadalens.com.ng
                </p>
              </Link>
            </div>
          </div>
          <div className="pt-12 pb-5">
            <div className="flex gap-2 items-center">
              <CiLocationOn className="text-xl font-bold" />
              <h1 className="font-bold  text-2xl ">Location</h1>
            </div>
            <div>
              <p className="text-[#6D6D6D] w-full md:w-[307px]">
                4 Odeyemi street, Off University of Ilorin Permanent site road,
                Tanke, Ilorin, Kwara State
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
