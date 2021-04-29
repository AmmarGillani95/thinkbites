import Link from "next/link";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

const Navlinks = [
  { name: "articles", target: "/" },
  { name: "projects", target: "/" },
  { name: "contribute", target: "/" },
  { name: "about", target: "/" },
];

export default function Navbar() {
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
    <div className="bg-navy">
      <nav className=" flex justify-between  py-7 items-center max-w-5xl w-fill mx-auto  px-8 ">
        <Link href="/">
          <a className="lowercase text-3xl font-semibold  leading-none tracking-widest text-salmon">
            Thinkbites
          </a>
        </Link>
        <div className="space-x-5 leading-none flex items-center">
          {Navlinks.map((link) => (
            <Link href={link.target} key={link.name}>
              <a className="uppercase text-white font-regular text-base tracking-wider">
                {link.name}
              </a>
            </Link>
          ))}
          <button
            aria-label="Toggle Dark Mode"
            type="button"
            className="focus:outline-none"
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          >
            {isMounted && (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                stroke="currentColor"
                className="dark:text-salmon text-gray-200  h-5 w-5"
              >
                {theme === "light" ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                  />
                )}
              </svg>
            )}
          </button>
        </div>
      </nav>
    </div>
  );
}
