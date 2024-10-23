import React from "react";
import { IoMdSearch } from "react-icons/io";
import { MdNotificationAdd } from "react-icons/md";
import { BiUpArrowAlt } from "react-icons/bi";
import { BiDownArrowAlt } from "react-icons/bi";
import Exam from "./Exam";
import Summary from "./Summary";
import UserProfiles from "./UserProfiles";

function Center() {
  return (
    <div className="flex flex-col gap-7">
      <div className="flex gap-[45rem] shadow-sm m-2  p-2 items-center">
        <div>
          <h1 className="font-bold text-2xl">Overview Summary</h1>
        </div>
        <div className="flex gap-7">
          <IoMdSearch className="text-3xl font-light" />
          <MdNotificationAdd className="text-red-500 text-3xl" />
        </div>
      </div>
      <div>
        <div className="">
          <div>
            <h1 className="font-bold text-xl  ">Your Exam Summary</h1>
          </div>
          <div className="num mt-10  flex">
            <div>
              {" "}
              <Exam
                number={"35/100"}
                name="Total exam done"
                percent={"13"}
                className="text-green-500"
                icon={<BiUpArrowAlt />}
              />
            </div>
            <div>
              {" "}
              <Exam
                number={"35/100"}
                name="Total exam passed"
                percent={"13"}
                className="text-green-500"
                icon={<BiUpArrowAlt />}
              />
            </div>
            <div>
              {" "}
              <Exam
                number={"35/100"}
                name="Total exam failed"
                percent={"13"}
                className="text-red-500"
                icon={<BiDownArrowAlt />}
              />
            </div>
            <div>
              {" "}
              <Exam
                number={"35/100"}
                name="Total AI Correction"
                percent={"13"}
                className="text-green-500"
                icon={<BiUpArrowAlt />}
              />
            </div>
          </div>
        </div>
        <div>
          <UserProfiles/>
        </div>
        <div>
          <div>
            <h1 className="font-bold text-2xl">Your AI Class Summary</h1>
          </div>
          <div className="flex  gap-3">
            <Summary name="UoE" subject="Use of English" topic="Oral Sound" />
            <Summary name="UE" subject={"Mathematics"} topic={"Accounting"}  />
            <Summary name="UE" subject={"Mathematics"} topic={"Accounting"}  />
            <Summary name="UE" subject={"Mathematics"} topic={"Accounting"}  />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Center;
