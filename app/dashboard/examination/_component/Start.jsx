import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Start() {
  return (
    <div className="px-4 sm:px-6 md:px-8 pt-12 sm:pt-16 md:pt-20">
      <div className="max-w-2xl mx-auto">
        <div className="flex flex-col items-center space-y-4 mb-8 sm:mb-10">
          <h1 className="font-bold text-xl sm:text-2xl name text-center">
            Welcome Agboola,
          </h1>
          <p className="text-xl sm:text-2xl font-semibold text-center">
            Are your ready to take your exam
          </p>
        </div>
        <div className="flex justify-center items-center flex-col">
          <p className="text-lg font-medium mb-6 sm:mb-8">Select mode of exam</p>
          <div className="flex flex-col gap-4 w-full max-w-xs">
            <div>
              <Link href={"/dashboard/examination/examoption"} className="block">
                <Button className="bg-[#005C73] hover:bg-[#004c5f] w-full py-6">
                  Single Mode
                </Button>
              </Link>
            </div>
            <div>
              <Link href={"/dashboard/competitions"} className="block">
                <Button variant="outline" className="w-full py-6 border-[#005C73] text-[#005C73] hover:bg-[#005C73] hover:text-white">
                  Competition Mode
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Start;
