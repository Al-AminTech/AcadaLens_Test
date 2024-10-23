import Image from "next/image";
import Header from "./_component/Header";
import HeroSec from "./_component/HeroSec";
import Ouroffer from "./_component/Ouroffer";
import Student from "./_component/Student";
import Teacher from "./_component/Teacher";
import Learn from "./_component/Learn";
import Academic from "./_component/Acedemic";

export default function Home() {
  return (
    <div>
      <Header/>
      <HeroSec />
      <Ouroffer/>
      <Student/>
      <Teacher/>
    <Academic/>
    </div>
  );
}
