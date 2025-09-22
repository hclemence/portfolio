"use client";
import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import MenuOverlay from "@/components/MenuOverlay";
import { Menu } from "lucide-react";
import { FileText } from "lucide-react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  const [navbarOpen, setNavbarOpen] = useState(false);

  const [show, setShow] = useState(true);
  const prevScrollY = useRef(0);

  const controlNavbar = () => {
    const currentScrollY = window.scrollY;

    // Show navbar if user is scrolling up or at the top of the page
    if (currentScrollY < 10 || currentScrollY < prevScrollY.current) {
      setShow(true);
    } else {
      setShow(false);
    }

    prevScrollY.current = currentScrollY;
  };

  useEffect(() => {
    const handleScroll = () => {
      controlNavbar();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
                  className="font-inter text-xl text-accent-foreground hover:text-accent-foreground/75 transition-colors tracking-tighter"
                >
                  Harry Clemence
                </Link>
              </li>
            ) : (
              <div />
            )}
            <div className="flex items-center sm:space-x-8">
              <li>
                <Link
                  href="https://www.linkedin.com/in/harry-clemence-2360ab229/"
                  target="_blank"
                  aria-label="LinkedIn"
                  className="flex font-inter text-foreground2 items-center hover:text-foreground3"
                >
                  <span>LinkedIn</span>
                </Link>
              </li>
              <li>
                <Link
                  href="https://github.com/hclemence"
                  target="_blank"
                  aria-label="Github"
                  className="flex font-inter text-foreground2 items-center hover:text-foreground3"
                >
                  <span>Github</span>
                </Link>
              </li>
              <li>
                <a
                  href="/portfolio/files/Harry-Clemence-CV.pdf"
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
          <div className="flex sm:hidden py-4">
            <button
              onClick={() => setNavbarOpen(true)}
              className="flex items-center text-foreground2 hover:text-foreground3 "
            >
              <Menu className="h-7 w-7" />
            </button>
          </div>
        </div>
      </nav>
      {navbarOpen && (
        <div
        onClick={() => setNavbarOpen(false)}
        className={`fixed top-0 left-0 h-screen w-screen bg-black z-40 transition-opacity duration-300 ${
          navbarOpen ? "opacity-60 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      />
      )}
      <MenuOverlay
        isOpen={navbarOpen}
        closeOverlayFn={() => setNavbarOpen(false)}
      />
    </div>
  );
};

export default Navbar;
