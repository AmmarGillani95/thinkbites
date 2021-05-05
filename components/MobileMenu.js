import NextLink from "./NextLink";
import { motion } from "framer-motion";

export default function MobileMenu({ isOpen, links }) {
  const variant = isOpen ? "opened" : "closed";
  const overlay = {
    closed: {
      height: "100vh",
      width: 0,
      zIndex: 40,
      opacity: 0,
    },
    opened: {
      height: "100vh",
      width: "100vw",
      zIndex: 40,
      opacity: 100,
    },
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const fadeinUp = {
    initial: {
      y: 60,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div
      animate={variant}
      variants={overlay}
      initial={{ opacity: 0 }}
      transition={{ type: "ease", duration: 0.4, staggerChildren: 0.5 }}
      className="w-full h-full absolute top-0 left-0 bg-salmon dark:bg-navy inset-0 z-40"
      //   className={`${
      //     isOpen ? "fixed overflow-hidden h-screen w-full" : "h-0"
      //   }  inset-0 z-40 dark:bg-navy bg-salmon block lg:hidden`}
    >
      {isOpen && (
        <motion.div
          variants={stagger}
          className="mt-24 flex flex-col max-w-5xl w-fill mx-auto  px-8 space-y-6"
        >
          {links.map((link) => (
            <motion.div
              variants={stagger}
              animate="animate"
              className="flex flex-col"
            >
              <motion.div
                variants={fadeinUp}
                initial="initial"
                animate="animate"
              >
                <NextLink
                  href={link.target}
                  key={link.name}
                  className="dark:text-white text-navy font-regular capitalize text-2xl tracking-wider  px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-salmon dark:hover:text-salmon hover:text-black transition-colors"
                >
                  {link.name}
                </NextLink>
              </motion.div>
              {link.subMenu &&
                link.subMenu.map((link) => (
                  <div>
                    <NextLink
                      href={link.target}
                      key={link.name}
                      className="dark:text-white text-navy font-regular capitalize text-md tracking-wider ml-8 px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-salmon dark:hover:text-salmon hover:text-black transition-colors"
                    >
                      {link.name}
                    </NextLink>
                  </div>
                ))}
            </motion.div>
          ))}
        </motion.div>
      )}
    </motion.div>
  );
}
