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
    <section id="skills" className="bg-brand-white-light min-h-[calc(100vh-6rem)] md:min-h-[calc(100vh-16rem)] lg:flex lg:flex-column lg:flex-items-center lg:min-h-[calc(100vh-8rem)] dark:bg-gradient-to-r dark:from-[rgba(30,41,57,0.99)] dark:to-gray-800">
      <div className="container mx-auto lg:max-w-6xl px-8 md:px-12 py-24 md:pt-30">
        <h1 className="text-2xl md:text-3xl font-semi-bold mb-4 md:mb-6 lg:mb-8">My Skills</h1>
        <p className="md:text-xl mb-6 md:mb-20 lg:mb-25">I specialize in Frontend development, but I'm also capable in Backend and DevOps.</p>
        <div>
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center md:justify-start md:pb-30">
            {skills.frontend.map((skill, index) => {
              return <span key={index} className="bg-sky-500 text-white dark:bg-brand-red-dark px-4 md:px-6 py-2 md:py-4 md:text-lg lg:text-xl rounded-md font-semibold">{skill}</span>;
            })}
            {skills.backend.map((skill, index) => (
              <span key={index} className="bg-rose-500 text-white dark:bg-brand-blue-dark px-4 md:px-6 py-2 md:py-4 md:text-lg lg:text-xl rounded-md font-semibold">{skill}</span>
            ))}
            {skills.other.map((skill, index) => (
              <span key={index} className="bg-violet-500 text-white dark:bg-gray-700 px-4 md:px-6 py-2 md:py-4 md:text-lg lg:text-xl rounded-md font-semibold">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
      <div className="bg-[rgba(240,240,240,1)] dark:bg-gray-800 p-6 lg:py-16 lg:mb-30">
        <ul className="grid grid-cols-3 md:grid-cols-9 gap-6 lg:flex lg:justify-evenly">
          {icons.map((icon, index) => (
            <li key={index} className="bg-white dark:bg-gray-700 text-center text-4xl md:text-5xl lg:text-6xl shadow-lg rounded-md p-3 lg:p-7">
              <i className={`${icon} text-[#999] dark:text-brand-white-dark`}></i>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
