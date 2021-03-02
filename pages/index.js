import HeroNameDiv from "../components/HeroNameDiv";
import HeroPortraitDiv from "../components/HeroPortraitDiv";
import SkillsTableDesktop from "../components/SkillsTableDesktop";
import SkillsTableMobile from "../components/SkillsTableMobile";

export default function Home() {
  return (
    <div className="font-body text-gray-800">
      <main>
        <section className="items-center sm:flex w-auto justify-center mt-20 mx-6 block">
          <HeroNameDiv />
          <HeroPortraitDiv />
        </section>
        <section className="max-w-3xl mx-auto mt-12 sm:mt-20 w-11/12">
          <h3 className="text-red-600 font-semibold mb-4 text-xl">About</h3>
          <div>
            <p className="mb-3">I’m a self taught developer based in Milton Keynes, United Kingdom.</p>
            <p className="mb-3">What I mean by self taught is that I spend 90% of my time learning to code and computer science in the hope of being able to get my foot in the door of the tech world!</p>
            <p>I am on the look out for a junior front-end development position, and here are some of my skills.</p>
          </div>
        </section>
        <section className="w-11/12 mx-auto">
          <div className="hidden sm:block">
            <SkillsTableDesktop />
          </div>
          <div className="block sm:hidden">
            <SkillsTableMobile />
          </div>
        </section>
        <section className="mt-12 max-w-3xl mx-auto w-11/12 mb-10 leading-8">
          <h3 className="text-red-600 font-semibold mb-3 text-xl">Contact</h3>
          <div>
            <p>You can get in touch with me at <a href="mailto:louie.richardson99@gmail.com" className="hover:text-red-600 text-red-600 font-semibold">louie.richardson99@gmail.com</a></p>
          </div>
          <div className="text-2xl flex sm:hidden mt-2">
            <a href="https://twitter.com/louie_rich99" target="_blank"><i aria-hidden className="block fab fa-twitter pb-2 mr-4 hover:text-red-600"></i></a>
            <a href="https://github.com/LouieRichardson99" target="_blank"><i aria-hidden className="block fab fa-github hover:text-red-600"></i></a>
          </div>
        </section>
      </main>
    </div>
  )
}
