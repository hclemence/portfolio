import React from "react";
import NavLink from "./NavLink";
import { usePathname } from "next/navigation";
import { X, Home } from "lucide-react";

interface NavLinkType {
  title: string;
  path: string;
  icon?: JSX.Element;
  desktopIconSize?: "h-7 w-7",
  mobileIconSize?: "h-6 w-6",
}

interface MenuOverlayProps {
  links: NavLinkType[];
  closeOverlayFn: () => void;
}

const MenuOverlay = ({ links, closeOverlayFn }: MenuOverlayProps) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="shadow-lg z-50 bg-background top-0 left-0 h-screen w-[80%] fixed flex ">
      <button
        onClick={closeOverlayFn}
        className="absolute top-4 right-4 flex items-center px-8 py-4 text-foreground2 hover:text-foreground "
      >
        <X className="h-7 w-7" />
      </button>
      <ul className="pt-16 px-7 gap-4 flex flex-col ">
        {pathname != "/" && (
          <li>
            <NavLink path="/" title="Home" icon={<Home />} mobileIconSize="[&_svg]:h-7 [&_svg]:w-7"/>
          </li>
        )}
        {links.map((link, index) => (
          <li key={index}>
            <NavLink path={link.path} title={link.title} icon={link.icon} mobileIconSize={link.mobileIconSize} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;
