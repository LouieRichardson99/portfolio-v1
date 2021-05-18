import { client } from "../../utils/prismicClient";
import Prismic from "prismic-javascript";
import BlogPanel from "../../components/BlogPanel";
import BlogDate from "../../components/BlogDate";
import { RichText } from "prismic-reactjs";
import Meta from "../../components/Meta";

export default function blog({ blogs }) {
  return (
    <>
      <Meta
        title="Blog"
        desc="My name is Louie and I love technology and coding! I will blog about anything tech or code related. I post on a very regular basis and would love if you joined my mailing list too!"
      />
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
