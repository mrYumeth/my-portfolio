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

        <AnimatedSection direction="up">
          <About />
        </AnimatedSection>

        <AnimatedSection direction="up">
          <Skills />
        </AnimatedSection>

        <AnimatedSection direction="up">
          <Projects />
        </AnimatedSection>

        <AnimatedSection direction="left">
          <Experience />
        </AnimatedSection>

        <AnimatedSection direction="right">
          <Education />
        </AnimatedSection>

        <AnimatedSection direction="up">
          <Contact />
        </AnimatedSection>
      </main>

      <WhatsAppButton />
      <Footer />
    </Box>
  );
}

export default App;