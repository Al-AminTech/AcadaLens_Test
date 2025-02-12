import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

function Start() {
  return (
    <div className="pt-20">
      <div>
        <div className="flex flex-col items-center">
          <h1 className="font-bold text-2xl name text-center">
            Welcome Agboola,
          </h1>
          <p className="text-2xl font-semibold text-center pt-5">
            Are your ready to take your exam
          </p>
        </div>
        <div className="flex justify-center items-center pt-10 flex-col">
          <p className="pb-10 font-medium">Select mode of exam</p>
          <div className="flex flex-col gap-3">
            <div>
          <Link href={"/dashboard/examination/examoption"}>
          <Button className="bg-[#005C73] w-72">Single Mode</Button>
          </Link>
            </div>
            <div>
              <Link href={"/dashboard/competitions"}>
                <Button variant="outline" className="w-72">
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
