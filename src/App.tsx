import Experience from "./components/sections/Experience/Experience";
import Footer from "./components/sections/Footer/Footer";
import HeaderSection from "./components/sections/Header/Header";
import { ProjectCard } from "./components/sections/Projects/ProjectCard";
import { socialLinks } from "./lib/constants/socialLinks";

export default function App() {
  return (
    <div className="px-2 max-w-2xl space-y-2 mx-auto">
      <HeaderSection bannerImage="/banner.jpeg" name={"Jehu Rodriguez"} profileImage={"/gradpic.jpg"} age={22} title={"Full Stack Web Developer & Software Engineer"} links={socialLinks} />
      <Experience />
      <ProjectCard />
      <Footer links={socialLinks} />
    </div>
  );
}


