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
    <footer className="bg-salmon dark:bg-darkNavy py-8 mt-20">
      <div>
        <div>
          <h3>thinkbites</h3>
          <p>Curated for the conscious soul.</p>
          <p>Personal, spiritual, and community development.</p>
        </div>

        <div>
          {footerLinks.map((links) => (
            <div key={links[0].name}>
              {links.map((link) => (
                <Link href={link.target} key={link.target}>
                  {link.name}
                </Link>
              ))}
            </div>
          ))}
        </div>
      </div>
      <span>
        © 2021 Thinkbites. All rights reserved. See our Privacy Policy and
        Copyright Policy.
      </span>
    </footer>
  );
}
