import { pic } from "@/app/img";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { AiFillTwitterCircle } from "react-icons/ai";
import { MdFacebook } from "react-icons/md";
import { TiSocialLinkedinCircular } from "react-icons/ti";

function Team() {
  return (
    <div className="bg-[#d9f8ffc8]">
      <div className="pt-5 flex flex-col md:flex-row justify-start md:justify-around">
        <div className=" px-4 ">
          <Image src={pic} className="w-full md:w-96" />
          <Link href={"/about/member"}>
            <div className="flex flex-col">
              <h1 className="font-bold text-2xl">Sanni Ahmed Agboola</h1>
              <p className="font-medium text-xl"> Product (UIUX) Designer</p>
            </div>
          </Link>
          <div className="flex gap-3">
            <AiFillTwitterCircle className="text-4xl hover:text-blue-300" />
            <MdFacebook className="text-4xl hover:text-blue-300" />
            <TiSocialLinkedinCircular className="text-4xl hover:text-blue-300" />
          </div>
        </div>
        <div className="  px-4 ">
          <Image src={pic} className="w-full md:w-96" />
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Sanni Ahmed Agboola</h1>
            <p className="font-medium text-xl"> Product (UIUX) Designer</p>
          </div>
          <div className="flex gap-3">
            <AiFillTwitterCircle className="text-4xl hover:text-blue-300" />
            <MdFacebook className="text-4xl hover:text-blue-300" />
            <TiSocialLinkedinCircular className="text-4xl hover:text-blue-300" />
          </div>
        </div>
      </div>
      <div className="mt-20 pb-10 flex flex-col md:flex-row justify-start md:justify-around">
        <div className="  px-4 ">
          <Image src={pic} className="w-full md:w-96" />
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Sanni Ahmed Agboola</h1>
            <p className="font-medium text-xl"> Product (UIUX) Designer</p>
          </div>
          <div className="flex gap-3">
            <AiFillTwitterCircle className="text-4xl hover:text-blue-300" />
            <MdFacebook className="text-4xl hover:text-blue-300" />
            <TiSocialLinkedinCircular className="text-4xl hover:text-blue-300" />
          </div>
        </div>
        <div className="  px-4 ">
          <Image src={pic} className="w-full md:w-96" />
          <div className="flex flex-col">
            <h1 className="font-bold text-2xl">Sanni Ahmed Agboola</h1>
            <p className="font-medium text-xl"> Product (UIUX) Designer</p>
          </div>
          <div className="flex gap-3">
            <AiFillTwitterCircle className="text-4xl hover:text-blue-300" />
            <MdFacebook className="text-4xl hover:text-blue-300" />
            <TiSocialLinkedinCircular className="text-4xl hover:text-blue-300" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
