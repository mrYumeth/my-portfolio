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
  SimpleGrid,
  Card, 
  CardHeader,
  CardBody,
  Stack,
  useColorModeValue, 
} from '@chakra-ui/react';
import { FaSun, FaMoon, FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import profilePic from './assets/profile.png';
import { ProjectCard } from './components/ProjectCard.jsx';

// Project Data 
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
    languages: ['TypeScript', 'Javascript'],
  },
  {
    title: 'Banking Bot - Contributed Project',
    description: 'Chatbot designed to assist with common banking queries, built using Java and Natural Language Processing techniques.',
    href: 'https://github.com/Dhinal2/BankingBot',
    languages: ['Java'],
  },
];

// Skills Data 
const technicalSkills = [
  'Object-Oriented Programming (OOP)',
  'Database Design',
  'Data Visualization',
  'Cybersecurity Fundamentals',
  'Software Troubleshooting',
];

const softSkills = [
  'Problem-Solving',
  'Teamwork & Collaboration',
  'Attention to Detail',
  'Adaptability',
  'Time Management',
  'Creativity',
];

// Experience Data 
const experienceData = [
    {
    role: 'Graphic Designer & Sales Representative',
    company: 'Teyara Products',
    date: '2022 - 2025',
  },
  {
    role: 'Graphic Designer',
    company: 'Real Nature Pvt.Ltd',
    date: '2024 - 2025',
  },
];

// Education Data 
const educationData = [
  {
    degree: 'BEng (Hons) in Software Engineering',
    school: 'London Metropolitan University (via Esoft Metro Campus)',
    date: '2025 - Present', 
  },
  {
    degree: 'Higher National Diploma in Computing',
    school: 'University of West London (via American National College)',
    date: '2022 - 2024',
  },
  {
    degree: 'Primary & Secondary Education (GCE O/L)',
    school: 'Benhill College Gampola',
    date: '2011 - 2021',
  },
];

function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  const cardBg = useColorModeValue('gray.50', 'gray.700');

  return (
    <Box fontSize="xl">
      {/* HEADER / NAVBAR */}
      <Box as="header" w="100%" p={4} boxShadow="md" position="sticky" top={0} bg={colorMode === 'light' ? 'white' : 'gray.800'} zIndex={10}>
        <Container maxW="container.lg" display="flex" justifyContent="space-between" alignItems="center">
          <Heading as="h1" size="lg">
            Yumeth Thenuwara
          </Heading>
          <HStack as="nav" spacing={4}>
            <Link href="#skills">Skills</Link>
            <Link href="#projects">Projects</Link>
            <Link href="#experience">Experience</Link>
            <Link href="#education">Education</Link>
            <IconButton
              onClick={toggleColorMode}
              icon={colorMode === 'light' ? <FaMoon /> : <FaSun />}
              aria-label="Toggle dark mode"
            />
          </HStack>
        </Container>
      </Box>

      {/* MAIN CONTENT */}
      <Container maxW="container.lg" p={4}>
        <VStack spacing={20} as="main" my={10} align="center">

          {/* ABOUT ME SECTION */}
          <Box as="section" id="about" w="100%">
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
              <VStack align="center">
                <Image
                  borderRadius="full"
                  boxSize="250px" 
                  src={profilePic}
                  alt="Yumeth Thenuwara"
                  border="4px solid"
                  borderColor={colorMode === 'light' ? 'gray.200' : 'gray.600'}
                  objectFit="cover"
                />
              </VStack>
              <VStack align={{ base: 'center', md: 'start' }} spacing={4} textAlign={{ base: 'center', md: 'start' }}>
                <Heading as="h2" size="xl">
                  About Me
                </Heading>
                <Text fontSize="lg" maxW="60ch">
                  Hello! I'm a final-year Software Engineering student with a passion for building practical, data-driven applications. With a strong foundation from my Higher National Diploma in Computing, I've developed skills in SQL database design, data visualization with Power BI, and cybersecurity fundamentals. I'm a detail-oriented and eager learner, always looking for the next challenge to solve.
                </Text>
              </VStack>
            </SimpleGrid>
          </Box>

          {/* SKILLS SECTION */}
          <Box as="section" id="skills" w="100%">
            <Heading as="h2" size="xl" mb={8} textAlign="center">Skills</Heading>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} maxW="container.md" mx="auto">
              <VStack align="start">
                <Heading as="h3" size="md" mb={2}>Technical Skills</Heading>
                <HStack wrap="wrap" justify="start">
                  {technicalSkills.map((skill) => (
                    <Tag size="lg" colorScheme="blue" m={1} key={skill}>
                      {skill}
                    </Tag>
                  ))}
                </HStack>
              </VStack>
              <VStack align="start">
                <Heading as="h3" size="md" mb={2}>Soft Skills</Heading>
                <HStack wrap="wrap" justify="start">
                  {softSkills.map((skill) => (
                    <Tag size="lg" colorScheme="green" m={1} key={skill}>
                      {skill}
                    </Tag>
                  ))}
                </HStack>
              </VStack>
            </SimpleGrid>
          </Box>

          {/* PROJECTS SECTION */}
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
                  languages={project.languages}
                />
              ))}
            </SimpleGrid>
          </Box>

          {/* EXPERIENCE SECTION */}
          <Box as="section" id="experience" w="100%">
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              Work Experience
            </Heading>
            <Stack spacing={8} maxW="container.md" mx="auto">
              {experienceData.map((job) => (
                <Card key={job.company} variant="outline" bg={cardBg}>
                  <CardHeader>
                    <Heading size="md">{job.role}</Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text fontSize="lg">{job.company}</Text>
                    <Text fontSize="md" color="gray.500">{job.date}</Text>
                  </CardBody>
                </Card>
              ))}
            </Stack>
          </Box>

          {/* EDUCATION SECTION */}
          <Box as="section" id="education" w="100%">
            <Heading as="h2" size="xl" mb={8} textAlign="center">
              Education
            </Heading>
            <Stack spacing={8} maxW="container.md" mx="auto">
              {educationData.map((edu) => (
                <Card key={edu.school} variant="outline" bg={cardBg}>
                  <CardHeader>
                    <Heading size="md">{edu.degree}</Heading>
                  </CardHeader>
                  <CardBody pt={0}>
                    <Text fontSize="lg">{edu.school}</Text>
                    <Text fontSize="md" color="gray.500">{edu.date}</Text>
                  </CardBody>
                </Card>
              ))}
            </Stack>
          </Box>

        </VStack>
      </Container>

      {/* FOOTER / CONTACT */}
      <Box as="footer" mt={20} p={10} bg={colorMode === 'light' ? 'gray.100' : 'gray.900'} textAlign="center">
        <Heading as="h2" size="lg" mb={4}>Contact Me</Heading>
        <HStack justify="center" spacing={5}>
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