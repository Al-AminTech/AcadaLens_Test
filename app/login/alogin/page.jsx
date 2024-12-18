import React from "react";
import { FaApple } from "react-icons/fa";
function page() {
  return (
    <div className="loginbg">
      <div className="min-h-screen flex justify-center flex-col  items-center">
        <div>
          <h1 className="">
            <FaApple  className="text-4xl"/>
          </h1>
        </div>
        <div className="flex items-center flex-col gap-3 ">
          <h2 className="font-extrabold text-2xl text-black pt-3 ">Login using Apple</h2>
          <p className="font-medium text-black   ">
            Give Acadalens Permission to have access to your apple profile
          </p>
          <button className="text-white bg-[#004859] w-[10rem] h-[3rem] rounded-lg">Grant Permission</button>
        </div>
      </div>
    </div>
  );
}

export default page;
