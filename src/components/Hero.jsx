export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] flex items-center flex-column">
      <div className="container mx-auto lg:max-w-6xl px-8 md:px-12">
        <h1 className="text-3xl lg:text-5xl font-semi-bold lg:mb-3">Hi, I'm Bradly</h1>
        <p className="text-lg lg:text-2xl font-semi-bold mb-5 lg:mb-9">A Frontend-focused Full Stack developer.</p>
        <p className="text-4xl lg:text-5xl tracking-wide">I build experiences your users and stakeholders can be proud of.</p>
        <div className="flex flex-col md:flex-row gap-4 text-center mt-24">
          <a href="#projects" className="bg-teal-500 text-white py-5 md:py-4 md:px-8 rounded font-bold hover:bg-teal-600 transition">View My Projects</a>
          <a href="#contact" className="border-2 border-teal-500 py-5 md:py-4 md:px-8 rounded font-bold text-teal-500 hover:bg-gray-50 transition">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
