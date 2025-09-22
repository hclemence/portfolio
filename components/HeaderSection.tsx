import React from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const HeaderSection = () => {
  return (
    <section className="w-full">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-2 md:items-center md:gap-12">
          {/* Content */}
          <div className="flex flex-col space-y-6">
            {/* Name */}
            <h1 className="text-5xl font-editorial_new tracking-tight text-[#2D2A26] sm:text-6xl md:text-7xl">
              Harry
              <br />
              Clemence
            </h1>

            {/* Standalone skill bubbles */}
            <div className="flex flex-wrap gap-2 py-1">
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">
                Full-stack Developer
              </span>
              <span className="inline-flex items-center rounded-full bg-accent px-3 py-1 text-sm text-accent-foreground">
                Data Scientist
              </span>
            </div>

            {/* Bio text */}
            <div className="space-y-4 pt-2">
              <p className="text-[#4A4640]">
                Hi, I&apos;m based in Birmingham, UK. With five years of experience
                in <span className="font-medium text-foreground">React</span>{" "}
                and{" "}
                <span className="font-medium text-foreground">JavaScript</span>,
                I love building creative solutions that make a difference.
              </p>

              <p className="text-[#4A4640]">
                I&apos;m currently looking for work where I can apply my skills to{" "}
                <span className="font-medium text-foreground">meaningful</span>{" "}
                projects.{" "}
                <span className="font-medium ">Feel free to contact me!</span>
              </p>
            </div>
          </div>

          {/* Image */}
          <div className="flex justify-center md:justify-end">
            <div className="relative h-64 w-64 overflow-hidden rounded-full md:h-80 md:w-80">
              <Image
                src="/portfolio/images/profile.jpeg"
                alt="Harry Clemence"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Row */}
      <div className="flex justify-center items-center pt-16">
        <div className="flex flex-col items-center mt-2">
          <ChevronDown className="h-5 w-5 animate-bounce text-accent-foreground" />
          <ChevronDown className="h-5 w-5 -mt-3 animate-bounce text-accent-foreground opacity-70" />
        </div>
        <span className="text-sm font-medium text-[#4A4640] ml-2">
          Scroll down to view projects
        </span>
      </div>
    </section>
  );
};

export default HeaderSection;
