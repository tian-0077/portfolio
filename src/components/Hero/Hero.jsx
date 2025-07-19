import React from "react";
import { BiSolidCloudDownload } from "react-icons/bi";
import Tian from "../../assets/tian.jpg";
import hexaTian from "../../assets/hexatian.png";
import { hex } from "framer-motion";
import { PiHexagonThin } from "react-icons/pi";

const Hero = () => {
  return (
    <>
      <section>
        <div className="container grid grid-cols-1 md:grid-cols-2 min-h-[650px] relative ">
          {/* Brand */}
          <div className="flex flex-col justify-center py-14 md:py-0 gap-2">
            <h1 className=" text-4xl font-extrabold text-white"> Hi I'm</h1>
            <h1 className="text-primary text-6xl font-extrabold ">
              Christian Paul G. Moredo
            </h1>
            <p className="text-l mt-4 text-white">
              I’m a <span className="font-bold">Computer Engineer</span> who
              loves coding, tinkering with robots, and bringing IoT ideas to
              life.
            </p>
            <div className="flex justify-center gap-5 md:justify-start">
              <button className="py-2 px-3 mt-5 border-2 border-primary text-white rounded-xl font-semibold hover:bg-secondary hover:text-black transition-colors duration-300">
                Contact Me
              </button>
              <button className="py-2 px-3 mt-5 rounded-xl   text-white font-semibold flex items-center gap-2">
                Hire Me <BiSolidCloudDownload />
              </button>
            </div>
          </div>
          <div className="h-full flex justify-center items-center relative gap-10 ">
            <div className="absolute animate-pulse z-0">
              <PiHexagonThin className="md:h-[700px] w-auto text-primary blur-md animate-[spin_20s_linear_infinite]" />
            </div>

            <div className="relative z-10 w-[500px] h-[500px]">
              <img
                src={Tian}
                alt="Tian"
                className="w-full h- object-cover "
                style={{
                  clipPath:
                    "polygon(25% 5.77%, 75% 5.77%, 100% 50%, 75% 94.23%, 25% 94.23%, 0% 50%)",
                  border: "4px solid primary",
                  borderRadius: "8px",
                }}
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
