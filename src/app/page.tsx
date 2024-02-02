import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar";
import ProcessWork from "@/components/ProcessWork";
import PopularCategories from "@/components/PopularCategories"
export default function Home() {
  return (
    <>
    <div className="md:bg-grayBg ">
    <Navbar/>
    <HeroSection/>

    </div>

    <div className="pt-16 ">
        <ProcessWork/>
    </div>

    <div className="pt-16">

    <PopularCategories/>
    </div>
    </>
    
  );
}
