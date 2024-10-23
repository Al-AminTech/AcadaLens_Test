import React from "react";
import Exam from "./Exam";

function Below() {
  return (
    <div>
      <div> 
        <div>
          <h1>Your Exam Summary</h1>
        </div>
       <div>
        <div>
        <Exam number={"35/100"} name="Total exam done"/>
        </div>
        <div>
        <Exam number={"35/100"} name="Total exam passed"/>
        </div>
        <div>
        <Exam number={"35/100"} name="Total exam done"/>
        </div>
        <div>
        <Exam number={"35/100"} name="Total exam done"/>
        </div>
       </div>
      </div>
    </div>
  );
}

export default Below;
