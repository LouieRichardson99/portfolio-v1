import Link from "next/link";

export default function HeroNameDiv() {
    return (
        <div className="text-gray-800 sm:w-80 w-auto sm:mr-20 -mt-14 sm:mt-0 relative">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-wide mb-2"><span className="text-red-600">Louie</span> Richardson</h1>
          <h2 className="font-light left-0.5 relative mb-4 sm:mb-8">Software Developer</h2>
          <Link href="/projects">
            <button className="left-0.5 relative py-2 px-3 bg-red-600 text-white font-light rounded-xl tracking-wide">
              See What I've Made
            </button>
          </Link>
        </div>
    )
}
