// We import the components we need from Chakra UI
import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  VStack, 
  HStack, 
  Tag,
  Link,
  useColorMode,
  IconButton,
  Image,
  SimpleGrid
} from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Icons!
import profilePic from './assets/profile.png'; // Make sure profile.png is in src/assets/
import { ProjectCard } from './components/ProjectCard.jsx'; // Make sure this path is correct

// === START: Project Data ===
// 1. Change `language` to `languages` and use an array
const projectsData = [
    {
    title: 'CarNeeds.lk',
    description: 'An AI-powered Platform for Buying, Selling, & Renting Vehicles in Sri Lanka.',
    href: 'https://github.com/mrYumeth/car-find-ai-lk', 
    languages: ['TypeScript', 'JavaScript', 'Python', 'HTML', 'CSS'], 
  },
  {
    title: 'Personal Portfolio',
    description: 'This very website! Built with React, Chakra UI, and hosted on GitHub Pages.',
    href: 'https://github.com/mrYumeth/my-portfolio', 
    languages: ['JavaScript', 'HTML'], 
  },
  {
    title: 'Star Events - Contributed Project',
    description: 'A ticket booking website for all kinds of events.',
    href: 'https://github.com/mrYumeth/StarEvents', 
    languages: ['C#', 'HTML', 'CSS', 'Javascript'], 
  },
    {
    title: 'Urban Hotel - Contributed Project',
    description: 'A full-stack hotel management system for booking rooms, managing reservations, and handling hotel operations.',
    href: 'https://github.com/Dhinal2/urban-hotel', 
    languages: ['TypeScript', 'Javascript',], 
  },
    {
    title: 'Banking Bot - Contributed Project',
    description: 'Chatbot designed to assist with common banking queries, built using Java and Natural Language Processing techniques.',
    href: 'https://github.com/Dhinal2/BankingBot', 
    languages: ['Java'], 
  },
];
// === END: Project Data ===


// This is our main App component
function App() {
  // Chakra UI has a built-in hook for dark mode
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box fontSize="xl">

      {/* === HEADER / NAVBAR === */}
      <Box as="header" w="100%" p={4} boxShadow="md" position="sticky" top={0} bg={colorMode === 'light' ? 'white' : 'gray.800'} zIndex={10}>
        <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">
            Yumeth Thenuwara
          </Heading>
          <HStack as="nav" spacing={4}>
            {/* HStack arranges items horizontally */}
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
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
        <VStack spacing={20} as="main" my={10} align="center">

          {/* === ABOUT ME SECTION === */}
          <Box as="section" id="about" textAlign="start" w="100%">
            <VStack spacing={8} align="center">
              <Image
                borderRadius="full"
                boxSize="150px"
                src={profilePic}
                alt="Yumeth Thenuwara"
                border="2px solid"
                borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
                objectFit="cover"
              />
              <Box>
                <Heading as="h2" size="xl" mb={4} textAlign="center">About Me</Heading>
                <Text fontSize="lg" maxW="60ch" mx="auto" textAlign="center">
                  I am a dedicated and motivated individual willing to contribute to the company's growth. 
                  I look forward to becoming an useful asset while sharpening my skills for the betterment of the company.
                </Text>
              </Box>
            </VStack>
          </Box>

          {/* === SKILLS SECTION === */}
          <Box as="section" id="skills" textAlign="start" w="100%">
            <Heading as="h2" size="xl" mb={8} textAlign="center">Skills</Heading>
            <HStack spacing={10} justify="center" wrap="wrap" align="flex-start">
              <VStack>
                <Heading as="h3" size="md">Technical Skills</Heading>
                <Box>
                  {['Database Design', 'Troubleshooting', 'Object-Oriented Programming (OOP)', 'Data Visualization', 'Computing Research'].map((skill) => (
                    <Tag size="lg" colorScheme="blue" m={1} key={skill}>{skill}</Tag>
                  ))}
                </Box>
              </VStack>
              <VStack>
                <Heading as="h3" size="md">Soft Skills</Heading>
                <Box>
                  {['Problem-Solving', 'Teamwork & Collaboration', 'Attention to Detail', 'Adaptability', 'Time Management', 'Creativity'].map((skill) => (
                    <Tag size="lg" colorScheme="green" m={1} key={skill}>{skill}</Tag>
                  ))}
                </Box>
              </VStack>
            </HStack>
          </Box>

          {/* === PROJECTS SECTION (NEW) === */}
          <Box as="section" id="projects" textAlign="center" w="100%">
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              Projects
            </Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={10}>
              {projectsData.map((project) => (
                <ProjectCard
                  key={project.title}
                  title={project.title}
                  description={project.description}
                  href={project.href}
                  languages={project.languages} // <-- 2. Pass the array here
                />
              ))}
            </SimpleGrid>
          </Box>


          {/* === EXPERIENCE SECTION === */}
          <Box as="section" id="experience" textAlign="center" w="100%">
            <Heading as="h2" size="xl" mb={8} textAlign="center">Work Experience</Heading>
            <VStack spacing={5} align="center" maxW="60ch" mx="auto">
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
          <Box as="section" id="education" textAlign="center" w="100%">
            <Heading as="h2" size="xl" mb={8} textAlign="center">Education</Heading>
            <VStack spacing={5} align="center" maxW="60ch" mx="auto">
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
      <Box as="footer" mt={20} p={10} bg={colorMode === 'light' ? 'gray.100' : 'gray.900'} textAlign="center">
        <Heading as="h2" size="lg" mb={4}>Contact Me</Heading>
        <HStack justify="center" spacing={5}>
          <Link href="mailto:yumethindiv123@gmail.com" isExternal>
            <IconButton icon={<FaEnvelope />} aria-label="Email" size="lg" />
          </Link>
          <Link href="https://github.com/mrYumeth" isExternal>
            <IconButton icon={<FaGithub />} aria-label="GitHub" size="lg" />
          </Link>
          <Link href="https://www.linkedin.com/in/yumeth-thenuwara-b87985279" isExternal>
            <IconButton icon={<FaLinkedin />} aria-label="LinkedIn" size="lg" />
          </Link>
        </HStack>
        <Text mt={4} fontSize="md">
          yumethindiv123@gmail.com
        </Text>
        <Text mt={6}>&copy; 2025 Yumeth Thenuwara</Text>
      </Box>

    </Box>
  );
}

export default App;