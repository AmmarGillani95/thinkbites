export default function Hero() {
  return (
    <section className="bg-navy pt-8">
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
        <div className="-mt-8 mx-8 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className=" w-full h-full fill-current text-salmon "
          >
            <g id="community">
              <path
                d="M12,24A12,12,0,1,1,24,12,12,12,0,0,1,12,24ZM12,1.07A10.93,10.93,0,1,0,22.93,12,10.94,10.94,0,0,0,12,1.07Z"
                transform="translate(0)"
              />
            </g>
            <g id="spiritual">
              <g>
                <path
                  d="M8.69,19.5a4.16,4.16,0,0,1-3-1.21A4.64,4.64,0,0,1,6,11.76l5.25-5.25h0l.5-.5a4.64,4.64,0,0,1,6.53-.3,4.64,4.64,0,0,1-.3,6.53L12.24,18A5.06,5.06,0,0,1,8.69,19.5ZM11.26,8,6.77,12.52a3.57,3.57,0,0,0-.31,5,3.57,3.57,0,0,0,5-.3l5.75-5.75a3.57,3.57,0,0,0,.31-5,3.57,3.57,0,0,0-5,.3L11.26,8Z"
                  transform="translate(0)"
                />
                <path
                  d="M15.31,19.5h-.25a5.07,5.07,0,0,1-3.3-1.5L6.62,12.84h0L6,12.24a4.64,4.64,0,0,1-.3-6.53,4.64,4.64,0,0,1,6.53.3l5.25,5.25h0l.5.5a4.64,4.64,0,0,1,.3,6.53A4.12,4.12,0,0,1,15.31,19.5ZM7.92,12.63l4.6,4.6a4,4,0,0,0,2.6,1.19,3.11,3.11,0,0,0,2.41-.88,3.57,3.57,0,0,0-.3-5L16,11.26h0L11.48,6.77a3.57,3.57,0,0,0-5-.31,3.57,3.57,0,0,0,.3,5l1.15,1.15Z"
                  transform="translate(0)"
                />
              </g>
            </g>
            <g id="personal">
              <circle cx="12" cy="12" r="1.82" />
            </g>
          </svg>
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
