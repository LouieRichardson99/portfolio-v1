export default function HeroNameDiv() {
    return (
        <div className="text-gray-800 sm:w-80 w-auto sm:mr-20 -mt-14 sm:mt-0 relative">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-wide mb-2"><span className="text-red-600">Louie</span> Richardson</h1>
          <h2 className="font-light left-0.5 relative mb-4 sm:mb-8">Software Developer</h2>
          <a href="#projects">
            <button className="cta-button">
              Check Out My Work
            </button>
          </a>
        </div>
    )
}
