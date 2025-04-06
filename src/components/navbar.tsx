"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-md py-2"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative h-12 w-12 mr-2">
                <Image
                  src="/Hlogo.png"
                  alt="Hlogger Logo"
                  width={48}
                  height={48}
                  className="transform hover:rotate-6 transition-transform duration-300"
                />
              </div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-gray-400 to-gray-600 bg-clip-text text-transparent">
                Hlogger<span className="text-gray-500">.</span>
              </h1>
            </Link>
          </div>

          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <Link
                href="/"
                className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
              >
                Home
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
              >
                Categories
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
              >
                Popular
              </Link>
              <Link
                href="/"
                className="text-gray-700 hover:text-sky-500 transition-colors font-medium"
              >
                About
              </Link>
            </div>
          </div>

          <div className="block md:hidden">
            <button className="flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-sky-500 focus:outline-none">
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>

          <div className="hidden md:block">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="py-2 px-4 pr-10 rounded-full bg-gray-100 focus:bg-white border border-transparent focus:border-sky-300 focus:ring-2 focus:ring-sky-200 focus:outline-none transition-all duration-300 w-32 focus:w-64"
              />
              <div className="absolute right-3 top-2.5 text-gray-400">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
