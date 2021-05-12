import Image from "next/image";
import markdownStyles from "../styles/markdown-styles.module.css";

export default function ProjectPanel(props) {
  return (
    <div className="font-body w-full lg:max-w-sm mb-20 text-gray-800 lg:mb-10">
      <div>
        <Image
          width={props.imageWidth}
          height={props.imageHeight}
          src={props.projectImage}
          alt={props.projectName}
        />
      </div>
      <div className="font-semibold text-xl text-center my-3">
        {props.projectName}
      </div>
      <div className="mx-3 lg:h-96">
        <div className={markdownStyles["markdown"]}>{props.projectDesc}</div>
      </div>
      <div className="p-2">
        <a rel="noopener" target="_blank" href={props.githubLink}>
          <button aria-label="Github link button" className="github-button">
            <i
              aria-hidden
              className="text-3xl block fab fa-github hover:text-red-600"
            ></i>
          </button>
        </a>
        <a rel="noopener" target="_blank" href={props.liveURL}>
          <button className="live-view-button">Live View</button>
        </a>
      </div>
    </div>
  );
}
