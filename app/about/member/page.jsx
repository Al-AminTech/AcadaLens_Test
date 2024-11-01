import Header from "@/app/_component/Header";
import React from "react";
import AboutMem from "./_component/AboutMem";
import Component from "./_component/Textabout";
import Learn from "@/app/_component/Learn";
import Footer from "@/app/_component/Footer";

function page() {
  return (
    <div>
      <div className="relative">
        <div className="absolute z-10 w-full mt-3">
          <Header />
        </div>
        <div>
          <AboutMem />
        </div>
      </div>
      <Component/>
      <Learn/>
      <Footer/>
    </div>
  );
}

export default page;
