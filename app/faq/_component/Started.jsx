import { Question, what } from "@/app/img";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Started() {
  return (
    <div className=" bg-[#f0f8f9]">
        <div className="flex flex-col justify-center items-center pt-20">
      <div>
        <Image src={Question} className="w-[174px] h-[140px]" />
      </div>
      <div className="flex flex-col gap-4 pb-5 justify-center text-[] items-center ">
        <div>
          <h1 className="font-bold text-center  text-2xl text-[#313131]">
            Still have unanswered question?
          </h1>
          <p className="text-center font-normal text-md pt-3">
            These are questions and answers to general popular questions from
            our users and enquirers
          </p>
        </div>
        <div>
          <button className="w-44 h-14 bg-[#005C73] rounded-md text-white">Get Started</button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Started;
