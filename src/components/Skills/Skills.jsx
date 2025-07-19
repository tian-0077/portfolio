import React from "react";
import { FaFlutter } from "react-icons/fa6";
import { BsRobot } from "react-icons/bs";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import {motion} from 'framer-motion'
import { fadeIn} from '../framermotion'


const SkillsData = [
  { id: 1, name: "Flutter", icon: <FaFlutter /> },
  { id: 2, name: "Robotics Project", icon: <BsRobot /> },
  { id: 3, name: "HTML", icon: <FaHtml5 /> },
  { id: 4, name: "CSS", icon: <FaCss3Alt /> },
  { id: 5, name: "Tailwwind CSS", icon: <RiTailwindCssFill /> },
];

const Skills = () => {
  return (
    <div>
      <div className="container py-24 items-center text-center  ">
        <h1 className="text-6xl font-extrabold text-primary">My Skills:</h1>
        <div className="flex flex-row gap-20 p-6  items-center justify-center mt-20 text-gray-200">
          {SkillsData.map((skill) => (
            <motion.div
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            whileHover={{ scale: 1.1 }}
            viewport={{ once: false, amount: 0.7 }}
              key={skill.id}
              className="flex flex-col items-center gap-4 p-6 border-2 border-primary rounded-lg shadow-l hover:shadow-xl hover:shadow-primary transition-shadow duration-300  "
            >
              <span className="text-8xl">{skill.icon}</span>
              <span className="text-l font-bold">{skill.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
