import React from "react";
import Link from "next/link";

interface NavLinkType {
  title: string;
  path: string;
  icon?: JSX.Element;
  mobileIconSize?: string;
}

const NavLink = ({ path, title, icon, mobileIconSize }: NavLinkType) => {
  return (
    <Link
      href={path}
      className="flex items-center py-2 pl-3 pr-4 text-xl  md:p-0 text-foreground2 hover:text-foreground"
    >
      <span className={mobileIconSize + " mr-3"}>{icon}</span> {title} 
    </Link>
  );
};

export default NavLink;
