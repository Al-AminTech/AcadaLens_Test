import React from "react";
import { BiUpArrowAlt } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
function Exam({ number, name, percent, className,icon }) {
  return (
    <div className=" bg-white shadow-md rounded-[8px] py-2">
      <div className="w-[14.5rem]  flex flex-col justify-start h-14 items-start gap-3 pl-4 ">
        <p className="text-[14px] font-[500]">{name}</p>
        <p className="text-2xl  font-[500]">{number}</p>
      </div>
      <div className={` ${className} flex  justify-end items-center pr-2 `}>
        <div>
          <FaPlus />
        </div>
        <p>{percent}%</p>
        <div>
      {icon}
        </div>
      </div>
    </div>
  );
}

export default Exam;
