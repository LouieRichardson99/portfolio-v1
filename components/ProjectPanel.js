import markdownStyles from "../styles/markdown-styles.module.css";

export default function ProjectPanel(props) {
    return (
        <div className="font-body w-11/12 sm:max-w-sm sm:m-3 mx-auto text-gray-800">
            <div>
                <img
                    src={props.projectImage}
                    alt={props.projectName}
                    className="p-2 mt-3 rounded-xl object-cover w-full h-full overflow-hidden"
                />
            </div>
            <div className="font-semibold text-xl text-center my-3">{props.projectName}</div>
            <div className="mx-3">
                <div className={markdownStyles['markdown']}>{props.projectDesc}</div>
            </div>
            <div className="p-2">
                <a target="_blank" href={props.githubLink}><button className="py-1 px-3 bg-gray-800 text-white rounded-md w-full h-11 mb-2 mx-auto relative block"><i aria-hidden className="text-3xl block fab fa-github hover:text-red-600"></i></button></a>
                <a target="_blank" href={props.liveURL}><button className="py-1 px-3 bg-red-600 rounded-md w-full h-11 mx-auto relative block text-white">Live View</button></a>
            </div>
        </div>
    )
}
