const employementHistory = [
  {
    title: "Senior Applications Developer",
    company: "Leon County Schools",
    date: "May 2025 - Present",
  },
  {
    title: "Senior Full-stack Developer",
    company: "NTT Data",
    date: "Jan 2023 - Jan 2025",
  },
  {
    title: "Frontend Developer",
    company: "Nexient",
    date: "Jan 2022 - Jan 2023",
  },
  {
    title: "Systems Developer",
    company: "State of Florida, DMS",
    date: "Dec 2019 - Jan 2022",
  },
  {
    title: "Senior Network Technician",
    company: "Comcast",
    date: "June 2015 - Dec 2019",
  },
]

export default function Experience() {
  return (
    <section id="experience" className="min-h-[calc(100vh-6rem)] bg-brand-white-light dark:bg-gray-800 flex dark:bg-gradient-to-r dark:from-[rgba(30,41,57,0.99)] dark:to-gray-800">
      <div className="container mx-auto py-24 lg:max-w-6xl md:pt-30">
        <h1 className="text-2xl px-8 md:text-3xl mb-7 md:mb-12">Work History</h1>
        <ul className="border-l-4 border-brand-blue-dark px-4 md:pr-8 ml-8 space-y-10 md:space-y-12">
          {employementHistory.map((job, index) => (
            <li key={index} className="flex flex-col md:flex-row md:justify-between">
              <div>
                <div className="text-black dark:text-brand-white-dark font-bold text-lg">{job.title}</div>
                <div className="text-gray-700 dark:text-gray-300 font-semibold">{job.company}</div>
              </div>
              <div className="text-brand-blue font-semibold text-sm md:text-right min-w-[150px]">{job.date}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
