
import HeaderSection from "./components/sections/Header";

export default function App() {
  return (
    <div className="max-w-2xl space-y-2 mx-auto h-[150vh]">
      <HeaderSection bannerImage="/banner.jpeg" name={"Jehu Rodriguez"} profileImage={"gradpic.jpg"} age={22} title={"Full Stack Web Developer"} />
    </div>
  );
}


