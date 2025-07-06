export default function Experience() {
  return (
    <section id="experience" className="min-h-[calc(100vh-6rem)] bg-retro-offwhite flex">
      <div className="container mx-auto py-24 lg:max-w-6xl">
        <h1 className="text-2xl px-8 md:text-4xl font-semi-bold mb-4 md:mb-6 lg:mb-8">Work History</h1>
        <ul className="border-l-4 border-retro-teal pl-8 space-y-10">
          <li>
            <div className="text-retro-teal font-bold text-lg">Senior Applications Developer</div>
            <div className="text-retro-purple font-semibold">Leon County Schools</div>
            <div className="text-retro-blue text-sm">May 2025 – Present</div>
          </li>
          <li>
            <div className="text-retro-teal font-bold text-lg">Senior Full-stack Developer</div>
            <div className="text-retro-purple font-semibold">NTT Data</div>
            <div className="text-retro-blue text-sm">Jan 2023 – Jan 2025</div>
          </li>
          <li>
            <div className="text-retro-teal font-bold text-lg">Frontend Developer</div>
            <div className="text-retro-purple font-semibold">Nexient</div>
            <div className="text-retro-blue text-sm">Jan 2022 – Jan 2023</div>
          </li>
          <li>
            <div className="text-retro-teal font-bold text-lg">Systems Developer</div>
            <div className="text-retro-purple font-semibold">State of Florida, DMS</div>
            <div className="text-retro-blue text-sm">Dec 2019 – Jan 2022</div>
          </li>
          <li>
            <div className="text-retro-teal font-bold text-lg">Senior Network Technician</div>
            <div className="text-retro-purple font-semibold">Comcast</div>
            <div className="text-retro-blue text-sm">June 2015 – Dec 2019</div>
          </li>
        </ul>
      </div>
    </section>
  );
}
