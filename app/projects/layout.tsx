import Navbar from "@/components/Navbar";

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="flex flex-col bg-background">
      <Navbar />
      <div className="flex flex-col overflow-hidden relative px-4 sm:px-10 lg:px-36 2xl:px-80">
       
        {children}
      </div>
    </main>
  );
}