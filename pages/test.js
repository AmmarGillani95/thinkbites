import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.2,
    },
  },
  initial: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const divVariant = {
  initial: {
    x: "-100%",
    opacity: 0,
    transition: {
      duration: 0.7,
      easing: "ease",
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.7,
      easing: "easeInOut",
    },
  },
};

export default function Test() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div>
      <motion.div
        variants={stagger}
        initial="initial"
        animate={isOpen ? "animate" : "initial"}
        className="flex flex-col space-y-4 justify-center items-center max-w-2xl h-screen "
      >
        <div>
          <motion.div
            variants={divVariant}
            className="bg-salmon text-lg text-navy px-4 py-2"
          >
            One
          </motion.div>
          <motion.div
            variants={divVariant}
            className="bg-salmon text-lg text-navy px-4 py-2"
          >
            One
          </motion.div>
        </div>
        <motion.div
          variants={divVariant}
          className="bg-salmon text-lg text-navy px-4 py-2"
        >
          One
        </motion.div>
        <motion.div
          variants={divVariant}
          className="bg-salmon text-lg text-navy px-4 py-2"
        >
          One
        </motion.div>
        <motion.div
          variants={divVariant}
          className="bg-salmon text-lg text-navy px-4 py-2"
        >
          One
        </motion.div>
      </motion.div>
      <button
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        Start
      </button>
      <p>{isOpen ? "Open" : "Close"}</p>
    </div>
  );
}
