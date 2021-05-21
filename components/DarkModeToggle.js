import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const initialColor = "#ffffff";
const finalColor = "#0C1C36";

const maskVariants = {
  sun: {
    cx: 12,
    cy: 4,
  },
  moon: {
    cx: 30,
    cy: 0,
  },
};

const centercircleVariants = {
  sun: {
    fill: initialColor,
    r: 9,
  },
  moon: {
    fill: finalColor,
    r: 5,
  },
};

const linesVariants = {
  sun: {
    stroke: initialColor,
    scale: 0.9,
    rotate: 0,
    opacity: 0,
  },
  moon: {
    stroke: finalColor,
    scale: 1,
    rotate: 45,
    opacity: 1,
  },
};

export default function DarkModeToggle() {
  const { theme, setTheme } = useTheme();
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const switchTheme = () => {
    if (isMounted) {
      setTheme(theme === "light" ? "dark" : "light");
    }
  };

  return (
    <div>
      {isMounted && (
        <button onClick={switchTheme} className="focus:outline-none">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="feather feather-sun"
            style={{ transform: "rotate(40deg)" }}
          >
            <mask id="mask">
              <rect x="0" y="0" width="100%" height="100%" fill="white" />
              <motion.circle
                cx="12"
                cy="4"
                r="9"
                variants={maskVariants}
                transition={{ type: "spring", duration: 0.8 }}
                initial={theme === "light" ? "sun" : "moon"}
                animate={theme === "light" ? "moon" : "sun"}
              />
            </mask>
            <motion.circle
              cx="12"
              cy="12"
              r="9"
              mask="url(#mask)"
              variants={centercircleVariants}
              initial={theme === "light" ? "sun" : "moon"}
              animate={theme === "light" ? "moon" : "sun"}
              transition={{ type: "spring", duration: 0.8 }}
            ></motion.circle>
            <motion.g
              variants={linesVariants}
              initial={theme === "light" ? "sun" : "moon"}
              animate={theme === "light" ? "moon" : "sun"}
              transition={{ type: "spring", duration: 0.8 }}
              stroke="currentColor"
            >
              <line x1="12" y1="1" x2="12" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="23"></line>
              <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
              <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
              <line x1="1" y1="12" x2="3" y2="12"></line>
              <line x1="21" y1="12" x2="23" y2="12"></line>
              <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
              <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
            </motion.g>
          </svg>
        </button>
      )}
    </div>
  );
}
