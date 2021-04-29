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
        <div className="flex flex-row justify-between">
          <div>
            <div className="flex flex-row items-center">
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
              <h3 className="lowercase text-2xl font-semibold  leading-none tracking-widest dark:text-salmon ml-2">
                thinkbites
              </h3>
            </div>
            <div className="mt-4 font-medium max-w-sm">
              <p>Curated for the conscious soul.</p>
              <p>Personal, spiritual, and community development.</p>
            </div>
          </div>

          <div className="flex flex-row mt-6 space-x-16">
            {footerLinks.map((links) => (
              <div className="flex flex-col space-y-3" key={links[0].name}>
                {links.map((link) => (
                  <Link href={link.target} key={link.target}>
                    {link.name}
                  </Link>
                ))}
              </div>
            ))}
          </div>
        </div>
        <span className="mt-12 text-sm">
          © 2021 Thinkbites. All rights reserved. See our Privacy Policy and
          Copyright Policy.
        </span>
      </div>
    </footer>
  );
}
