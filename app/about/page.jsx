import React from "react";
import Hersecs from "./_component/Hersecs";
import Values from "./_component/Values";
import Team from "./_component/Team";
import Learn from "../_component/Learn";
import Footer from "../_component/Footer";
import Header from "../_component/Header";
import Aboutus from "./_component/Aboutus";

function page() {
  return (
    <div>
      <div className="relative">
        <div className="absolute w-full mt-3">
          <Header />
        </div>
        <div>
          <Aboutus />
        </div>
      </div>
      <Hersecs />
      <Values />
      <Team />
      <Learn />
      <Footer />
    </div>
  );
}

export default page;
