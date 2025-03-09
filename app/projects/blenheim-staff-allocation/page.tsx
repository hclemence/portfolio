
import Navbar from "@/app/components/Navbar";
import Image from "next/image";
import content from "./blenheim.json"
import ScrollingLabels from "@/app/components/ScrollingLabels";

export default function BlenheimProject() {
  console.log(content.what)
  return (
    <main className="flex flex-col bg-background">
      <Navbar />
      <div className="flex flex-col overflow-hidden relative px-2 sm:px-10 lg:px-24 xl:px-40">
        <div className="relative container mt-36 lg:mt-56  py-4 mx-auto px-6 lg:px-20 xl:px-36">
          <h1 className="font-editorial_new text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-foreground  "> Blenheim Staff Allocation Project</h1>
          <ul className="flex flex-wrap gap-2 md:gap-5 mt-8 px-1 md:px-4">
        {content.skills.map((item, index) => (
          <li key={index} className="text-background bg-foreground py-[2px] px-3 rounded-lg whitespace-nowrap inline-flex text-xs md:text-sm tracking-tighter">
            {item}
          </li>))}
          </ul>
          </div>
        <div className="gap-6 grid md:grid-cols-[2fr_5fr] grid-cols-none text-left mt-6 sm:mt-10 mx-8 md:mx-12 xl:mx-24 lg:mt-20 xl:mt-36">
          <h3 className="text-foreground text-xl">What?</h3>
          <div className="">
            <div>
              
              <Image src="/images/blenheim-map.png" width={350} height={350} alt="Map of visitor flow through main area of Blenheim" className="float-right"/>
              {content.what.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-foreground2 mb-4">{paragraph}</p>
                ))}
            </div>
            
          </div>
          <h3 className="text-foreground text-xl">Why?</h3>
          <p className="text-foreground2">{content.why}</p>
          <h3 className="text-foreground text-xl">How?</h3>
          <p className="text-foreground2">              
            {content.how.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-foreground2 mb-4">{paragraph}</p>
                ))}</p>
          <h3 className="text-foreground text-xl">How?</h3>
          <p className="text-foreground2">              
            {content.how.split("\n\n").map((paragraph, index) => (
                <p key={index} className="text-foreground2 mb-4">{paragraph}</p>
                ))}</p>
        </div>
        </div>
        
      

    </main>
  );
}