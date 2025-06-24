export default function Hero() {
  return (
    <section id="hero" className="h-[calc(100vh-4rem)] flex items-center flex-column">
      <div className="container mx-auto max-w-6xl px-10">
        <h1 className="text-3xl font-bold">Hi, I'm Bradly</h1>
        <p className="text-lg font-bold">Frontend-focused Full Stack Developer</p>
        <p className="text-4xl">I build experiences your users — and your stakeholders — can be proud of.</p>
        <div className="mt-5">
          <a href="#projects" className="bg-teal-500 text-white px-5 py-2 rounded hover:bg-teal-600 mr-2 transition">View My Projects</a>
          <a href="#contact" className="border border-teal-500 px-5 py-2 rounded text-teal-500 hover:bg-gray-50 transition">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
