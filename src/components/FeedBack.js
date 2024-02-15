import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
const FeedBack = () => {
  return (
    <section id="feedback">
      <div className="xl:container mx-auto px-12 mt-32">
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-4 ">
          <div>
            <h2 className="text-3xl font-bold text-center  md:text-left">
              People's Feedback about JobNow!
            </h2>

            <div className=" py-6 text-gray-600 text-center   md:text-left">
              <p className="lg:pr-10 2xl:pr-28">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                officia maiores? Voluptates beatae ipsam tenetur cupiditate
                iusto consequuntur natus quam autem. Voluptate dignissimos iusto
                dolores aut in neque deserunt soluta.
              </p>
            </div>

            <div className=" py-6 font-bold  text-center  md:text-left">
              <p className="lg:pr-10 2xl:pr-28">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sed,
                officia maiores? Voluptates beatae ipsam tenetur cupiditate
                iusto consequuntur natus quam autem. Voluptate dignissimos iusto
                dolores aut in neque deserunt soluta.
              </p>
            </div>

            <div className="hidden text-center pt-8  md:text-left md:block">
              <h3 className="font-bold text-xl ">Brown Garcia</h3>
              <div className="pt-3">
                <p className="text-gray-600 ">
                  Full Stack Developer in XReact Tech
                </p>
              </div>

              <div className="flex gap-x-5 justify-center md:justify-start ">
                <div className="w-9 h-9 mt-3 bg-gray-300  rounded-full  flex items-center justify-center">
                  <KeyboardBackspaceIcon sx={{ color: "white" }} />
                </div>
                <div className="w-9 h-9 mt-3 bg-greenBg  rounded-full  flex items-center justify-center">
                  <ArrowForwardIcon sx={{ color: "white" }} />
                </div>
              </div>
            </div>
            
          </div>
          <div className="pt-12 ">
            <img src="/job.jpg" className="rounded-md" alt="image feedback" />
          </div>

          <div className="text-center pt-8 md:hidden">
              <h3 className="font-bold text-xl ">Brown Garcia</h3>
              <div className="pt-3">
                <p className="text-gray-600 ">
                  Full Stack Developer in XReact Tech
                </p>
              </div>

              <div className="flex gap-x-5 justify-center  ">
                <div className="w-9 h-9 mt-3 bg-gray-300  rounded-full  flex items-center justify-center">
                  <KeyboardBackspaceIcon sx={{ color: "white" }} />
                </div>
                <div className="w-9 h-9 mt-3 bg-greenBg  rounded-full  flex items-center justify-center">
                  <ArrowForwardIcon sx={{ color: "white" }} />
                </div>
              </div>
            </div>
        </div>
      </div>
    </section>
  );
};
export default FeedBack;