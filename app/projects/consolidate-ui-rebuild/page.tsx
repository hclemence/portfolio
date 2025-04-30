import React from "react";
import ProjectHeader from "@/components/ProjectHeader";
import content from "@/data/consolidate-ui-rebuild.json";

const ConsolidateProject = () => {
  return (
    <div className="py-32">
      <ProjectHeader
        title="Consolidate UI Re-Build"
        skills={content.skills}
        link="https://consolidate.org.uk"
      />
      <div className="gap-4 md:gap-10 grid md:grid-cols-[2fr_5fr] grid-cols-none text-left mt-6 sm:mt-10 lg:mt-20 xl:mt-36">
        <h3 className="text-foreground text-xl">What?</h3>
        <p className="text-foreground2 pb-4">{content.what}</p>
        <h3 className="text-foreground text-xl">Why?</h3>
        <p className="text-foreground2 pb-4">{content.why}</p>
        <h3 className="text-foreground text-xl">How?</h3>
        <p className="text-foreground2 pb-4">{content.how}</p>
        <h3 className="text-foreground text-xl">Outcome</h3>
        <p className="text-foreground2 pb-4">{content.outcome}</p>
      </div>
    </div>
  );
};

export default ConsolidateProject;
