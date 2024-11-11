import React from "react";

function page() {
  return (
    <div className="loginbg">
      <div className="min-h-screen  flex justify-center items-center flex-col">
        <div className="flex flex-col">
          <h1 className="text-black text-2xl font-extrabold">Forgotten Password</h1>
          <p className="font-medium text-black pt-3">Enter the email associated to your account</p>
        </div>
        <div className="pt-10">
          <div className="flex flex-col pb-5 ">
            <label htmlFor="email" className="font-light text-black">Email Address</label>
            <input type="email" name="email" id="" className="border border-[#4C4C4C] rounded-sm p-3 outline-none" placeholder="Enter Email address" />
          </div>
          <button className="bg-[#004859] h-[3rem] w-[20rem] rounded-md">Continue</button>
        </div>
      </div>
    </div>
  );
}

export default page;
