import Navbar from "@/components/navbar";
import Banner from "@/components/banner";
import Profile from "@/components/profile";
import Skill from "@/components/skill";
import Work from "@/components/work";
import Experiene from "@/components/experience";
import Project from "@/components/project";


export default function Home() {
  return (
    <main className="px-4 lg:px-32 py-8 h-screen">
        <Navbar />
        <Banner />
      
      <Profile  />
      <Skill />
      <Work />
      <Experiene />
      <Project />
    </main>
  );
}
