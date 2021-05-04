import NextLink from "./NextLink";
import { useRouter } from "next/router";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import DesktopMenu from "./DesktopMenu";
import MobileMenu from "./MobileMenu";

const Navlinks = [
  { name: "articles", target: "#" },
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

  return (
    <div className="dark:bg-darkNavy bg-navy">
      <nav className="flex justify-between  py-7 items-center max-w-5xl w-fill mx-auto  px-8 bg">
        <NextLink
          href="/"
          className="lowercase text-3xl font-semibold  leading-none tracking-widest text-salmon"
        >
          Thinkbites
        </NextLink>
        <div className="space-x-4 leading-none  flex items-center ">
          <div className="lg:flex hidden ">
            <DesktopMenu links={Navlinks} />
          </div>

          <div className="lg:hidden  flex items-center">
            <MobileMenu
              links={Navlinks}
              setOpen={() => setOpen}
              isOpen={isOpen}
            />
          </div>
          <DarkModeToggle />
        </div>
      </nav>
    </div>
  );
}
