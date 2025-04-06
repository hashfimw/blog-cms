"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

interface ICardBlog {
  title: string;
  thumbnail: string;
  avatar: string;
  email: string;
  author: string;
  slug: string;
  category: string;
}

export default function Cards({
  title,
  thumbnail,
  avatar,
  email,
  author,
  slug,
  category,
}: ICardBlog) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="flex flex-col w-full h-full bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 md:h-56 overflow-hidden">
        <Image
          src={`https:${thumbnail}`}
          alt={title}
          layout="fill"
          objectFit="cover"
          className={`transition-transform duration-500 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-70"></div>
        <div className="absolute bottom-3 left-3 px-2 py-1 bg-gray-500 text-white text-xs font-medium rounded-md">
          {category}
        </div>
      </div>

      <div className="p-5 flex-grow">
        <h2 className="text-xl font-bold text-gray-800 line-clamp-2 mb-3 h-14">
          {title}
        </h2>

        <div className="flex items-center mt-4 mb-5">
          <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-sky-100">
            <Image
              src={`https:${avatar}`}
              alt={author}
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="ml-3">
            <p className="text-sm font-semibold text-gray-700">{author}</p>
            <p className="text-xs text-gray-500">{email}</p>
          </div>
        </div>
      </div>

      <div className="px-5 pb-5 mt-auto">
        <Link
          href={`/blog/${slug}`}
          className="block w-full text-center py-3 px-4 bg-gradient-to-r from-gray-400 to-gray-500 text-white font-medium rounded-lg hover:from-gray-500 hover:to-gray-600 transition-colors duration-300 focus:ring-4 focus:ring-gray-400"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
