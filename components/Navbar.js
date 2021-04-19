import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white">
      <div className="container-fluid text-center sm:text-left text-gray-800">
        <div></div>
        <button
          className="navbar-toggler top-2 relative right-2 mb-3"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav justify-end w-full sm:top-3 relative sm:right-3">
            <li className="nav-item">
              <Link href="/">
                <a className="nav-link sm:mr-5">Home</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/#projects">
                <a className="nav-link sm:mr-5">Projects</a>
              </Link>
            </li>
            <li className="nav-item">
              <Link href="/blog">
                <a className="nav-link sm:mr-5">Blog</a>
              </Link>
            </li>
            <li className="nav-item">
              <a
                href="mailto:louie.richardson99@gmail.com"
                className="nav-link sm:mr-5"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
