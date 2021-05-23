import HeroNameDiv from "../components/HeroNameDiv";
import HeroPortraitDiv from "../components/HeroPortraitDiv";
import SkillsTableDesktop from "../components/SkillsTableDesktop";
import SkillsTableMobile from "../components/SkillsTableMobile";
import { client } from "../utils/prismicClient";
import Prismic from "prismic-javascript";
import ProjectPanel from "../components/ProjectPanel";
import { RichText } from "prismic-reactjs";
import Head from "next/head";
import ContactForm from "../components/ContactForm";
import AboutInfo from "../components/AboutInfo";

export default function Home({ projects }) {
  return (
    <>
      <Head>
        <title>Louie Richardson | Homepage</title>
        <meta
          name="description"
          content="I am a passionate individual always wanting to learn more about software engineering and computer science. I consider myself a quick learner always setting out challenges to learn different programming concepts and to find a more efficient way of solving problems."
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/devicons/devicon@v2.10.1/devicon.min.css"
          defer
        />
        <meta property="og:url" content={"https://louierichardson.com"} />
        <meta
          property="og:image"
          content="https://louierichardson.com/public/og-image.png"
        />
        <meta property="og:site_name" content="Louie Richardson" />
        <meta
          name="og:title"
          property="og:title"
          content={"Louie Richardson | Homepage"}
        />
        <meta
          property="og:description"
          content="I am a passionate individual always wanting to learn more about software engineering and computer science."
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:description"
          content="I am a passionate individual always wanting to learn more about software engineering and computer science."
        />
        <meta name="twitter:creator" content="@louie_rich99" />
      </Head>
      <main className="font-sans text-gray-800">
        <section className="items-center sm:flex w-auto justify-center mt-20 mx-6 block">
          <HeroNameDiv />
          <HeroPortraitDiv />
        </section>
        <section className="max-w-3xl mx-auto mt-12 sm:mt-20 w-11/12">
          <h3 className="section-header">About</h3>
          <AboutInfo />
        </section>
        <section className="w-11/12 mx-auto">
          <div className="hidden sm:block">
            <SkillsTableDesktop />
          </div>
          <div className="block sm:hidden">
            <SkillsTableMobile />
          </div>
        </section>
        <section
          id="projects"
          className="max-w-3xl mx-auto mt-12 sm:mt-20 w-11/12 pt-3"
        >
          <h3 className="section-header">Projects</h3>
          <div className="mt-5 md:flex flex-wrap justify-center">
            {projects.results.map((project) => {
              return (
                <ProjectPanel
                  key={project.id}
                  projectImage={project.data.project_image.url}
                  imageWidth={project.data.project_image.dimensions.width}
                  imageHeight={project.data.project_image.dimensions.height}
                  projectName={project.data.project_image.alt}
                  projectDesc={RichText.render(
                    project.data.project_description
                  )}
                  liveURL={project.data.live_url.url}
                  githubLink={project.data.github_link.url}
                />
              );
            })}
          </div>
        </section>
        <section
          className="mt-12 max-w-3xl mx-auto w-11/12 mb-10 leading-8 pt-3"
          id="contact"
        >
          <h3 className="section-header">Contact</h3>
          <ContactForm />
          <div className="text-2xl flex sm:hidden mt-2 justify-center">
            <a
              rel="noopener"
              href="https://twitter.com/louie_rich99"
              target="_blank"
              aria-label="Twitter link icon"
            >
              <i className="block fab fa-twitter pb-2 mr-4"></i>
            </a>
            <a
              rel="noopener"
              href="https://github.com/LouieRichardson99"
              target="_blank"
              aria-label="Github link icon"
            >
              <i className="block fab fa-github"></i>
            </a>
          </div>
        </section>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const projects = await client.query(
    Prismic.Predicates.at("document.type", "portfolio_project")
  );

  return {
    props: {
      projects,
    },
    revalidate: 600,
  };
}
