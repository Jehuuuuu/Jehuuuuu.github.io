import { Tooltip } from "@/components/ui/tooltip-card";
import type { SocialLinksProps } from "@/lib/constants/socialLinks";
import { FaGithub, FaSquareXTwitter } from "react-icons/fa6"
import { FaFacebookSquare } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import Reveal from "@/components/ui/reveal"

export default function Footer({ links }: { links: SocialLinksProps }) {
  return (
    <Reveal>
      <div className="flex flex-col md:flex-row items-center gap-2 pt-2 pb-4">
        <div className="flex items-center gap-2">
          <Tooltip content={
            <img src="/tooltip-github.png" alt="Visit Jehu Rodriguez's Github Profile " className="max-w-full h-auto" />
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
            <img src="/tooltip-x.png" alt="Visit Jehu Rodriguez's X Account" className="max-w-full h-auto" />
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
            <img src="/tooltip-facebook.png" alt="Visit Jehu Rodriguez's Facebook Account" className="rounded-sm max-w-full h-auto" />
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
        </div>
        <span className="md:ml-auto ">© {new Date().getFullYear()} Jehu Rodriguez.</span>
      </div>
    </Reveal>
  )
}
