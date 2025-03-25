import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import content from "./blenheim.json";
import ProjectHeader from "@/app/components/ProjectHeader";

import React from 'react'

const BlenheimProject = () => {
  return (
    <div>
      <ProjectHeader title="Blenheim Staff Allocation Project" skills={content.skills} />
      <div className="gap-6 grid md:grid-cols-[2fr_5fr] grid-cols-none text-left mt-6 sm:mt-10 mx-8 md:mx-12 xl:mx-24 lg:mt-20 xl:mt-36">
        <h3 className="text-foreground text-xl">What?</h3>
        <div className="">
          <div>
            <Image
              src="/images/blenheim-map.png"
              width={350}
              height={350}
              alt="Map of visitor flow through main area of Blenheim"
              className="float-right"
            />
            {content.what.split("\n\n").map((paragraph, index) => (
              <p key={index} className="text-foreground2 mb-4">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
        <h3 className="text-foreground text-xl">Why?</h3>
        <p className="text-foreground2">{content.why}</p>
        <h3 className="text-foreground text-xl">How?</h3>
        <p className="text-foreground2">
          {content.how.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-foreground2 mb-4">
              {paragraph}
            </p>
          ))}
        </p>
        <h3 className="text-foreground text-xl">How?</h3>
        <p className="text-foreground2">
          {content.how.split("\n\n").map((paragraph, index) => (
            <p key={index} className="text-foreground2 mb-4">
              {paragraph}
            </p>
          ))}
        </p>
      </div>
    </div>
  );
}

export default BlenheimProject