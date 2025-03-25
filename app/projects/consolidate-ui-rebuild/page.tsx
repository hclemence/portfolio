import React from "react";
import ProjectHeader from "@/app/components/ProjectHeader";
import content from "./consolidate.json";

const ConsolidateProject = () => {
  return (
    <div>
      <ProjectHeader
        title="Consolidate UI Re-Build"
        skills={content.skills}
      />
      <div className="gap-6 grid md:grid-cols-[2fr_5fr] grid-cols-none text-left mt-6 sm:mt-10 mx-8 md:mx-12 xl:mx-24 lg:mt-20 xl:mt-36"></div>
    </div>
  );
};

export default ConsolidateProject;
