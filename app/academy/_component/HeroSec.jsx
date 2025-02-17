import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
// import { hero } from '../img'

function HeroSec() {
  return (
    <div className="flex flex-col items-center  gap-7 md:justify-center mt-10">
      <div className="flex flex-col   gap-7 items-center justify-center mt-10">
        <h3 className=" text-[30px] md:text-6xl md:w-20rem  w-full font-bold text-center md:text-center text-[#0091b2d8]">
          <span className="text-[#005C73]">Best Platform</span> Where You Can
          Dive Into Greatness of{" "}
          <span className="text-[#005C73]  italic text-end">Learning</span>
        </h3>
        <p className="text-[14px] md:text-[17px] w-full md:w-[427px] text-center md:text-start font-medium p-2">
          A web solution that care for your all round academic solution for
          Pre-college stage and college stage
        </p>

        <Link href={"/signup"}>
          <Button className="bg-[#0090B2] rounded-full w-36 h-10">
            Get Started
          </Button>
        </Link>
      </div>
      <div>
        <Image
          src={""}
          className="p-4 image md:h-[26rem] h-full w-full md:w-[27rem] "
        />
      </div>
    </div>
  );
}

export default HeroSec;
