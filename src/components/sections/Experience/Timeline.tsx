import { Card, CardContent } from "@/components/ui/card";
import type { ExperienceProps } from "@/lib/interfaces/experience";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Timeline({ experience }: ExperienceProps) {
  return (
    <Card className="px-4 max-w-[100vw]">
      <CardContent>
        {experience.map((exp, index) => (
          <div className="border-l-4 px-14 py-2 relative" key={index}>
            {/* <div className="w-15 h-15 rounded-full absolute -left-8 border p-0.5 overflow-hidden bg-background"><img src={exp?.logo} alt={exp.name} className="rounded-full object-cover" /></div> */}
            <div className="w-15 h-15 rounded-full absolute -left-8 border p-0.5 overflow-hidden bg-background">
              <a href={exp?.href} target="_blank">
                <Avatar className="flex items-center justify-center">
                  <AvatarImage src={exp?.logo} alt={exp.name} className="object-cover" />
                  <AvatarFallback ><p className="font-bold text-2xl mt-3">{exp.name[0]}</p></AvatarFallback>
                </Avatar>
              </a>
            </div>
            <span className="text-muted-foreground text-sm">{exp.start} - {exp?.end}</span>
            <p className="font-bold">{exp.name}</p>
            <span className="text-muted-foreground">{exp.title}</span>
            {exp.description.map((desc, index) => (
              <div key={index}>
                <ul className="list-disc">
                  <li className="p-2 ml-4">
                    {desc}
                  </li>
                </ul>
              </div>
            ))}
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
