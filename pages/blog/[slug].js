import { client } from "../../utils/prismicClient";
import { RichText } from "prismic-reactjs";
import markdownStyles from "../../styles/markdown-styles.module.css";
import BlogDate from "../../components/BlogDate";
import Meta from "../../components/Meta";
import Image from "next/image";
import Prismic from "prismic-javascript";

export default function post({ post }) {
  return (
    <>
      <Meta
        title={post.data.blog_title[0].text}
        desc={post.data.blog_excerpt[0].text}
      />
      <main className="w-11/12 sm:w-3/4 md:max-w-3xl mx-auto mt-8 sm:mt-16 font-sans">
        <article>
          <div className={markdownStyles["markdown"]}>
            {RichText.render(post.data.blog_title)}
          </div>
          <div className="text-gray-700 mb-6 sm:mb-10 text-center -mt-8">
            <BlogDate dateString={post.first_publication_date} />
          </div>
          <Image
            className="rounded-xl mb-8 sm:mb-10"
            src={post.data.hero_image.url}
            alt={post.data.hero_image.alt}
            width={post.data.hero_image.dimensions.width}
            height={post.data.hero_image.dimensions.height}
          />
          <div className={markdownStyles["markdown"]}>
            {RichText.render(post.data.blog_content)}
          </div>
        </article>
      </main>
    </>
  );
}

export async function getStaticProps(context) {
  const slug = context.params.slug;
  const post = await client.getByUID("blog_post", slug);

  return {
    props: {
      post,
    },
    revalidate: 600,
  };
}

export async function getStaticPaths() {
  const posts = await client.query(
    Prismic.Predicates.at("document.type", "blog_post")
  );

  const paths = posts.results.map((post) => {
    return {
      params: { slug: post.uid },
    };
  });

  return {
    paths,
    fallback: false,
    revalidate: 600,
  };
}
