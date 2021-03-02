import { client } from "../../utils/prismicClient";
import Prismic from "prismic-javascript";
import BlogPanel from "../../components/BlogPanel";
import BlogDate from "../../components/BlogDate";
import { RichText } from "prismic-reactjs";

export default function blog({blogs}) {
    return (
        <div className="font-body mt-10 text-gray-800">
            <h1 className="font-semibold mb-4 text-2xl text-center">Blog</h1>
            <div className="grid w-11/12 xl:w-3/4 2xl:w-3/4 max-w-screen-xl grid-cols-1 sm:grid-cols-2 mx-auto -mt-6 sm:mt-0 md:grid-cols-3">
                {blogs.results.map(blog => {
                    return <BlogPanel
                        key={blog.uid}
                        blogHeroImage={blog.data.hero_image.url}
                        blogDate={<BlogDate dateString={blog.first_publication_date}/>}
                        blogTitle={RichText.render(blog.data.blog_title)}
                        blogAltText={blog.data.hero_image.alt}
                        blogExcerpt={RichText.render(blog.data.blog_excerpt)}
                        blogSlug={blog.slugs[0]}
                    />
                })}
            </div>
        </div>
    )
}

export async function getStaticProps() {
    const blogs = await client.query(
      Prismic.Predicates.at("document.type", "blog_post"), {
        orderings: "[document.first_publication_date desc]"
      }
    );
  
    return {
      props: {
        blogs,
      },
    };
  }
