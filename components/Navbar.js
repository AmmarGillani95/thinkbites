import NextLink from "./NextLink";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import DarkModeToggle from "./DarkModeToggle";
import DesktopMenu from "./DesktopMenu";
import MobileMenuToggle from "./MobileMenuToggle";
import MobileMenu from "./MobileMenu";
import ThinkbitesHeroSVG from "./ThinkbitesHeroSVG";

const Navlinks = [
  { name: "articles", target: "/articles" },
  {
    name: "projects",
    target: "#",
    subMenu: [{ name: "Muslim Notion", target: "#" }],
  },
  { name: "contribute", target: "#" },
  {
    name: "about",
    target: "#",
    subMenu: [
      { name: "Mission", target: "#" },
      { name: "Team", target: "#" },
      { name: "Advisors & Partners", target: "#" },
      { name: "Donate", target: "#" },
      { name: "Join the Team", target: "#" },
    ],
  },
];

export default function Navbar() {
  const [isOpen, setisOpen] = useState(false);

  const setOpen = () => {
    setisOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <div className="dark:bg-darkNavy bg-salmon">
      <nav className="flex justify-between  py-4 md:py-5 items-center max-w-5xl w-fill mx-auto  px-8 bg">
        <NextLink
          href="/"
          className="flex items-center sm:space-x-3 md:space-x-4 lg:space-x-0"
        >
          <div className="w-16  md:hidden">
            <ThinkbitesHeroSVG color="dark:text-salmon text-navy" />
          </div>
          <p className="hidden sm:block lowercase  text-3xl font-semibold  leading-none tracking-widest text-navy dark:text-salmon">
            Thinkbites
          </p>
        </NextLink>
        <div className="space-x-4 leading-none  flex items-center">
          <div className="lg:flex hidden ">
            <DesktopMenu links={Navlinks} />
          </div>
          <div className="fixed lg:static md:top-8 top-8 right-6 z-50">
            <div className="flex items-center space-x-4 lg:space-x-0  py-1 px-2 rounded-md bg-salmon  dark:bg-darkNavy  lg:py-0 lg:px-0 lg:bg-transparent ">
              <div className="lg:hidden  flex items-center">
                <MobileMenuToggle setOpen={() => setOpen} isOpen={isOpen} />
              </div>
              <DarkModeToggle />
            </div>
          </div>
        </div>
        <div className="lg:hidden">
          <MobileMenu links={Navlinks} isOpen={isOpen} />
        </div>
      </nav>
    </div>
  );
}
