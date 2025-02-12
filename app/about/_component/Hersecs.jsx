import { bulb, robot, vision } from "@/app/img";
import Image from "next/image";
import React from "react";

function Hersecs() {
  return (
    <div className="bg-[#D9F8FF]">
      <div className="pt-20 px-3 ">
        <div className="flex flex-col md:flex-row justify-normal md:justify-around">
          <div className="flex flex-col gap-5 pt-10">
            <h1 className="font-black text-black text-4xl">Our Story</h1>
            <p className="font-medium  text-md w-full md:w-[499px] ">
              {" "}
              Our primary position is to improve food security across Nigeria
              and the world at large with focus on agro produce such as rice,
              beans, maize, yam, potato, cocoa, oil palm etc thereby providing a
              fair competitive ground for farmers by proving them with resources
              that will help them thrive.
            </p>

            <p className="font-medium  text-md  w-full md:w-[499px]">
              Here at Klenda, we harness the power of internet technology, while
              also using our vast human and economic resources to support
              farmers, help them maximize productions and produce the best
              produce market can buy.
            </p>

            <p className="font-medium  text-md  w-full md:w-[499px]">
              Our mission is to be a one stop solution to both farmers and
              buyers of farm produce.
            </p>

            <p className="font-medium  text-md  w-full md:w-[499px]">
              Here at Klenda, we harness the power of internet technology, while
              also using our vast human and economic resources to support
              farmers, help them maximize productions and produce the best
              produce market can buy.
            </p>

            <p className="font-medium  text-md  w-full md:w-[499px]">
              Our mission is to be a one stop solution to both farmers and
              buyers of farm produce.
            </p>
          </div>
          <div>
            <Image src={robot} className="px-5 md:px-0 mt-6 md:mt-0" />
          </div>
        </div>
      </div>
      <div className="mt-8 px-5">
        <div className="flex flex-col gap-5 ">
          <p className="font-medium text-md">
            {" "}
            In today's digital age, financial technology, commonly known as
            fintech, has emerged as a driving force behind the transformation of
            traditional banking and payment systems. Fintech encompasses a wide
            range of technological innovations and solutions that revolutionize
            the way we manage and access our finances. In this blog post, we
            will explore the transformative power of fintech, highlighting key
            innovations and technologies that are reshaping personal and
            business finance.{" "}
          </p>

          <p className="font-medium text-md">
            Fintech refers to the application of technology to enhance financial
            services, making them more efficient, accessible, and user-friendly.
            It encompasses various sectors, including mobile banking, digital
            payments, investment platforms, blockchain, insurance technology
            (insurtech), and more. Fintech solutions leverage cutting-edge
            technologies to disrupt traditional financial institutions and
            provide innovative alternatives.
          </p>

          <p className="font-medium text-md">
            Fintech refers to the application of technology to enhance financial
            services, making them more efficient, accessible, and user-friendly.
            It encompasses various sectors, including mobile banking, digital
            payments, investment platforms, blockchain, insurance technology
            (insurtech), and more. Fintech solutions leverage cutting-edge
            technologies to disrupt traditional financial institutions and
            provide innovative alternatives.
          </p>

          <p className="font-medium text-md">
            Fintech refers to the application of technology to enhance financial
            services, making them more efficient, accessible, and user-friendly.
            It encompasses various sectors, including mobile banking, digital
            payments, investment platforms, blockchain, insurance technology
            (insurtech), and more. Fintech solutions leverage cutting-edge
            technologies to disrupt traditional financial institutions and
            provide innovative alternatives.{" "}
          </p>
        </div>
      </div>
      <div className="pt-8 px-5 md:px-0 md:pt-24 flex flex-col justify-start md:justify-around items-start md:items-center md:flex-row">
        <div className="flex flex-col gap-7 ">
          <div>
            <h1 className="font-bold text-3xl text-center ">
              And what we stand for!
            </h1>
          </div>
          <div>
            <Image src={bulb} className="w-full md:w-96"/>
          </div>
        </div>
        <div className="pt-10">
          <div>
            <h1 className="font-bold text-4xl ">Our Misson</h1>
          </div>
          <div>
            <p className="font-medium pt-4 text-justify w-full md:w-[594px]">
              {" "}
              At AcadaLens, our mission is to redefine the standards of
              professional wear by offering luxury utility tech jackets that do
              not compromise on style, comfort, or functionality. We are
              dedicated to pushing the boundaries of what is possible, crafting
              garments that empower professionals in their daily endeavors. Our
              commitment lies in the meticulous attention to detail, innovative
              use of technology, and the pursuit of sustainable luxury that
              makes every Purgelux jacket not just a piece of clothing, but a
              tool for excellence
            </p>
          </div>
        </div>
      </div>
      <div className="px-5  md:px-0 mt-0 md:mt-20  flex gap-4 flex-col md:flex-row justify-start md:justify-around  ">
        <div className="pt-10">
          <div>
            <h1 className="font-bold text-4xl ">Our Vision</h1>
          </div>
          <div>
            <p className="font-medium pt-4 text-justify w-full md:w-[586px]">
              {" "}
              At AcadaLens, our mission is to redefine the standards of
              professional wear by offering luxury utility tech jackets that do
              not compromise on style, comfort, or functionality. We are
              dedicated to pushing the boundaries of what is possible, crafting
              garments that empower professionals in their daily endeavors. Our
              commitment lies in the meticulous attention to detail, innovative
              use of technology, and the pursuit of sustainable luxury that
              makes every Purgelux jacket not just a piece of clothing, but a
              tool for excellence
            </p>
          </div>
        </div>
        <div>
          <Image src={vision} className="w-full md:w-96" />
        </div>
      </div>
    </div>
  );
}

export default Hersecs;
