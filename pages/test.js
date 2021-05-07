import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const top = {
  closed: {
    rotate: 0,
    translateY: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  opened: {
    rotate: 45,
    translateY: 7,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};
const center = {
  closed: {
    opacity: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
  opened: {
    opacity: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};

const bottom = {
  closed: {
    rotate: 0,
    translateY: 0,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },

  opened: {
    rotate: -45,
    translateY: -7,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};
export default function Test() {
  const [isOpen, setisOpen] = useState(false);
  return (
    <div className="flex flex-col max-w-4xl px-8 justify-center items-center h-screen">
      <button
        onClick={() => {
          setisOpen(!isOpen);
        }}
      >
        <motion.svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 16"
          initial="closed"
          animate={isOpen ? "opened" : "closed"}
          className="text-salmon dark:text-salmon  fill-current w-6 h-6 "
        >
          <motion.rect variants={top} width="24" height="2" rx="1" />
          <motion.rect variants={center} y="7" width="24" height="2" rx="1" />
          <motion.rect variants={bottom} y="14" width="24" height="2" rx="1" />
        </motion.svg>
      </button>
    </div>
  );
}
