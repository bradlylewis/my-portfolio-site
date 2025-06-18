import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {

  return (
    <>
      <Hero />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
      <footer className="text-center p-4 bg-gray-800 text-white" />
    </>
  )
}

export default App
