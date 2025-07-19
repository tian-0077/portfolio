import React, { useState } from "react";
import { MdEngineering } from "react-icons/md";
import Tian from "../../assets/tian.jpg";
import hexaTian from "../../assets/hexatian.png";
import { hex } from "framer-motion";
import { PiHexagonThin } from "react-icons/pi";
import { MdDeveloperMode } from "react-icons/md";
import { VscDebugConsole } from "react-icons/vsc";
import { motion } from "framer-motion";
import { fadeIn } from "../framermotion";
import { AiFillLike } from "react-icons/ai";
import { AiFillDislike } from "react-icons/ai";

const aboutmeData = [
  {
    id: 1,
    title: "Computer Engineer",
    desc: "As a Computer Engineering graduate, I specialize in blending hardware and software—tinkering with microcontrollers, IoT systems, and building smart applications.",
    icon: <MdEngineering />,
    delay: 0.3,
  },
  {
    id: 2,
    title: "Passionate Learner",
    desc: "I’m always eager to explore new technologies, frameworks, and tools. Whether it's front-end development, embedded systems, or automation, I strive to improve every day.",
    icon: <MdDeveloperMode />,
    delay: 0.5,
  },
  {
    id: 3,
    title: "Problem Solver",
    desc: "I love tackling complex problems and turning ideas into innovative, real-world solutions through critical thinking and technical skills.",
    icon: <VscDebugConsole />,
    delay: 0.7,
  },
];

const AboutMe = () => {
  const [hasLiked, setHasLiked] = useState(false);
  return (
    <div className="">
      <motion.div
        className="container py-28 my-20 "
        initial="hidden"
        whileInView="show"
        variants={fadeIn("right", 0.3)}
        viewport={{ once: false, amount: 0.7 }}
      >
        <h1 className="text-6xl font-extrabold text-primary items-center justify-center text-center">
          About Me:
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center justify-center mt-20 justify-items-center">
          {aboutmeData.map((item) => (
            <div
              key={item.id}
              className="flex flex-col items-center gap-4 p-6 border rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 justify-items-center "
            >
              <div className="text-4xl text-primary">{item.icon}</div>
              <h2 className="text-xl font-semibold text-gray-200">{item.title}</h2>
              <p className="text-gray-400 text-center">{item.desc}</p>
              <button onClick={() => setHasLiked(!hasLiked)}>
                {hasLiked ? <AiFillLike /> : <AiFillDislike />}
              </button>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
