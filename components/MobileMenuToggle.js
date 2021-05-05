import NextLink from "./NextLink";
import { motion } from "framer-motion";

const top = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  opened: {
    rotate: 45,
    translateY: 2,
  },
};
const center = {
  closed: {
    opacity: 1,
  },
  opened: {
    opacity: 0,
  },
};

const bottom = {
  closed: {
    rotate: 0,
    translateY: 0,
  },
  opened: {
    rotate: -45,
    translateY: -2,
  },
};

export default function MobileMenuToggle({ setOpen, isOpen }) {
  const variant = isOpen ? "opened" : "closed";

  const color = "#E6A490";
  const strokeWidth = "2";
  const width = "16";
  const height = "16";
  const unitHeight = 4;
  const unitWidth = (unitHeight * width) / height;

  const lineProps = {
    className: "text-salmon",
    stroke: "currentColor",
    strokeWidth: strokeWidth,
    vectorEffect: "non-scaling-stroke",
    initial: "closed",
    animate: variant,
    transition: { type: "spring", stiffness: 260, damping: 20 },
    strokeLinecap: "round",
  };
  return (
    <div>
      <button className="focus:outline-none z-30" onClick={setOpen()}>
        <motion.svg
          viewBox={`0 0 ${unitWidth} ${unitHeight}`}
          overflow="visible"
          preserveAspectRatio="none"
          width={width}
          height={height}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
          <motion.line
            x1="0"
            x2={unitWidth}
            y1="0"
            y2="0"
            variants={top}
            {...lineProps}
            style={{ originX: "2px", originY: "0px" }}
          />
          <motion.line
            x1="0"
            x2={unitWidth}
            y1="2"
            y2="2"
            variants={center}
            {...lineProps}
          />
          <motion.line
            x1="0"
            x2={unitWidth}
            y1="4"
            y2="4"
            variants={bottom}
            {...lineProps}
            style={{ originX: "2px", originY: "4px" }}
          />
        </motion.svg>
      </button>
    </div>
  );
}
