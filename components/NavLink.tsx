import React from "react";
import Link from "next/link";
import { NavLinkType } from "@/types";

const NavLink = ({ path, title}: NavLinkType) => {
  return (
    <Link
      href={path}
      className="flex items-center py-2 pl-3 pr-4 text-base md:p-0 text-foreground2 hover:text-foreground transition-colors"
    >
      <span></span> {title}
    </Link>
  );
};

export default NavLink;
