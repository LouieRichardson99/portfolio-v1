import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="max-w-7xl mx-auto">
      <ul className="flex justify-end mt-6 mr-6">
        <li className="hover:text-red-600">
          <Link href="/">Home</Link>
        </li>
        <li className="ml-6 hover:text-red-600">
          <Link href="/#projects">Projects</Link>
        </li>
        <li className="ml-6 hover:text-red-600">
          <Link href="/blog">Blog</Link>
        </li>
        <li className="ml-6 hover:text-red-600">
          <Link href="/#contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
