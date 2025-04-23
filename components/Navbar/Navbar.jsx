"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoClose } from "react-icons/io5";
import Image from "next/image";

const navItems = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "Projects",
    href: "/#projects",
  },
  {
    label: "Contacts",
    href: "/#contact",
  },
];

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <nav className="md:fixed w-full z-10 bg-primary border-border h-16 overflow-hidden border-b">
      <div className="mx-auto flex h-full w-dvw max-w-[1200px] items-center justify-between px-4 py-1">
        {isVisible ? (
          <div className="animate-fade-in transition-all duration-300 text-primary-content md:hidden">
            Menu
          </div>
        ) : (
          <Link href="/">
            <div className="animate-fade-up text-primary-content relative flex items-center gap-3 transition-all duration-300 md:static">
              <Image
                src="/images/SKL.png"
                alt="Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
          </Link>
        )}

        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {isVisible ? (
              <IoClose className="text-primary-content" />
            ) : (
              <RxHamburgerMenu className="text-primary-content" />
            )}
          </button>
        </div>

        <ul
          className={`${
            isVisible ? "flex" : "hidden"
          } animate-fade-in bg-primary absolute top-16 left-0 z-20 h-dvh w-dvw md:flex md:flex-row md:justify-end flex-col md:static md:top-0 md:h-full md:w-[72%] lg:w-[70%]`}
        >
          {navItems.map(({ label, href }) => (
            <li
              key={href}
              onClick={() => setIsVisible(false)}
              className="border-border flex items-center border-b px-4 text-2xl md:border-y-0 md:border-e md:text-base md:first:border-s lg:px-8"
            >
              <Link
                href={href}
                className={`text-primary-content hover:text-neutral w-full py-7 transition-all duration-150 md:py-0`}
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
