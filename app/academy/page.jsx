import Image from "next/image";
// import Header from "./_component/Header";
import HeroSec from "./_component/HeroSec";
import Ouroffer from "./_component/Ouroffer";
import Student from "./_component/Student";
import Teacher from "./_component/Teacher";
import Learn from "./_component/Learn";
import Academic from "./_component/Acedemic";
import Footer from "./_component/Footer";
import TestimonialCarousel from "./_component/Testimonial";
import Header from "../_component/Header";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSec />
      <Ouroffer/>
      <Student/>
      <Teacher/>
    <Academic/>
    <TestimonialCarousel/> 
    <Footer/>
    </div>
  );
}
