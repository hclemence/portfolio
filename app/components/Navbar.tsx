"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import NavLink from "./NavLink";
import MenuOverlay from "./MenuOverlay";
import { Menu } from "lucide-react";
import LinkedIn from "../svg/linkedin.svg";
import Github from "../svg/github.svg";
import { Download } from "lucide-react";
import { usePathname } from "next/navigation";

interface NavLinkType {
  title: string;
  path: string;
  icon?: JSX.Element;
  desktopIconSize?: string;
  mobileIconSize?: string;
}

const navLinks: NavLinkType[] = [
  {
    title: "LinkedIn",
    path: "https://www.linkedin.com/in/harry-clemence-2360ab229/", // External URL
    icon: <LinkedIn className="inline " />, // LinkedIn icon
    desktopIconSize: "[&_svg]:h-7 [&_svg]:w-7",
    mobileIconSize: "[&_svg]:h-6 [&_svg]:w-6",
  },
  {
    title: "Github",
    path: "https://github.com/hclemence", // External URL
    icon: <Github className="inline" />, // GitHub icon
    desktopIconSize: "[&_svg]:h-8 [&_svg]:w-8",
    mobileIconSize: "[&_svg]:h-7 [&_svg]:w-7",
  },
];

type Props = {};

const Navbar = (props: Props) => {
  const pathname = usePathname();
  console.log(pathname);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    setShow(window.scrollY < lastScrollY);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);
  return (
    <div>
      <nav
        className={`${
          !show ? "-translate-y-full" : "translate-y-0"
        } transition-transform duration-300 fixed top-0 bg-background flex w-full z-10`}
      >
        <div className="flex px-4 sm:px-6 lg:px-8 w-full">
          <ul className="hidden sm:flex p-4 justify-between items-center w-full">
            {pathname != "/" ? (
              <li>
                <Link
                  href="/"
                  aria-label="home"
                  className="font-inter text-xl text-foreground tracking-tighter"
                >
                  Harry Clemence
                </Link>
              </li>
            ) : (
              <div />
            )}
            <div className="flex items-center sm:space-x-8">
              {navLinks.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.path}
                    target="_blank"
                    aria-label={link.title}
                    className="flex font-inter text-foreground2 items-center hover:text-foreground"
                  >
                    <span className={link.desktopIconSize} >{link.icon}</span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/files/Harry-Clemence-CV.pdf"
                  download
                  className="font-inter bg-foreground2 hover:bg-foreground inline-flex text-background items-center tracking-tighter rounded-3xl text-base px-4 py-1"
                >
                  CV <Download className=" ml-3 h-[18px] w-[18px] inline" />{" "}
                </a>
              </li>
            </div>
          </ul>
          <div className="flex sm:hidden">
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center p-4 text-foreground2 hover:text-foreground "
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </nav>
      {navbarOpen && (
        <div
          onClick={() => setNavbarOpen(false)} // Close the menu when clicking the background
          className="fixed top-0 left-0 h-screen w-screen bg-black opacity-80 z-40"
        />
      )}
      {navbarOpen ? <MenuOverlay links={navLinks} closeOverlayFn={()=>{setNavbarOpen(false)}} /> : null}
    </div>
  );
};

export default Navbar;
