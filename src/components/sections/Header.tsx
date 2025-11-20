import type { ReactElement } from "react"
import Banner from "./Banner"

interface HeaderProfileProps {
  name: string,
  profileImage: string,
  bannerImage: string,
  age: number,
  title: string,
  links?: {
    github?: string,
    twitter?: string,
    linkedin?: string,
    resume?: string,
    email?: string
  }
}


export default function HeaderSection({ name, profileImage, bannerImage, age, title, links }: HeaderProfileProps): ReactElement {
  return (
    <>
      <Banner bannerImage={bannerImage} />
      <div className="flex items-center justify-center">
        <div className="absolute ">
          <img src={profileImage} className="object-cover object-[50%_25%] w-35 h-35 md:w-40 md:h-40 rounded-full " alt="profile-picture" />
        </div>
      </div>
    </>
  )
}
