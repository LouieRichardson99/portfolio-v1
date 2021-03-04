export default function SkillsTableMobile() {
    return (
        <table className="text-gray-800 mx-auto mt-8 border-collapse sm:hidden">
            <thead>
                <tr className="border-b-2 border-red-600">
                    <th className="py-3 w-36 text-left font-semibold">Front-end</th>
                    <th className="w-36 text-left font-semibold">Back-end</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="pb-1 pt-3"><i className="devicon-html5-plain mr-2"></i>HTML</td>
                    <td className="pb-1 pt-3"><i className="devicon-nodejs-plain mr-2"></i>Node.js</td>
                </tr>
                <tr>
                    <td className="py-1"><i className="devicon-css3-plain mr-2"></i>CSS</td>
                    <td><i className="devicon-express-original mr-2"></i>Express</td>
                </tr>
                <tr>
                    <td className="py-1"><i className="devicon-javascript-plain mr-2"></i>JavaScript</td>
                </tr>
                <tr>
                    <td className="py-1"><i className="devicon-react-original mr-2"></i>React</td>
                </tr>
                <tr>
                    <td className="py-1"><i className="devicon-react-original mr-2"></i>Next.js</td>
                </tr>
            </tbody>
            <thead>
                <tr className="border-b-2 border-red-600">
                    <th className="w-28 py-3 text-left font-semibold">Database</th>
                    <th className="w-28 text-left font-semibold">Other</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="pb-1 pt-3"><i className="devicon-mysql-plain mr-2"></i>MySQL</td>
                    <td className="pb-1 pt-3"><i className="devicon-git-plain mr-2"></i>Git</td>
                </tr>
                <tr>
                    <td className="py-1"><i className="devicon-mongodb-plain mr-2"></i>MongoDB</td>
                    <td className="py-1"><i className="devicon-css3-plain mr-2"></i>Tailwindcss</td>
                </tr>
            </tbody>
        </table>
    )
}
