import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div id="top" />
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="bg-teal-500 mt-20 py-6 text-center text-sm text-gray-700">
        <p>
          <a href="https://linkedin.com/in/bradly-lewis" target="_blank" rel="noopener noreferrer" className="underline hover:text-gray-900">
            LinkedIn
          </a>
          <a href="/Bradly-Lewis-Resume.pdf" download className="underline hover:text-gray-900">
            Download Resume
          </a>
        </p>
      </footer>
    </>
  );
}

export default App;
