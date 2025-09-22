"use client";
import React from "react";
import NavLink from "@/components/NavLink";
import { usePathname } from "next/navigation";
import { X, Home } from "lucide-react";

interface MenuOverlayProps {
  isOpen: boolean;
  closeOverlayFn: () => void;
}

const MenuOverlay = ({ isOpen, closeOverlayFn }: MenuOverlayProps) => {
  const pathname = usePathname();

  return (
    <div
      className={`fixed top-0 left-0 z-50 h-screen w-[70%] bg-background shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <button
        onClick={closeOverlayFn}
        className="absolute top-4 right-4 flex items-center text-foreground2 hover:text-foreground"
      >
        <X className="h-7 w-7" />
      </button>

      <ul className="pt-16 px-4 gap-4 flex flex-col w-full">
        {pathname !== "/" && (
          <li>
            <NavLink
              path="/"
              title="Home"
              icon={<Home />}
              mobileIconSize="[&_svg]:h-7 [&_svg]:w-7"
            />
          </li>
        )}
        <li>
          <NavLink
            path="https://www.linkedin.com/in/harry-clemence-2360ab229/"
            title="LinkedIn"
          />
        </li>
        <li>
          <NavLink path="https://github.com/hclemence" title="Github" />
        </li>
        <li>
          <a
            href="/portfolio/files/Harry-Clemence-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-2 pl-3 pr-4 text-base md:p-0 text-foreground2 hover:text-foreground"
          >
            <span>View CV</span>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuOverlay;
