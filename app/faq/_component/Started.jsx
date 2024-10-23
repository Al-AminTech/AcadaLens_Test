import { what } from "@/app/img";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

function Started() {
  return (
    <div className=" bg-[#f0f8f9]">
        <div className="flex flex-col justify-center items-center pt-20">
      <div>
        <Image src={what} className="w-20 h-20" />
      </div>
      <div className="flex flex-col gap-4 pb-5 justify-center items-center ">
        <div>
          <h1 className="font-bold text-center  text-2xl ">
            Still have unanswered question?
          </h1>
          <p className="text-center font-normal text-md pt-3">
            These are questions and answers to general popular questions from
            our users and enquirers
          </p>
        </div>
        <div>
          <Button className="w-44 h-14">Get Started</Button>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Started;
