import ThinkbitesHeroSVG from "./ThinkbitesHeroSvg";

export default function Hero() {
  return (
    <section className="bg-navy dark:bg-darkNavy pt-8">
      <div className="flex max-w-5xl w-fill mx-auto  px-8 justify-between pt-6">
        <div className=" max-w-xl">
          <h2 className="  lg:text-3xl text-2xl  tracking-wider font-bold text-salmon ">
            Curated for the conscious soul.
          </h2>
          <span className=" lg:text-3xl text-2xl    tracking-wider  font-bold text-salmon">
            Personal, spiritual, and community development
          </span>
          <p className=" text-lg  font-normal tracking-normal text-white mt-5">
            Subscribe to our monthly newsletter for our latest work and content
            recommendations
          </p>
          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-5 block  max-w-xs"
          >
            <div className="flex  h-10  ">
              <div className="w-full border-salmon border-2  rounded-l-md ">
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder="Email"
                  className="w-full h-full bg-transparent text-gray-300 text-sm font-medium pl-2"
                />
              </div>
              <div className="    flex  justify-center    ">
                <button
                  type="sumbit"
                  className=" tracking-wider uppercase text-sm  font-semibold text-navy  w-20 bg-salmon rounded-r-md"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="-mt-8 mx-8 md:min-w-[230px] md:block hidden ">
          <ThinkbitesHeroSVG />
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
