import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Timeline from "./Timeline";
import { experienceData } from "@/lib/constants/experienceData";
import Reveal from "@/components/ui/reveal";

export default function Experience() {
  return (
    <Reveal><Tabs defaultValue="work" className="space-y-2">
      <TabsList className="w-full h-15 grid grid-cols-2 gap-2">
        <TabsTrigger value="work" className="text-md cursor-pointer" >Work</TabsTrigger>
        <TabsTrigger value="education" className="text-md cursor-pointer">Education</TabsTrigger>
      </TabsList>

      <TabsContent value="work">
        <Timeline experience={experienceData.work} />
      </TabsContent>

      <TabsContent value="education">
        <Timeline experience={experienceData.education} />
      </TabsContent>
    </Tabs></Reveal>
  );
}
