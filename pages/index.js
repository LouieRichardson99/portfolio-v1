import HeroNameDiv from "../components/HeroNameDiv";
import HeroPortraitDiv from "../components/HeroPortraitDiv";
import SkillsTableDesktop from "../components/SkillsTableDesktop";
import SkillsTableMobile from "../components/SkillsTableMobile";
import { client } from "../utils/prismicClient";
import Prismic from "prismic-javascript";
import ProjectPanel from "../components/ProjectPanel";
import { RichText } from "prismic-reactjs";
import Meta from "../components/Meta";


export default function Home({ projects }) {
  return (
    <div className="font-body text-gray-800">
      <Meta 
        title="Homepage"
        desc="I’m a web developer based in Milton Keynes, United Kingdom."
      />
      <main>
        <section className="items-center sm:flex w-auto justify-center mt-20 mx-6 block">
          <HeroNameDiv />
          <HeroPortraitDiv />
        </section>
        <section className="max-w-3xl mx-auto mt-12 sm:mt-20 w-11/12">
          <h3 className="text-red-600 font-semibold mb-4 text-xl">About</h3>
          <div>
            <p className="mb-3">I’m a web developer based in Milton Keynes, United Kingdom.</p>
            <p className="mb-3">I spend the majority of my time learning to code and computer science in the hope of being able to get my foot in the door of the tech world!</p>
            <p className="mb-3">I am mostly focusing on the front-end aspect of a website using frameworks like Next.js to deploy web applications efficiently.</p>
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
        <section id="projects" className="max-w-3xl mx-auto mt-12 sm:mt-20 w-11/12">
          <h3 className="text-red-600 font-semibold mb-4 text-xl">Projects</h3>
          <div>
            {projects.results.map(project => {
              return <ProjectPanel
                key={project.id}
                projectImage={project.data.project_image.url}
                projectName={project.data.project_image.alt}
                projectDesc={RichText.render(project.data.project_description)}
                liveURL={project.data.live_url.url}
                githubLink={project.data.github_link.url}
              />
            })}
          </div>
        </section>
        <section className="mt-12 max-w-3xl mx-auto w-11/12 mb-10 leading-8">
          <h3 className="text-red-600 font-semibold mb-3 text-xl">Contact</h3>
          <div>
            <p>You can get in touch with me at <a href="mailto:louie.richardson99@gmail.com" className="hover:text-red-600 text-red-600 font-semibold">louie.richardson99@gmail.com</a></p>
          </div>
          <div className="text-2xl flex sm:hidden mt-2">
            <a href="https://twitter.com/louie_rich99" target="_blank"><i aria-hidden className="block fab fa-twitter pb-2 mr-4"></i></a>
            <a href="https://github.com/LouieRichardson99" target="_blank"><i aria-hidden className="block fab fa-github"></i></a>
          </div>
        </section>
      </main>
    </div>
  )
}

export async function getStaticProps() {
  const projects = await client.query(
    Prismic.Predicates.at("document.type", "portfolio_project")
  );

  return {
    props: {
      projects,
    },
  };
};
  