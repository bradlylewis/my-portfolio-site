export default function Hero() {
  return (
    <section id="hero" className="min-h-[calc(100vh-4rem)] dark:text-brand-white flex items-center flex-column">
      <div className="container mx-auto lg:max-w-6xl px-8 md:px-12">
        <h1 className="text-3xl lg:text-5xl font-semi-bold lg:mb-3">Hi, I'm <span className="text-brand-blue dark:text-brand-yellow">Bradly</span></h1>
        <p className="text-lg lg:text-2xl font-semi-bold mb-5 lg:mb-9">A Frontend-focused Full Stack developer.</p>
        <p className="text-4xl pb-8 lg:text-5xl tracking-wide">Built and launched 15+ features for tens of millions of users.</p>
        <div className="flex flex-col md:flex-row gap-4 text-center mt-16 pb-8 md:pb-0">
          <a href="#projects" className="bg-brand-blue text-white py-5 md:py-4 md:px-8 rounded font-bold hover:bg-brand-blue-dark transition">View My Projects</a>
          <a href="#contact" className="border-2 border-brand-blue py-5 md:py-4 md:px-8 rounded font-bold text-brand-blue hover:bg-brand-ice-dark transition">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
