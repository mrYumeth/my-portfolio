import { Box } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';

function App() {
  return (
    <Box overflowX="hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Education />
      </main>
    </Box>
  );
}

export default App;