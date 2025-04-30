import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import clsx from "clsx";

interface ProjectCardProps {
  imageSrc?: string;
  title: string;
  description: string;
  buttonText: string;
  link: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  imageSrc,
  title,
  description,
  buttonText = "Read more",
  link = "",
}) => {
  return (
    <Link
      href={link}
      className="relative flex flex-col bg-background2 p-5 lg:p-7 xl:p-10 rounded-2xl w-[300px] h-[330px] lg:h-[440px] lg:w-[400px] xl:w-[500px] xl:h-[550px] overflow-hidden"
    >
      {imageSrc && (
        <Image
          fill={true}
          src={imageSrc}
          alt="Blenheim Palace with flowers in the foreground"
          className="object-cover"
        />
      )}
      <div className="relative max-w-80 flex flex-col start">
        <h2
          className={clsx(
            "font-inter text-lg lg:text-2xl tracking-normal leading-6 ",
            imageSrc ? "text-background" : "text-foreground"
          )}
        >
          {title}
        </h2>
        <p
          className={clsx(
            "lg:mt-2 mt-1 font-inter text-sm lg:text-base",
            imageSrc ? "text-background" : "text-foreground2"
          )}
        >
          {description}
        </p>
        <div
          className={clsx(
            "w-max bg-transparent border-[1px] mt-2 lg:mt-4 items-center font-inter flex px-3 py-1 rounded-2xl text-xs lg:text-sm tracking-tighter",
            imageSrc
              ? "border-background text-background"
              : "border-foreground2 text-foreground2"
          )}
        >
          {buttonText}
          <ArrowRight height={14} />
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
