import React from "react";
import NavLink from "@/components/NavLink";
import { usePathname } from "next/navigation";
import { X, Home } from "lucide-react";

interface MenuOverlayProps {
  closeOverlayFn: () => void;
}

const MenuOverlay = ({ closeOverlayFn }: MenuOverlayProps) => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <div className="shadow-lg z-50 bg-background top-0 left-0 h-screen w-[70%] fixed flex ">
      <button
        onClick={closeOverlayFn}
        className="absolute top-4 right-4 flex items-center text-foreground2 hover:text-foreground "
      >
        <X className="h-7 w-7" />
      </button>
      <ul className="pt-16 px-4 gap-4 flex flex-col w-full ">
        {pathname != "/" && (
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
            href="/files/Harry-Clemence-CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center py-2 pl-3 pr-4 text-base md:p-0 text-foreground2 hover:text-foreground"
          >
            <span>View CV</span>
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default MenuOverlay;
