import Hero from "@/Components/Home/Hero";
import PopularEvent from "@/Components/Home/PopularEvent";
import Image from "next/image";

export default function Home() {
  return (
    <div className=''>
      <div>
        <Hero></Hero>
      </div>
      <div>
        <PopularEvent></PopularEvent>
      </div>
    </div>
  );
}
