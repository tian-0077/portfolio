import { motion, AnimatePresence } from "framer-motion";
import React from "react";


const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 ,y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 , y: -100 }}
          className="absolute top-20 left-0 w-full h-screen z-20"
        >
            <div className="text-xl bg-primary font-semibold text-white rounded-3xl py-10 m-6 ">
                <ul className="flex flex-col items-center justify-center gap-10">
                   <li>Home</li>
                   <li>Skills</li>
                   <li>Projects</li>
                   <li>About</li>
                   <li>Contacts</li>
                </ul>
            </div>
          
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
