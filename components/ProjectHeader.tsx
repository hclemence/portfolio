import Link from "next/link";
import React from "react";
import { Globe } from "lucide-react";

const ProjectHeader = ({
  title,
  skills,
  link,
}: {
  title: string;
  skills: string[];
  link?: string;
}) => {
  return (
    <div className="relative container mx-auto pt-24 pb-16 lg:pt-36 lg:pb-24">
      <div className="space-y-6">
        <h1 className="font-editorial_new text-4xl sm:text-5xl lg:text-6xl xl:text-7xl text-foreground">
          {title}
        </h1>
        {link && (
          <Link
            href={link}
            target="_blank"
            className="w-max bg-accent-foreground items-center font-inter flex px-4 py-2.5 rounded-md text-sm tracking-tighter text-background transition-colors hover:bg-accent-foreground/75"
          >
            <Globe className="h-4 w-4 mr-2" />
            Go to Website
          </Link>
        )}
        <div className="pt-6">
          <h3 className="font-inter text-foreground2 font-medium text-base mb-4">
            Skills & Technologies
          </h3>
          <ul className="flex flex-wrap gap-2 md:gap-5 ">
            {skills.map((item, index) => (
              <li
                key={index}
                className="inline-flex items-center rounded-full px-3 py-1 text-xs md:text-sm text-foreground2 border-[1px] border-foreground2"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectHeader;
