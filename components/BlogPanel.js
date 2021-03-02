import Link from "next/link";

export default function BlogPanel(props) {
  return (
    <Link href={`/blog/${props.blogSlug}`}>
      <a>
        <div className="font-body text-gray-800 mx-3 my-6">
          <img
            className="object-cover w-full h-40 rounded-xl"
            src={props.blogHeroImage}
            alt={props.blogAltText}
          />
          <p className="text-sm mt-3 px-1">Posted: {props.blogDate}</p>
          <div className="text-xl my-3 px-1 font-semibold">{props.blogTitle}</div>
          <div className="w-10/12 px-1">{props.blogExcerpt}</div>
        </div>
      </a>
    </Link>
  );
}
