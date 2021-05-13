import { client } from "../../utils/prismicClient";
import { RichText } from "prismic-reactjs";
import markdownStyles from "../../styles/markdown-styles.module.css";
import BlogDate from "../../components/BlogDate";
import Meta from "../../components/Meta";
import Image from "next/image";
import Prismic from "prismic-javascript";
import Head from "next/head";

export default function post({ post }) {
  return (
    <>
      <Meta
        title={post.data.blog_title[0].text}
        desc={post.data.blog_excerpt[0].text}
      />
      <Head>
        <meta
          property="og:url"
          content={`https://louierichardson.com/blog/${post.uid}`}
        />
        <meta property="og:image" content={post.data.hero_image.url} />
        <meta property="og:site_name" content="Louie Richardson" />
        <meta property="og:title" content={post.data.blog_title[0].text} />
        <meta
          property="og:description"
          content={post.data.blog_excerpt[0].text}
        />
        <meta name="twitter:card" content={post.data.blog_excerpt[0].text} />
        <meta name="twitter:creator" content="@louie_rich99" />
      </Head>
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
  };
}
