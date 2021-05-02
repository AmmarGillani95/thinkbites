import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";
import DesktopMenu from "./DesktopMenu";

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

  return (
    <div className="bg-navy">
      <nav className=" flex justify-between  py-7 items-center max-w-5xl w-fill mx-auto  px-8">
        <Link href="/">
          <a className="lowercase text-3xl font-semibold  leading-none tracking-widest text-salmon">
            Thinkbites
          </a>
        </Link>
        <div className="space-x-4 leading-none  flex items-center ">
          <div className="lg:flex hidden ">
            <DesktopMenu links={Navlinks} />
          </div>

          <div className="lg:hidden  flex items-center">
            <button>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-salmon"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <DarkModeToggle />
        </div>
      </nav>
    </div>
  );
}
