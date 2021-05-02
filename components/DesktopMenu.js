import { Menu } from "@headlessui/react";
import Link from "next/link";

export default function DesktopMenu({ links }) {
  return (
    <>
      <div className="space-x-3 leading-none items-center flex">
        {links.map((link) => (
          <Menu as="div" className="relative">
            <Menu.Button className="uppercase text-white font-regular text-base tracking-wider flex items-center px-2 py-1">
              {link.name}
              {link.subMenu && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              )}
            </Menu.Button>
            {link.subMenu && (
              <Menu.Items className="absolute right-0 bg-white border  z-10 focus:outline-none rounded-md shadow-lg">
                {link.subMenu.map((link) => (
                  <Menu.Item>
                    {({ active }) => (
                      <Link href="#">
                        <a className="block whitespace-nowrap px-5 py-3">
                          {link.name}
                        </a>
                      </Link>
                    )}
                  </Menu.Item>
                ))}
              </Menu.Items>
            )}
          </Menu>
        ))}
      </div>
    </>
  );
}
