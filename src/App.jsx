import { Box } from '@chakra-ui/react';

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';

function App() {
  return (
    <Box overflowX="hidden">
      <Navbar />

      <main>
        <Hero />
        <About />
      </main>
    </Box>
  );
}

export default App;