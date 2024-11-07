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
    <div className="flex flex-col w-[400px] h-[600px] shadow-xl rounded-2xl p-4 justify-center ">
      <div className="flex rounded-sm h-[350px] my-4">
        <Image
          src={`https:${thumbnail}`}
          alt="thumbnail"
          height={300}
          width={400}
        ></Image>
      </div>
      <div className="flex h-[50px]">{`${title}`}</div>
      <div className="flex rounded-sm my-4">
        <Image
          src={`https:${avatar}`}
          alt="avatar"
          height={50}
          width={80}
        ></Image>
        <div className="flex flex-col justify-center ml-2">
          <div>{`${author}`}</div>
          <div>{`${email}`}</div>
        </div>
      </div>
      <Link
        href={`/blog/${slug}`}
        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-sky-300 rounded-lg hover:bg-sky-400 focus:ring-4 focus:outline-none focus:ring-sky-300 dark:bg-sky-400 dark:hover:bg-sky-500 dark:focus:ring-sky-600 w-[100px] h-[40px]"
      >
        Read more
      </Link>
    </div>
  );
}
