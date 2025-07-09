import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import NavBar from "./components/NavBar";

import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="bg-gradient-to-r from-[rgba(247,247,248,0.5)] to-[var(--color-brand-white)] font-sans text-gray-800 antialiased dark:text-brand-white dark:from-[rgba(16,24,40,0.97)] dark:to-gray-900">
      <Toaster position="top-center" />
      <div id="top" />
      <NavBar />
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className=" bg-brand-navy dark:bg-gray-800 py-6 text-sm text-brand-white-light">
        <ul className="grid grid-cols-2 max-w-xl mx-auto">
          <li className="text-center">
            <a href="https://linkedin.com/in/bradly-lewis" target="_blank" rel="noopener noreferrer" className="underline hover:text-brand-white-dark">
              LinkedIn
            </a>
          </li>
          <li className="text-center">
            <a href="/BRADLY_LEWIS_RESUME.pdf" download className="underline hover:text-brand-white-dark">
              Download Resume
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}

export default App;
