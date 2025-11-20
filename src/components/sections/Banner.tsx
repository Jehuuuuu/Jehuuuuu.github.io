
import { PixelatedCanvas } from "../ui/pixelated-canvas";

export default function Banner({ bannerImage }: { bannerImage: string }) {
  return (

    <PixelatedCanvas
      src={bannerImage}
      responsive={true}
      cellSize={4}
      dotScale={0.9}
      shape="square"
      backgroundColor="#000000"
      dropoutStrength={0.1}
      interactive
      distortionStrength={0.2}
      distortionRadius={200}
      distortionMode="repel"
      followSpeed={0.2}
      jitterStrength={4}
      jitterSpeed={1}
      sampleAverage
      objectFit="fill"
      className="rounded-2xl shadow-lg w-full! h-[30vh]! md:h-[40vh]! opacity-60 mt-8 z--999"
    />
  )
}

