import ChoseUs from "@/Components/Home/ChoseUs";
import Hero from "@/Components/Home/Hero";
import PopularEvent from "@/Components/Home/PopularEvent";
import Speakers from "@/Components/Home/Speakers";
import Ticket from "@/Components/Home/Ticket";
import Image from "next/image";

export default function Home() {
  return (
    <div className=''>
      <div >
        <Hero></Hero>
      </div>
      <div>
        <PopularEvent></PopularEvent>
      </div>
      <div>
        <ChoseUs></ChoseUs>
      </div>
      <div>
        <Speakers></Speakers>
      </div>
      <div>
        <Ticket></Ticket>
      </div>
    </div>
  );
}
