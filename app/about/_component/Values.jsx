import React from "react";
import { FaRegUser } from "react-icons/fa";
import { GiTeamIdea } from "react-icons/gi";
import { MdHandshake, MdHighQuality } from "react-icons/md";
import { LuNewspaper } from "react-icons/lu";
function Values() {
  return (
    <div className="bg-[rgb(4,66,81)] p-5">
      <div className="flex flex-col md:flex-row flex-wrap justify-start md:justify-center ">
        <div className="flex flex-col  bg-[#D9F8FF]  w-full md:w-[35rem] px-6 h-36 mt-5 rounded-lg items-center justify-center ">
          <h1 className="font-bold text-3xl text-black">Our Core Values</h1>
          <p className="text ">
            These are not just words but principles that guide us on how we
            interact with the world
          </p>
        </div>
        <div className="flex flex-col md:flex-row flex-wrap justify-center gap-10">
          <div className="bg-[#D9F8FF] h-full md:h-48 w-full md:w-96 rounded-lg mt-3 px-4 py-4">
            <FaRegUser className="text-white bg-[#044251] rounded-full w-10 h-10 p-2" />
            <div>
              <h1 className="font-bold text-xl">User-Centric</h1>
              <p className="text-md">
                Our first mantra is customers come first. We go above and beyond
                to guarantee that our clients always get the best.
              </p>
            </div>
          </div>
          <div className="bg-[#D9F8FF] h-full md:h-48 w-full md:w-96 rounded-lg mt-3 px-4 py-4">
            <GiTeamIdea className="text-white bg-[#044251] rounded-full w-10 h-10 p-2" />
            <div>
              <h1 className="font-bold text-xl">TeamWork</h1>
              <p className="text-md">
                Excellent Teamwork is one of the keys to success. We leverage
                our skills to create innovative digital solutions tailored just
                for you and your business.
              </p>
            </div>
          </div>
          <div className="bg-[#D9F8FF] h-full md:h-48 w-full md:w-96 rounded-lg mt-3 px-4 py-4">
            <MdHandshake className="text-white bg-[#044251] rounded-full w-10 h-10 p-2" />
            <div>
              <h1 className="font-bold text-xl">Commitment</h1>
              <p className="text-md">
                Excellent Teamwork is one of the keys to success. We leverage
                our skills to create innovative digital solutions tailored just
                for you and your business.
              </p>
            </div>
          </div>
          <div className="bg-[#D9F8FF] h-full md:h-48 w-full md:w-96 rounded-lg mt-3 px-4 py-4">
            <LuNewspaper className="text-white bg-[#044251] rounded-full w-10 h-10 p-2" />
            <div>
              <h1 className="font-bold text-xl">Accountablity</h1>
              <p className="text-md">
                Excellent Teamwork is one of the keys to success. We leverage
                our skills to create innovative digital solutions tailored just
                for you and your business.
              </p>
            </div>
          </div>
          <div className="bg-[#D9F8FF] h-full md:h-48 w-full md:w-96 rounded-lg mt-3 px-4 py-4">
            <MdHighQuality className="text-white bg-[#044251] rounded-full w-10 h-10 p-2" />
            <div>
              <h1 className="font-bold text-xl">Quality</h1>
              <p className="text-md">
                Excellent Teamwork is one of the keys to success. We leverage
                our skills to create innovative digital solutions tailored just
                for you and your business.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Values;
