import React from "react";
import { BiRightArrowAlt } from "react-icons/bi";

function Summary({name,subject,topic}) {
  return (
    <div>
      <div>
        <div className="">
          <div className="bg-[#E5FAFF] flex gap-5 w-72 items-center h-24 px-3 py-3  rounded-md">
            <div className="bg-[#005C73] rounded-sm h-16 pt-4  w-16">
              <p className="text-white text-center font-medium text-xl">{name}</p>
            </div>
            <div className="flex flex-col ">
              <div>
                <p className="font-medium">{subject}</p>
              </div>
              <div>
                <h3 className="font-bold text-xl pt-3 ">{topic}</h3>
              </div>
            </div>
            <div>
            <BiRightArrowAlt className="text-4xl" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
