import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { techStackItems } from "@/lib/constants/techstack";

export default function Banner() {
  return (
    <div>
      <InfiniteMovingCards items={techStackItems}
        direction="left"
        speed="fast"
      />

    </div>

  )
}

