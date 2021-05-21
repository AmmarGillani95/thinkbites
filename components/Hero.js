import { useState, useEffect } from "react";
import ThinkbitesHeroSVG from "./ThinkbitesHeroSVG";

export default function Hero() {
  const segments = ["personal", "spiritual", "community"];
  const [highlight, setHighlight] = useState("");

  const highlighter = () => {
    if (highlight === "" || highlight === "community") {
      setHighlight(segments[0]);
    } else {
      setHighlight(segments[segments.indexOf(highlight) + 1]);
    }
  };

  useEffect(() => {
    setTimeout(highlighter, 2000);
  }, [highlight]);

  return (
    <section className="bg-salmon dark:bg-darkNavy md:pt-8">
      <div className="relative flex max-w-5xl w-fill mx-auto  px-8 justify-between pt-6">
        <div className=" md:max-w-xl ">
          <h2 className="  lg:text-3xl md:text-2xl  text-3xl tracking-wider font-bold text-navy dark:text-salmon ">
            Curated for the conscious soul.
          </h2>
          <span className=" lg:text-3xl md:text-2xl text-3xl    tracking-wider  font-bold text-white dark:text-[#46658c]">
            <span
              className={`${
                highlight === "personal"
                  ? "md:dark:text-salmon  md:text-navy"
                  : ""
              } transition-colors duration-1000 ease-in-out`}
            >
              Personal
            </span>
            ,{" "}
            <span
              className={`${
                highlight === "spiritual"
                  ? "md:dark:text-salmon md:text-navy"
                  : ""
              } transition-colors duration-1000 ease-in-out`}
            >
              Spiritual
            </span>
            , and{" "}
            <span
              className={`${
                highlight === "community"
                  ? "md:dark:text-salmon md:text-navy"
                  : ""
              } transition-colors duration-1000 ease-in-out`}
            >
              Community
            </span>{" "}
            development
          </span>
          <p className=" text-lg  font-normal tracking-normal text-navy dark:text-white mt-5">
            Subscribe to our monthly newsletter for our latest work and content
            recommendations
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 block  max-w-xs"
          >
            <div className="flex  h-10  ">
              <div className="w-full border-2 border-navy  dark:border-salmon    rounded-l-md ">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full h-full bg-transparent placeholder-navy text-navy dark:text-gray-300 dark:placeholder-gray-300 text-sm font-medium pl-2"
                />
              </div>
              <div className="    flex  justify-center    ">
                <button
                  type="sumbit"
                  className=" tracking-wider uppercase text-sm  font-semibold text-salmon dark:text-navy  w-20 dark:bg-salmon bg-navy rounded-r-md"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="-mt-8 mx-8 md:min-w-[230px] hidden md:block">
          <ThinkbitesHeroSVG highlight={highlight} />
        </div>
      </div>
      <div className="w-full  relative h-24">
        <svg
          preserveAspectRatio="none"
          width="1441"
          height="82"
          viewBox="0 0 1441 82"
          className="fill-current text-white w-full dark:text-navy absolute -bottom-2 left-0 right-0"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M310.5 52.5C112.794 47.485 0 0.337891 0 0.337891V81.5001H1441V29.5001C1441 29.5001 1319.71 0.337849 1122.5 0.337849C925.295 0.337849 508.206 57.515 310.5 52.5Z" />
        </svg>
      </div>
    </section>
  );
}
