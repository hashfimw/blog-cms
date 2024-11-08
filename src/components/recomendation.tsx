import { IBlog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function RecomendationBlog({ blogs }: { blogs: IBlog[] }) {
  return (
    <div className="flex flex-col mx-4 text-start gap-2 ">
      {blogs.map((item, idx) => {
        return (
          <div className="flex gap-2 mr-6 h-[70px]" key={idx}>
            <Image
              src={`https:${item.fields.thumbnail.fields.file.url}`}
              alt="thumbnail"
              height={70}
              width={70}
              className="object-fill relative"
            />
            <Link href={item.fields.slug}>
              <div className="flex-col flex text-[13px] font-medium">
                {item.fields.title}
                <span className="text-[11px] font-light mb-2">
                  {item.fields.author.fields.name}
                  {"  "}
                  <span className="text-[10px]"> {item.fields.date}</span>
                </span>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
