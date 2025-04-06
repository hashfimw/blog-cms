import Navbar from "@/components/navbar";
import Cards from "@/components/card";
import { getBlogs } from "@/libs/blog";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";
import { IBlog } from "@/types/blog";
import Link from "next/link";
import Image from "next/image";

export default async function Home() {
  const data: IBlog[] = await getBlogs();

  return (
    <>
      <main className="min-h-screen bg-gradient-to-b from-white to-gray-200 pt-32 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <header className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Welcome to <span className="text-gray-500">Hlogger</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover interesting articles and stories on various topics
            </p>
          </header>

          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">
                Featured Posts
              </h2>
            </div>
            {data.length > 0 && (
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[480px]">
                <div className="lg:col-span-2 bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="relative w-full md:w-2/3 h-60 md:h-auto">
                      <Image
                        src={`https:${data[0].fields.thumbnail.fields.file.url}`}
                        alt={data[0].fields.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover transition-all duration-500 hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-black/50 to-transparent opacity-70"></div>
                      <div className="absolute bottom-4 left-4">
                        <span className="px-3 py-1 bg-gray-500 text-white text-sm font-medium rounded-md">
                          {data[0].fields.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6 md:w-1/3 flex flex-col">
                      <h3 className="text-2xl font-bold text-gray-800 mb-4">
                        {data[0].fields.title}
                      </h3>
                      <div className="line-clamp-3">
                        {documentToReactComponents(data[0].fields.content)}
                      </div>

                      <div className="flex items-center mb-4 mt-48">
                        <div className="relative w-10 h-10 rounded-full overflow-hidden border-2 border-sky-100">
                          <Image
                            src={`https:${data[0].fields.author.fields.avatar.fields.file.url}`}
                            alt={data[0].fields.author.fields.name}
                            width={40}
                            height={40}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="ml-3">
                          <p className="text-sm font-semibold text-gray-700">
                            {data[0].fields.author.fields.name}
                          </p>
                          <p className="text-xs text-gray-500">
                            {data[0].fields.author.fields.email}
                          </p>
                        </div>
                      </div>
                      <div className="mt-auto">
                        <Link
                          href={`/blog/${data[0].fields.slug}`}
                          className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-gray-400 to-gray-600 rounded-lg hover:from-gray-500 hover:to-gray-600 transition-colors duration-300"
                        >
                          Read featured post
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-800">Latest Posts</h2>
              <div className="flex space-x-2">
                <button className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
                  Movies
                </button>
                <button className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
                  Tech
                </button>
                <button className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
                  Food
                </button>
                <button className="px-3 py-1 bg-white text-gray-700 text-sm font-medium rounded-md hover:bg-gray-100 transition-colors">
                  Sport
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {data.map((item, idx) => (
                <div
                  key={idx}
                  data-cy="blog-item"
                  className="transform transition duration-300 hover:-translate-y-2"
                >
                  <Cards
                    title={item.fields.title}
                    thumbnail={item.fields.thumbnail.fields.file.url}
                    author={item.fields.author.fields.name}
                    email={item.fields.author.fields.email}
                    avatar={item.fields.author.fields.avatar.fields.file.url}
                    slug={item.fields.slug}
                    category={item.fields.category}
                  />
                </div>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <button className="px-6 py-3 bg-white text-gray-500 font-medium rounded-lg border border-gray-500 hover:bg-gray-500 hover:text-white transition-colors duration-300">
                Load more articles
              </button>
            </div>
          </section>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-6 md:mb-0">
              <div className="relative h-10 w-10 mr-2">
                <Image
                  src="/Hlogo.png"
                  alt="Hlogger Logo"
                  width={40}
                  height={40}
                  className="filter brightness-0 invert"
                />
              </div>
              <h1 className="text-xl font-bold">
                Hlogger<span className="text-gray-400">.</span>
              </h1>
            </div>

            <div className="flex space-x-6 mb-6 md:mb-0">
              <Link
                href="/"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-gray-400 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Contact
              </Link>
              <Link
                href="/privacy"
                className="text-gray-400 hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
            </div>

            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-white transition-colors"
              >
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.675 0h-21.35c-.732 0-1.325.593-1.325 1.325v21.351c0 .731.593 1.324 1.325 1.324h11.495v-9.294h-3.128v-3.622h3.128v-2.671c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12v9.293h6.116c.73 0 1.323-.593 1.323-1.325v-21.35c0-.732-.593-1.325-1.325-1.325z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="mt-8 border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
            <p>
              &copy; {new Date().getFullYear()} Hlogger. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
