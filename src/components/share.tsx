import Link from "next/link";
import React from "react";
import { IconType } from "react-icons";
import {
  IoLogoFacebook,
  IoLogoLinkedin,
  IoLogoTwitter,
  IoLogoWhatsapp,
} from "react-icons/io5";
import Wrapper from "./wrapper";
import CopyButton from "./copy";

interface IShare {
  Icon: IconType;
  link: string;
}

const share: IShare[] = [
  {
    Icon: IoLogoFacebook,
    link: "https://www.facebook.com/sharer/sharer.php?u=",
  },
  {
    Icon: IoLogoLinkedin,
    link: "https://www.linkedin.com/sharing/share-offside?url=",
  },
  {
    Icon: IoLogoTwitter,
    link: "https://www.twitter.com/intent/tweet?url=",
  },
  {
    Icon: IoLogoWhatsapp,
    link: "https://wa.me/?text=",
  },
];

export default function ShareButton({ slug }: { slug: string }) {
  const domain = "https://hlogger-cmscontentful.vercel.app/blog";
  return (
    <Wrapper>
      <div className="my-4">
        <p className="flex font-semibold">Share article</p>
        <div className="flex text-2xl gap-2 my-2">
          {share.map((item, idx) => {
            return (
              <Link key={idx} href={`${item.link}${domain}${slug}`}>
                <item.Icon />
              </Link>
            );
          })}
          <CopyButton link={`${domain}${slug}`} />
        </div>
      </div>
    </Wrapper>
  );
}
