import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="hidden justify-end sm:flex max-w-6xl px-5 py-5 mx-auto">
        <ul className="flex text-gray-700">
          <li>
            <Link href="/">
              <a className="mr-6 hover:text-gray-600">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/#projects">
              <a className="mr-6 hover:text-gray-600">Projects</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a className="mr-6 hover:text-gray-600">Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a className="hover:text-gray-600">Contact</a>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Mobile Nav */}

      <nav className="block sm:hidden relative">
        <div className="justify-end flex">
          <button
            className="focus:outline-none h-full mr-5 mt-3"
            onClick={() => setIsOpen(!isOpen)}
          >
            <i className="fas fa-bars text-2xl text-gray-800"></i>
          </button>
        </div>
        <ul
          className={`${
            !isOpen && "hidden"
          } relative text-center block text-gray-800`}
        >
          <li className="mb-1">
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="/#projects">
              <a>Projects</a>
            </Link>
          </li>
          <li className="mb-1">
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/#contact">
              <a>Contact</a>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
