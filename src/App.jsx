import { Box } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import AnimatedSection from './components/AnimatedSection';

function App() {
  return (
    <Box overflowX="hidden">
      <Navbar />

      <main>
        <Hero />

        <AnimatedSection
          direction="up"
          duration={0.75}
        >
          <About />
        </AnimatedSection>

        <AnimatedSection
          direction="left"
          duration={0.75}
        >
          <Skills />
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          distance={25}
          scale={1}
        >
          <Projects />
        </AnimatedSection>

        <AnimatedSection
          direction="left"
          duration={0.75}
        >
          <Experience />
        </AnimatedSection>

        <AnimatedSection
          direction="right"
          duration={0.75}
        >
          <Education />
        </AnimatedSection>

        <AnimatedSection
          direction="up"
          duration={0.8}
        >
          <Contact />
        </AnimatedSection>
      </main>

      <WhatsAppButton />
      <Footer />
    </Box>
  );
}

export default App;