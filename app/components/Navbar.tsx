"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import MenuOverlay from "./MenuOverlay";
import { Menu } from "lucide-react";
import LinkedIn from "../svg/linkedin.svg";
import Github from "../svg/github.svg";
import { FileText } from "lucide-react";
import { usePathname } from "next/navigation";
import { NavLinkType } from "@/app/types";

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

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    setShow(window.scrollY < lastScrollY || window.scrollY < 10);
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, controlNavbar]);

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
                  className="font-inter font-semibold text-xl text-accent-foreground hover:text-accent-foreground/75 transition-colors tracking-tighter"
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
                    className="flex font-inter text-foreground2 items-center hover:text-foreground3"
                  >
                    <span className={link.desktopIconSize}>{link.icon}</span>
                  </Link>
                </li>
              ))}
              <li>
                <a
                  href="/files/Harry-Clemence-CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-inter bg-foreground2 hover:bg-foreground3 inline-flex items-center justify-center text-background px-4 py-2 rounded-md text-sm font-medium tracking-tight transition-colors"
                >
                  <FileText className="mr-2 h-4 w-4" />
                  <span>View CV</span>
                </a>
              </li>
            </div>
          </ul>
          <div className="flex sm:hidden">
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center mt-4 text-foreground2 hover:text-foreground3 "
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
      {navbarOpen ? (
        <MenuOverlay
          links={navLinks}
          closeOverlayFn={() => {
            setNavbarOpen(false);
          }}
        />
      ) : null}
    </div>
  );
};

export default Navbar;
