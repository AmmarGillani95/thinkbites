import Link from "next/link";

const footerLinks = [
  [
    { name: "About", target: "#" },
    { name: "Mission", target: "#" },
    { name: "Team", target: "#" },
    { name: "Advisors & Partners", target: "#" },
  ],
  [
    { name: "Resources", target: "#" },
    { name: "Contribute", target: "#" },
    { name: "Contact", target: "#" },
    { name: "Donate", target: "#" },
  ],
  [
    { name: "Projects", target: "#" },
    { name: "Newsletter", target: "#" },
    { name: "Podcast", target: "#" },
    { name: "Toolkit", target: "#" },
  ],
];

export default function Footer() {
  return (
    <footer className="bg-salmon dark:bg-darkNavy pt-12 pb-8 mt-20">
      <div className="max-w-5xl w-fill mx-auto px-8 flex flex-col text-navy dark:text-gray-400">
        <div className="flex md:flex-row flex-col  items-center">
          <div className="   md:w-72">
            <div className="flex flex-row items-center justify-center md:justify-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-16 h-auto fill-current dark:text-salmon text-navy "
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
              <h3 className="lowercase text-2xl font-semibold  leading-none tracking-widest dark:text-salmon ml-2 ">
                thinkbites
              </h3>
            </div>
            <div className="mt-4 font-medium max-w-sm text-center md:text-left">
              <p>Curated for the conscious soul.</p>
              <p>Personal, spiritual, and community development.</p>
            </div>
            <div className="flex flex-row space-x-4 mt-8  justify-center items-center md:justify-start md:items-start ">
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-auto fill-current text-navy dark:text-gray-400 dark:hover:text-salmon"
              >
                <title>Instragram icon</title>
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-auto fill-current text-navy dark:text-gray-400 dark:hover:text-salmon"
              >
                <title>Twitter icon</title>
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-auto fill-current text-navy dark:text-gray-400 dark:hover:text-salmon"
              >
                <title>Facebook icon</title>
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-6 h-auto fill-current text-navy dark:text-gray-400 dark:hover:text-salmon"
              >
                <title>YouTube icon</title>
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </div>
          </div>

          <div className="flex flex-row mt-12 md:mt-0 justify-between md:ml-auto md:w-96 w-full max-w-md">
            {footerLinks.map((links) => (
              <div
                className="flex flex-col space-y-3  w-24"
                key={links[0].name}
              >
                {links.map((link) => (
                  <Link href={link.target} key={link.name}>
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <span className="mt-12 text-sm">
          © 2021 Thinkbites. All rights reserved. See our{" "}
          <a className="font-medium" href="#">
            Privacy Policy
          </a>{" "}
          and{" "}
          <a className="font-medium" href="#">
            Copyright Policy
          </a>
          .
        </span>
      </div>
    </footer>
  );
}
