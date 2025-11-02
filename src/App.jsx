// We import the components we need from Chakra UI
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  Button, 
  VStack, 
  HStack, 
  Tag,
  Link,
  useColorMode,
  IconButton
} from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Icons!

// This is our main App component
function App() {
  // Chakra UI has a built-in hook for dark mode
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    // Box is like a <div>. We set the text alignment for the whole page.
    <Box textAlign="center" fontSize="xl">

      {/* === HEADER / NAVBAR === */}
      <Box as="header" w="100%" p={4} boxShadow="md" position="sticky" top={0} bg={colorMode === 'light' ? 'white' : 'gray.800'} zIndex={10}>
        <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">
            Yumeth Thenuwara
          </Heading>
          <HStack as="nav" spacing={4}>
            {/* HStack arranges items horizontally */}
            <Link href="#skills">Skills</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#education">Education</Link>
            {/* This is our dark mode toggle button! */}
            <IconButton
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              aria-label="Toggle dark mode"
            />
          </HStack>
        </Container>
      </Box>

      {/* === MAIN CONTENT === */}
      <Container maxW="container.lg" p={4}>
        {/* VStack arranges items vertically */}
        <VStack spacing={20} as="main" my={10}>

          {/* === ABOUT ME SECTION === */}
          <Box as="section" id="about">
            <Heading as="h2" size="xl" mb={4}>About Me</Heading>
            <Text fontSize="lg" maxW="60ch" mx="auto">
              I am a dedicated and motivated individual willing to contribute to the company's growth. 
              I look forward to becoming a useful asset while sharpening my skills for the betterment of the company.
            </Text>
          </Box>

          {/* === SKILLS SECTION === */}
          <Box as="section" id="skills">
            <Heading as="h2" size="xl" mb={8}>Skills</Heading>
            <HStack spacing={10} justify="center" wrap="wrap">
              <VStack>
                <Heading as="h3" size="md">Technical Skills</Heading>
                <Box>
                  {['Database Design (SQL)', 'Cybersecurity Fundamentals', 'Power BI', 'Troubleshooting'].map((skill) => (
                    <Tag size="lg" colorScheme="blue" m={1} key={skill}>{skill}</Tag>
                  ))}
                </Box>
              </VStack>
              <VStack>
                <Heading as="h3" size="md">Soft Skills</Heading>
                <Box>
                  {['Communication', 'Eager to Learn', 'Attention to Detail'].map((skill) => (
                    <Tag size="lg" colorScheme="green" m={1} key={skill}>{skill}</Tag>
                  ))}
                </Box>
              </VStack>
            </HStack>
          </Box>

          {/* === EXPERIENCE SECTION === */}
          <Box as="section" id="experience">
            <Heading as="h2" size="xl" mb={8}>Work Experience</Heading>
            <VStack spacing={5}>
              <Box>
                <Heading as="h3" size="md">Graphic Designer & Sales Representative</Heading>
                <Text><strong>Teyara Products</strong> | 2022 - 2024</Text>
              </Box>
              <Box>
                <Heading as="h3" size="md">Graphic Designer</Heading>
                <Text><strong>Real Nature Pvt.Ltd</strong> | 2024 - 2025</Text>
              </Box>
            </VStack>
          </Box>

          {/* === EDUCATION SECTION === */}
          <Box as="section" id="education">
            <Heading as="h2" size="xl" mb={8}>Education</Heading>
            <VStack spacing={5}>
              <Box>
                <Heading as="h3" size="md">BEng (Hons) in Software Engineering</Heading>
                <Text>London Metropolitan University (Esoft Metro Campus)</Text>
              </Box>
              <Box>
                <Heading as="h3" size="md">Higher National Diploma in Computing</Heading>
                <Text>University of West London (American National College)</Text>
              </Box>
            </VStack>
          </Box>

        </VStack>
      </Container>

      {/* === FOOTER / CONTACT === */}
      <Box as="footer" mt={20} p={10} bg={colorMode === 'light' ? 'gray.100' : 'gray.900'}>
        <Heading as="h2" size="lg" mb={4}>Contact Me</Heading>
        <HStack justify="center" spacing={5}>
          <Link href="mailto:yumethindiv123@gmail.com" isExternal>
            <IconButton icon={<FaEnvelope />} aria-label="Email" size="lg" />
          </Link>
          {/* We'll add GitHub/LinkedIn later, but this is where they'd go */}
          {/* <Link href="https://github.com/your-username" isExternal>
            <IconButton icon={<FaGithub />} aria-label="GitHub" size="lg" />
          </Link> */}
        </HStack>
        <Text mt={6}>&copy; 2025 Yumeth Thenuwara</Text>
      </Box>

    </Box>
  );
}

export default App;