import React from "react";
import Image from "next/image";
import ProjectHeader from "@/components/ProjectHeader";
import content from "@/data/blenheim-digital-twin.json";

const BlenheimDigitalTwinProject = () => {
  return (
    <div className="py-32">
      <ProjectHeader
        title="Blenheim Digital Twin Project with the University of Oxford"
        skills={content.skills}
      />
      <div className="gap-4 md:gap-10 grid md:grid-cols-[2fr_5fr] grid-cols-none text-left mt-6 sm:mt-10 lg:mt-20 xl:mt-36 mb-10 p-6">
        <h3 className="text-foreground text-xl">Overview</h3>
        <p className="text-foreground2 pb-4">{content.what}</p>
        <h3 className="text-foreground text-xl">Purpose</h3>
        <p className="text-foreground2 pb-4">{content.why}</p>
      </div>

      {/* UI Design section moved outside the xgrid */}
      <div className="bg-background2 rounded-lg p-6 flex flex-col gap-10 mb-10">
        <div className="flex flex-col gap-6">
          <h3 className="text-foreground text-xl">UI Design</h3>
          <Image
            src="/portfolio/images/BlenheimTwinSurvey.png"
            alt="Blenheim Palace Digital Twin"
            className="w-full h-auto rounded-lg"
            width={1200}
            height={700}
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
          <p className="text-foreground2">
            The interface prioritises clarity and functionality for conservation
            professionals, featuring an intuitive 3D navigation system with
            contextual data overlays and streamlined workflows for incident
            reporting and analysis.
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Card 1 */}
          <div className="overflow-hidden bg-background2 rounded-lg flex flex-col gap-4">
            <h4 className="text-xl">3D Geospatial Visualisation</h4>
            <p className="text-foreground2">
              CesiumJS provides a 3D geospatial environment where the Palace
              model is rendered, allowing users to navigate and interact with
              the digital twin. Beyond basic exploration, users can isolate
              individual elements of the model, such as walls, roofs or
              structural components, to study metadata or linked data from
              associated reports. This capability allows reports, annotations or
              maintenance records to be attached directly to specific features,
              transforming the model into an interactive hub for both
              visualisation and data management.
            </p>
          </div>
          {/* Card 2 */}
          <div className="bg-background2 overflow-hidden rounded-lg flex flex-col gap-4">
            <h4 className="text-xl">Survey Reporting Workflow</h4>
            <p className="text-foreground2">
              I developed a form component that is populated by tables from the
              digital twin&#39;s database. This allows administrators to customise
              form fields and even create new survey forms as needed. On
              submission of a survey, the data is stored in the database and
              linked to the relevant part of the 3D model. This enables
              conservation professionals to log issues directly within the
              context of the digital twin, streamlining the reporting process
              and ensuring that all relevant information is easily accessible
              for future reference.
            </p>
          </div>
        </div>
        <div className="bg-background2 overflow-hidden rounded-lg flex flex-col gap-6">
          <h4 className="text-foreground text-xl">
            Playback and Analysis Tools
          </h4>
          <Image
            src="/portfolio/images/BlenheimTwinPlayback.png"
            alt="Playback and Analysis Tools Interface"
            className="w-full h-auto rounded-lg"
            width={1200}
            height={700}
            sizes="(max-width: 768px) 100vw, 800px"
            priority
          />
          <p className="text-foreground2 leading-relaxed">
            I also built tools to interact with time-series data linked to the
            digital twin. This includes a playback feature that allows users to
            visualise changes over time, such as environmental conditions or
            structural movements. Changes are highlighted along the CesiumJS
            timeline based on the form fields selected by the user, making it
            easy to track specific metrics. This functionality offers valuable
            insights into the dynamics of the Palace and supports proactive
            conservation efforts.
          </p>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-foreground text-xl mb-4">Project Outcome</h3>
        <p className="text-foreground2 pb-8">
          The Blenheim Digital Twin application is a fully operational enterprise
          web app, currently in active use at Blenheim Palace for logging and
          managing maintenance activities. The platform has streamlined
          conservation workflows and improved data accessibility for the estate&#39;s
          team.
          <br />
          <br />
          Beyond Blenheim, the app is being showcased to heritage sites and
          organisations across the UK and Europe, where it has attracted
          significant attention for its innovative approach to digital asset
          management and conservation. Its success is opening new opportunities
          for collaboration and adoption within the wider heritage sector.
        </p>
      </div>
    </div>
  );
};

export default BlenheimDigitalTwinProject;
