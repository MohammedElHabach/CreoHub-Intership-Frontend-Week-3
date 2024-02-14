import HeroSection from "@/components/HeroSection";
import Navbar from "@/components/Navbar";
import ProcessWork from "@/components/ProcessWork";
import PopularCategories from "@/components/PopularCategories";
import AddedJobs from "@/components/AddedJobs";
import FeedBack from "@/components/FeedBack";
import Cta from "@/components/Cta";
import Footer2 from "@/components/Footer2";

export default function Home() {
  return (
    <>
      <div className="navBanner">
        <Navbar />
        <HeroSection />
      </div>

      <ProcessWork />

      <PopularCategories />

      <AddedJobs />

      <FeedBack />

      <Cta />

      <Footer2 />
    </>
  );
}
