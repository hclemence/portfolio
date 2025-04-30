import HeaderSection from "../components/HeaderSection";
import Navbar from "../components/Navbar";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  return (
    <main className="flex flex-col bg-background">
      <Navbar />
      <div className="flex flex-col items-center">
        <div className="container mt-36 lg:mt-56 mx-auto px-6 sm:px-24 lg:px-44 xl:px-56 py-4">
          <HeaderSection />
        </div>
      </div>
      <div className="bg-background flex flex-col items-center mb-24 mt-32">
        <div className="gap-10 grid md:grid-cols-2 grid-cols-none px-5">
          <ProjectCard
            link="/projects/blenheim-digital-twin"
            title="Blenheim Palace Digital Twin with the University of Oxford"
            description="A 3D simulation of the Palace for conservation planning and analysis "
            buttonText="Read more"
            imageSrc="/images/BlenheimTwinCard.png"
          />
          <ProjectCard
            link="/projects/consolidate-ui-rebuild"
            title="Consolidate.org.uk Website Rebuild"
            description="Responsive UI for a political transparency non-profit"
            buttonText="Read more"
          />
          <ProjectCard
            link="/projects/blenheim-staff-allocation"
            title="Blenheim Palace Staff Allocation"
            description="Developing a model to forecast visitor demand"
            buttonText="Read more"
            imageSrc="/images/BlenheimCard.jpg"
          />
        </div>
      </div>
    </main>
  );
}
