import { pic } from "@/app/img";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { FaFacebookSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FaSquareTwitter } from "react-icons/fa6";

function Team() {
  return (
    <div className="bg-[#d9f8ffc8]">
      <div className="pt-12 pb-10 flex flex-col gap-12 md:gap-14 md:flex-row justify-start md:justify-center">
        <div className=" px-4 ">
          <Image src={pic} className="w-full md:w-96" />
          <Link href={"/about/member"}>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Sanni Ahmed Agboola</h1>
              <p className="font-medium text-xl"> Product (UIUX) Designer</p>
            </div>
          </Link>
          <div className="flex gap-3">
            <FaSquareTwitter className="text-4xl hover:text-blue-300" />
            <FaFacebookSquare className="text-4xl hover:text-blue-300" />
            <FaLinkedin className="text-4xl hover:text-blue-300" />
          </div>
        </div>
        <div className=" px-4 ">
          <Image src={pic} className="w-full md:w-96" />
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Sanni Ahmed Agboola</h1>
            <p className="font-medium text-xl"> Product (UIUX) Designer</p>
          </div>
          <div className="flex gap-3">
            <FaSquareTwitter className="text-4xl hover:text-blue-300" />
            <FaFacebookSquare className="text-4xl hover:text-blue-300" />
            <FaLinkedin className="text-4xl hover:text-blue-300" />
          </div>
        </div>
      </div>
      <div className="mt-12 pb-10 flex flex-col gap-12 md:gap-14 md:flex-row justify-start md:justify-center">
        <div className=" px-4 ">
          <Image src={pic} className="w-full md:w-96" />
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Sanni Ahmed Agboola</h1>
            <p className="font-medium text-xl"> Product (UIUX) Designer</p>
          </div>
          <div className="flex gap-3">
            <FaSquareTwitter className="text-4xl hover:text-blue-300" />
            <FaFacebookSquare className="text-4xl hover:text-blue-300" />
            <FaLinkedin className="text-4xl hover:text-blue-300" />
          </div>
        </div>
        <div className="  px-4 ">
          <Image src={pic} className="w-full md:w-96" />
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Sanni Ahmed Agboola</h1>
            <p className="font-medium text-xl"> Product (UIUX) Designer</p>
          </div>
          <div className="flex gap-3">
            <FaSquareTwitter className="text-4xl hover:text-blue-300" />
            <FaFacebookSquare className="text-4xl hover:text-blue-300" />
            <FaLinkedin className="text-4xl hover:text-blue-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
