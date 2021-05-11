import Link from "next/link";
import Image from "next/image";

export default function BlogPanel(props) {
  return (
    <Link href={`/blog/${props.blogSlug}`}>
        <div className="font-body text-gray-800 mx-3 my-6 cursor-pointer">
          <Image
            className="rounded-xl"
            width={props.blogImageWidth}
            height={props.blogImageHeight}
            src={props.blogHeroImage}
            alt={props.blogAltText}
          />
          <p className="text-sm mt-2 px-1">Posted: {props.blogDate}</p>
          <div className="text-xl my-2 px-1 font-semibold">
            {props.blogTitle}
          </div>
          <div className="w-10/12 px-1">{props.blogExcerpt}</div>
        </div>  
    </Link>
  );
}
