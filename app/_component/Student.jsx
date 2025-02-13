import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";
import {  star, student } from "../img";

function Student() {
  return (
    <div className="  bg-[#F2FDFF]">
      <div className="flex flex-col md:flex-row  justify-center md:justify-around gap-20">
        <div>
          <div className="flex gap-3 items-center ml-3 pt-8">
            <Button className=" bg-[#005C73] h-10 w-48 text-white rounded-2xl">
              What AcadaLens  offers
            </Button>
            <Image src={star} className="w-8 h-8" />
          </div>
          <div className="pt-8 pl-2">
            <h3 className="font-bold text-xl w-full md:w-[576px] h-full md:h-[144px] md:text-3xl   text-[#000000]">
            Learn As A Team And Climb Up The Ladder Through Competition Among Different Teams 
            </h3>
            <p className="pt-3 w-full md:w-[476px] text-[#303133]">
              Channeling AI to simplify academic preparation for pre-college and
              college students through personalized experience. While preparing
              them for academic success we also ensure that you enjoy intuitive
              and seamless experience through interconnectivity..
            </p>
          </div>
        </div>
        <div>
          <Image src={student} className="p-4 w-full h-full md:w-[476px]" />
        </div>
      </div>
    </div>
  );
}

export default Student;
