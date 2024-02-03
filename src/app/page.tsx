import HeroSection from "@/components/HeroSection"
import Navbar from "@/components/Navbar";
import ProcessWork from "@/components/ProcessWork";
import PopularCategories from "@/components/PopularCategories"
import AddedJobs from "@/components/AddedJobs"
import FeedBack from "@/components/FeedBack"

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

    <div className="pt-16">

    <AddedJobs/>
    </div>

    <div className="pt-16">

    <FeedBack/>
    </div>
    </>
    
  );
}
