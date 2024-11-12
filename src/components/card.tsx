import Image from "next/image";
import Link from "next/link";

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
}: ICardBlog) {
  return (
    <div className="container flex flex-col w-full max-w-[400px] h-auto md:h-[600px] shadow-xl rounded-2xl p-4 mx-auto">
      <div className="rounded-sm h-[200px] md:h-[350px] my-4 overflow-hidden">
        <Image
          src={`https:${thumbnail}`}
          alt="thumbnail"
          layout="responsive"
          height={300}
          width={400}
          className="object-cover w-full h-full"
        />
      </div>
      <div className="flex h-auto md:h-[50px] text-lg font-semibold text-center md:text-left">
        {title}
      </div>
      <div className="flex items-center rounded-sm my-4 space-x-4">
        <Image
          src={`https:${avatar}`}
          alt="avatar"
          height={40}
          width={40}
          className="rounded-full"
        />
        <div className="flex flex-col justify-center text-center md:text-left">
          <div className="text-sm font-medium">{author}</div>
          <div className="text-xs text-gray-500">{email}</div>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <Link
          href={`/blog/${slug}`}
          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-sky-300 rounded-lg hover:bg-sky-400 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-400 dark:hover:bg-sky-500 dark:focus:ring-sky-600"
        >
          Read more
        </Link>
      </div>
    </div>
  );
}
