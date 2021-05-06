import NextLink from "./NextLink";
import React from "react";
import { motion } from "framer-motion";

const stagger = {
  initial: {
    transition: {
      staggerChildren: 0.025,
    },
  },
  animate: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const overlayVariant = {
  initial: {
    x: "-100%",

    transition: {
      duration: 0.6,

      easing: "easeOut",
    },
  },
  animate: {
    x: 0,

    transition: {
      duration: 0.4,
      easing: "easeIn",
    },
  },
};

const linksVariant = {
  initial: {
    x: "-30%",
    opacity: 0,
    transition: {
      duration: 0.3,
      easing: "easeIn",
    },
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      easing: "easeIn",
    },
  },
};

export default function MobileMenu({ isOpen, links }) {
  return (
    <>
      <motion.div
        initial="initial"
        animate={isOpen ? "animate" : "initial"}
        variants={overlayVariant}
        className="w-screen h-screen fixed top-0 left-0 bg-salmon dark:bg-navy inset-0 z-40"
      ></motion.div>
      <div className="w-screen h-screen fixed top-0 left-0  inset-0 z-40">
        <motion.div
          initial="initial"
          animate={isOpen ? "animate" : "initial"}
          variants={stagger}
          className="mt-24 flex flex-col max-w-4xl w-fill mx-auto  px-14 z-50"
        >
          {links.map((link) => (
            <React.Fragment key={link.name}>
              <motion.div
                variants={linksVariant}
                key={link.name}
                className=" mt-5"
              >
                <NextLink
                  className="dark:text-white text-navy font-regular capitalize text-2xl tracking-wider  px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-salmon dark:hover:text-salmon hover:text-black transition-colors"
                  href={link.target}
                >
                  {link.name}
                </NextLink>
              </motion.div>
              {link.subMenu &&
                link.subMenu.map((link) => (
                  <motion.div
                    variants={linksVariant}
                    key={link.name}
                    className="mt-2"
                  >
                    <NextLink
                      href={link.target}
                      className="dark:text-white text-navy font-regular capitalize text-md tracking-wider ml-8 px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-salmon dark:hover:text-salmon hover:text-black transition-colors"
                    >
                      {link.name}
                    </NextLink>
                  </motion.div>
                ))}
            </React.Fragment>
          ))}
        </motion.div>
      </div>
    </>
  );
}
