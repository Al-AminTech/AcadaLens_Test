import { pic } from "@/app/img";
import Image from "next/image";
import React from "react";

function AboutMem() {
  return (
    <div className="text-center">
      <div className="relative">
        <div className="aboutus">
          <div className="flex items-center justify-center flex-col h-screen">
            <h1 className="text-6xl text-white font-bold">About-Team member</h1>
            <p className="pt-3">
              A web solution that cares for your all-round academic solution
              for Pre-college stage and college stage
            </p>
          </div>
        </div>
        <div className="absolute bottom-[-6rem] left-1/2 transform -translate-x-1/2 flex justify-center items-center">
          <Image src={pic} className="w-80" alt="Team member" />
        </div>
      </div>
    </div>
  );
}

export default AboutMem;
