const skills = {
  frontend: [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Angular",
    "Redux",
    "Context API",
    "Sass",
    "Webpack",
    "Unit Testing",
    "Tailwind CSS",
    "Restful APIs",
  ],
  backend: ["Node.js", "Express", "GraphQL", "PostgreSQL", "MongoDB", "SQL", "NoSQL", "Microsoft SQL", "Okta"],
  other: ["AWS", "Docker", "Jenkins", "GitHub Actions", "Circle CI", "Bash", "CI/CD Pipelines"],
};

const icons = ["devicon-html5-plain", "devicon-css3-plain", "devicon-javascript-plain", "devicon-react-original", "devicon-sass-original", "devicon-nodejs-plain", "devicon-git-plain", "devicon-android-plain", "devicon-python-plain"]

export default function Skills() {
  return (
    <>
    <section id="skills" className="min-h-[calc(100vh-6rem)] bg-[rgb(250,250,250)]">
      <div className="container mx-auto px-4 pt-24">
        <h1 className="text-2xl font-semi-bold mb-4">My Skills</h1>
        <p className="mb-14">I specialize in Frontend development, but I'm also capable in Backend and DevOps.</p>
        <div>
          <div className="flex flex-wrap gap-2 justify-center md:justify-start">
            {skills.frontend.map((skill) => {
              return <span className="bg-blue-200 text-blue-500 px-4 py-2 rounded-md lg:text-lg font-semibold">{skill}</span>;
            })}
            {skills.backend.map((skill) => (
              <span className="bg-purple-200 text-purple-500 px-4 py-2 rounded-md lg:text-lg font-semibold">{skill}</span>
            ))}
            {skills.backend.map((skill) => (
              <span className="bg-gray-200 text-gray-500 px-4 py-2 rounded-md lg:text-lg font-semibold">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
      <div className="bg-[rgba(240,240,240,1)] p-6">
        <ul className="grid grid-cols-3 gap-6 ">
          {icons.map(icon => (
            <li className=" bg-white text-center text-4xl shadow-lg rounded-md p-3">
              <i className={`${icon} text-[#999]`}></i>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
