import type { ReactElement } from "react"
import Banner from "./Banner"
import { FaFilePdf, FaGithub, FaSquareXTwitter } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { Tooltip } from "@/components/ui/tooltip-card"
import Reveal from "@/components/ui/reveal"

interface HeaderProfileProps {
  name: string,
  profileImage: string,
  bannerImage: string,
  age: number,
  title: string,
  links?: {
    github?: string,
    facebook?: string,
    twitter?: string,
    linkedin?: string,
    resume?: string,
    email?: string
  }
}


export default function HeaderSection({ name, profileImage, age, title, links }: HeaderProfileProps): ReactElement {
  return (
    <>
      <Reveal>
        <Banner />
      </Reveal>

      <Reveal className="flex items-center justify-center">
        <div className="absolute">
          <img
            src={profileImage}
            className="object-cover object-[50%_25%] w-35 h-35 md:w-40 md:h-40 rounded-full"
            alt="profile-picture"
          />
        </div>
      </Reveal>

      <Reveal className="flex flex-col items-center justify-center mt-20 gap-2 py-2">
        <p className="font-bold text-4xl">{name}</p>
        <p className="text-sm" >{age} <Tooltip content={<p className="text-nowrap" >Imus, Cavite, Philippines</p>}>🇵🇭 </Tooltip>
          {" "} • {title} • Python & JavaScript</p>

        <div className="flex items-center space-x-2">
          <Tooltip content={
            <img src="/tooltip-github.png" alt="github profile" className="max-w-full h-auto" />
          }
          >
            <a
              className="hover:opacity-80 touch-manipulation active:opacity-75"
              rel="noopener noreferrer"
              target="_blank"
              href={links?.github}
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <FaGithub size={20} />
            </a>
          </Tooltip>

          <Tooltip content={
            <img src="/tooltip-x.png" alt="twitter profile" className="max-w-full h-auto" />
          }
          >
            <a
              className="hover:opacity-80 touch-manipulation active:opacity-75"
              rel="noopener noreferrer"
              target="_blank"
              href={links?.twitter}
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <FaSquareXTwitter size={20} />
            </a>
          </Tooltip>
          <Tooltip content={
            <img src="/tooltip-facebook.png" alt="facebook profile" className="rounded-sm max-w-full h-auto" />
          }
          >
            <a
              className="hover:opacity-80 touch-manipulation active:opacity-75"
              rel="noopener noreferrer"
              target="_blank"
              href={links?.facebook}
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <FaFacebookSquare size={20} />
            </a>
          </Tooltip>
          <Tooltip content={
            links?.email
          }
          >
            <a
              className="hover:opacity-80 touch-manipulation active:opacity-75"
              rel="noopener noreferrer"
              target="_blank"
              href={`https://mail.google.com/mail/?view=cm&to=${links?.email}`}
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <MdEmail size={22} />
            </a>

          </Tooltip>
          <Tooltip content={
            <img src="/tooltip-resume.jpg" alt="resume picture" className="max-w-full h-auto" />
          }
          >
            <a
              className="hover:opacity-80 touch-manipulation active:opacity-75"
              rel="noopener noreferrer"
              target="_blank"
              href={links?.resume}
              style={{
                WebkitTapHighlightColor: 'transparent',
                WebkitTouchCallout: 'none',
                WebkitUserSelect: 'none',
                userSelect: 'none'
              }}
            >
              <FaFilePdf size={17} />
            </a>
          </Tooltip>

        </div>

      </Reveal>
    </>
  )
}
