import { getBlogs, getBlogSlug } from "@/libs/blog";
import { IBlog } from "@/types/blog";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import Image from "next/image";

export const generateStaticParams = async () => {
  const blogs: IBlog[] = await getBlogs();

  return blogs.map((item) => ({
    slug: item.fields.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);

  return {
    title: blog.fields.title,
    description: blog.fields.title,
    authors: blog.fields.author.fields.name,
    openGraph: {
      images: [`https:${blog.fields.thumbnail.fields.file.url}`],
    },
  };
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blog: IBlog = await getBlogSlug(params.slug);
  console.log(blog);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="px-6 py-12 text-center">
        <h1 className="text-lg text-green-600 font-semibold">
          {blog.fields.category}
        </h1>
        <h2 className="mt-2 text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800">
          {blog.fields.title}
        </h2>
        <p className="mt-4 text-gray-600">
          {blog.fields.author.fields.name} {blog.fields.date}
        </p>
      </header>

      <main className="max-w-4xl mx-auto p-4">
        <div className="relative w-full h-64 sm:h-80 md:h-[450px] mb-8">
          <Image
            src={`https:${blog.fields.thumbnail.fields.file.url}`}
            alt="thumbnail"
            layout="fill"
            objectFit="cover"
            className="rounded-lg shadow-lg"
          />
        </div>
        <section className="text-gray-800">
          <div className="text-lg leading-relaxed">
            {documentToReactComponents(blog.fields.content)}
          </div>
        </section>
      </main>
    </div>
  );
}
