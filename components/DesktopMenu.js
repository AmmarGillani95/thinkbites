import { Menu } from "@headlessui/react";
import NextLink from "../components/NextLink";
import { motion } from "framer-motion";

export default function DesktopMenu({ links }) {
  return (
    <>
      <div className="space-x-3 leading-none items-center flex">
        {links.map(function (link) {
          if (!link.subMenu) {
            return (
              <NextLink
                href={link.target}
                key={link.name}
                className="relative uppercase text-navy dark:text-white font-regular text-base tracking-wider flex items-center px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-salmon hover:text-salmon transition-colors"
              >
                {link.name}
              </NextLink>
            );
          } else {
            return (
              <Menu as="div" className="relative " key={link.name}>
                {({ open }) => (
                  <>
                    <Menu.Button className="uppercase text-navy dark:text-white font-regular text-base tracking-wider flex items-center px-2 py-1 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-salmon hover:text-salmon transition-colors">
                      {link.name}
                      {link.subMenu && (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 ml-1"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      )}
                    </Menu.Button>

                    {open && (
                      <Menu.Items
                        as={motion.div}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{
                          duration: 0.5,
                          type: "spring",
                          stiffness: 260,
                          damping: 20,
                        }}
                        static
                        className="absolute right-0 dark:bg-navy bg-darkNavy py-2 px-2 z-10 focus:outline-none rounded-md overflow-hidden shadow-lg"
                      >
                        {link.subMenu.map((link) => (
                          <Menu.Item key={link.name}>
                            {({ active }) => (
                              <NextLink
                                href={link.target}
                                className={`${
                                  active ? "dark:bg-darkNavy bg-navy" : ""
                                } block whitespace-nowrap rounded-md w-full px-2 py-2 cursor-pointer text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-salmon transition-colors`}
                              >
                                {link.name}
                              </NextLink>
                            )}
                          </Menu.Item>
                        ))}
                      </Menu.Items>
                    )}
                  </>
                )}
              </Menu>
            );
          }
        })}
      </div>
    </>
  );
}

// <Link
// href={link.target}
// className={`${
//   active ? "dark:bg-darkNavy bg-navy" : ""
// } block whitespace-nowrap rounded-md w-full px-2 py-2 cursor-pointer`}
// >
// <div
//   className={`${
//     active ? "dark:bg-darkNavy bg-navy" : ""
//   } block whitespace-nowrap rounded-md w-full px-2 py-2 cursor-pointer`}
// >
//   <a className="text-white text-sm">{link.name}</a>
// </div>
// </Link>
