import Experience from "./components/sections/Experience/Experience";
import HeaderSection from "./components/sections/Header/Header";

export default function App() {
  return (
    <div className="max-w-2xl space-y-2 mx-auto h-[150vh]">
      <HeaderSection bannerImage="/banner.jpeg" name={"Jehu Rodriguez"} profileImage={"/gradpic.jpg"} age={22} title={"Full Stack Web Developer"} links={{
        github: "https://github.com/Jehuuuuu",
        twitter: "https://x.com/J3huuu",
        facebook: "https://www.facebook.com/JehuRodriguez017/",
        email: "jehurodriguez143@gmail.com",
        resume: "jehu-resume.pdf"
      }} />
      <Experience />
    </div>
  );
}


