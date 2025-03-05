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
            <p className="font-[400]  text-md w-full md:w-[499px] ">
              {" "}
              The journey to Acada Lens began with a simple observation. In
              Nigeria, and across much of African countries, the educational
              system remains starkly unequal, leaving millions of students
              without access to quality resources that could propel them toward
              academic success.
            </p>

            <p className="font-[400]  text-md  w-full md:w-[499px]">
              Too often, students rely on outdated materials and limited
              instructional support, particularly in rural areas and underfunded
              schools. Sanni, having experienced these very challenges growing
              up, envisioned an innovative approach: harnessing the power of
              artificial intelligence to fill some of these educational gaps.
            </p>

            <p className="font-[400]  text-md  w-full md:w-[499px]">
              Acada Lens is working to become a pioneering platform designed to
              leverage AI in exam preparation to project academic excellence. It
              provided an interactive, personalized experience that went beyond
              typical question banks.
            </p>

            <p className="font-[400]  text-md  w-full md:w-[499px]">
              Students could practice subjects, receive immediate feedback on
              incorrect answers, and access suggestions that helped them focus
              on improving their weak areas. It was a way to learn actively, to
              transform errors into learning points, and ultimately, to make
              exam success more achievable. For students in Nigeria, where
              high-stakes exams are gateways to better opportunities, Acada Lens
              is a lifeline to attain academic excellence desired.
            </p>

            {/* <p className="font-[400]  text-md  w-full md:w-[499px]">
              Our mission is to be a one stop solution to both farmers and
              buyers of farm produce.
            </p> */}
          </div>
          <div>
            <Image src={robot} className="px-5 md:px-0 mt-6 md:mt-0" />
          </div>
        </div>
      </div>
      <div className="mt-8 px-5">
        <div className="flex flex-col gap-5 px-0 md:px-14 ">
          <p className="font-[400] text-md ">
            But the innovative team is not stopping at exam preparation. They
            had another bold aspiration: to address Africa’s linguistic
            diversity through developing an African Indigenous Language Learning
            Model. In a continent with thousands of languages, Acada Lens
            aspired to preserve and celebrate cultural heritage by integrating
            native languages into academic learning. With this, they hoped to
            not only support multilingual students but also to create a model
            that allowed other Edtech platforms to incorporate these indigenous
            languages. This endeavor wasn’t just about education; it was about
            identity, empowerment, and inclusivity.
          </p>

          <p className="font-[400] text-md">
              To make Acada Lens accessible to every student, they structured
            their offerings with affordability in mind. A range of
            pocket-friendly subscription options, along with a flexible API and
            SDK licensing for other education businesses, aimed to bring this
            resource to classrooms and homes across Africa
          </p>

          <p className="font-[400] text-md">
            Marketing strategies were crafted with equal thoughtfulness—free
            trial periods, referral programs, and school visits aimed to reach
            every student, especially those most underserved. This wasn’t just a
            business model; it was a social movement, fueled by partnerships
            with local schools, organizations, and influencers who saw the
            potential to transform the way Africa learned.
          </p>

          <p className="font-[400] text-md">
            Today, Acada Lens is more than a company; it’s a bridge to a
            brighter future. It stands as a testament to what can happen when
            technology, empathy, and ambition converge. For team, every new
            user, every corrected exam, and every success story from a student
            represents a step toward the dream that began around a simple
            conversation in Ilorin, Kwara State, Nigeria—a dream that, one day,
            all students across Africa will have the tools they need to thrive.
          </p>
        </div>
      </div>
      <div className="pt-8 px-5 md:px-0 md:pt-24 flex flex-col justify-start md:justify-around items-start  md:flex-row">
        <div className="flex flex-col gap-7 ">
          <div>
            <h1 className="font-bold text-3xl text-center ">
              And what we stand for!
            </h1>
          </div>
          <div>
            <Image src={bulb} className="w-full md:w-96" />
          </div>
        </div>
        <div className="pt-10">
          <div>
            <h1 className="font-bold text-4xl ">Our Misson</h1>
          </div>
          <div>
            <p className="font-[400] pt-4 text-justify w-full md:w-[500px]">
              {" "}
              At Acada Lens, our mission iis to enhance students’ academic
              performance through a subject-based examination practice platform
              where AI-driven corrections are facilitated, making academic-based
              AI easily accessible to young learners while also providing
              product development packages (API and SDK)  support to Edutech
              businesses.
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
            <p className="font-[400] pt-4 text-justify w-full md:w-[500px]">
              Our vision is to be Africa’s leading provider of indigenous
              academic AI solutions that enhance academic performance and
              accessibility for students across the continent by providing
              access to individualized AI based academic support for Pre-College
              and College Students while also providing API and SDK  support to
              Edutech businesses across the African continent and world at large
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
