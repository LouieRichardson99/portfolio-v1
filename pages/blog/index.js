import { client } from "../../utils/prismicClient";
import Prismic from "prismic-javascript";
import BlogPanel from "../../components/BlogPanel";
import BlogDate from "../../components/BlogDate";
import { RichText } from "prismic-reactjs";
import Head from "next/head";

export default function blog({ blogs }) {
  return (
    <>
      <Head>
        <title>Louie Richardson | Blog</title>
        <meta
          name="description"
          content="My name is Louie and I love technology and coding! I will blog about anything tech or code related. I post on a very regular basis and would love if you joined my mailing list too!"
        />
        <meta property="og:url" content={"https://louierichardson.com/blog"} />
        <meta
          property="og:image"
          content="https://louierichardson.com/public/og-image.png"
        />
        <meta property="og:site_name" content="Louie Richardson" />
        <meta
          name="og:title"
          property="og:title"
          content={"Louie Richardson | Blog"}
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
      <main className="font-sans mt-10 text-gray-800">
        <h1 className="font-semibold mb-4 text-2xl text-center">Blog</h1>
        <div className="blog-grid">
          {blogs.results.map((blog) => {
            return (
              <BlogPanel
                key={blog.uid}
                blogHeroImage={blog.data.hero_image.url}
                blogImageWidth={blog.data.hero_image.dimensions.width}
                blogImageHeight={blog.data.hero_image.dimensions.height}
                blogDate={<BlogDate dateString={blog.first_publication_date} />}
                blogTitle={RichText.render(blog.data.blog_title)}
                blogAltText={blog.data.hero_image.alt}
                blogExcerpt={RichText.render(blog.data.blog_excerpt)}
                blogSlug={blog.uid}
              />
            );
          })}
        </div>
      </main>
    </>
  );
}

export async function getStaticProps() {
  const blogs = await client.query(
    Prismic.Predicates.at("document.type", "blog_post"),
    {
      orderings: "[document.first_publication_date desc]",
    }
  );

  return {
    props: {
      blogs,
    },
    revalidate: 600,
  };
}
