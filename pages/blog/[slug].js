import { client } from "../../utils/prismicClient";
import { RichText } from "prismic-reactjs";
import markdownStyles from "../../styles/markdown-styles.module.css";
import BlogDate from "../../components/BlogDate";
import Meta from "../../components/Meta";
import Image from "next/image";

export default function post({ post }) {
  return (
    <div>
      <Meta title={post.data.blog_title[0].text} desc={post.data.blog_excerpt[0].text} />
      <div className="w-10/12 sm:w-3/4 md:max-w-3xl mx-auto mt-8 sm:mt-16 font-body">
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
      </div>
    </div>
  );
}

export async function getServerSideProps({ query }) {
  const post = await client.getByUID("blog_post", query.slug);

  return {
    props: {
      post,
    },
  };
}
