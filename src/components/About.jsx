import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import {
  FaBrain,
  FaCode,
  FaDatabase,
  FaMobileAlt,
} from 'react-icons/fa';

const specializations = [
  {
    title: 'Web Development',
    description:
      'Responsive full-stack applications using modern frontend, backend and database technologies.',
    icon: FaCode,
  },
  {
    title: 'Mobile & Desktop',
    description:
      'Cross-platform mobile and desktop applications using Flutter, Dart and local databases.',
    icon: FaMobileAlt,
  },
  {
    title: 'AI & Data',
    description:
      'AI-supported features, machine learning concepts, vector search and data-driven software solutions.',
    icon: FaBrain,
  },
];

function About() {
  const sectionBackground = useColorModeValue(
    'gray.50',
    'whiteAlpha.50',
  );

  const cardBackground = useColorModeValue(
    'white',
    'whiteAlpha.100',
  );

  const cardBorder = useColorModeValue(
    'gray.200',
    'whiteAlpha.200',
  );

  const secondaryText = useColorModeValue(
    'gray.600',
    'gray.300',
  );

  const iconBackground = useColorModeValue(
    'blue.50',
    'whiteAlpha.100',
  );

  return (
    <Box
      as="section"
      id="about"
      py={{ base: 16, md: 24 }}
      bg={sectionBackground}
    >
      <Container
        maxW="1200px"
        px={{ base: 5, sm: 6, md: 8 }}
      >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 12, lg: 16 }}
          alignItems="center"
        >
          {/* About text */}
          <VStack
            align={{ base: 'center', lg: 'start' }}
            spacing={6}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Badge
              px={4}
              py={2}
              borderRadius="full"
              colorScheme="cyan"
              fontSize="sm"
              letterSpacing="wide"
            >
              About Me
            </Badge>

            <Heading
              as="h2"
              fontSize={{
                base: '3xl',
                md: '4xl',
                lg: '5xl',
              }}
              lineHeight="1.2"
            >
              Graduate Software Engineer focused on practical solutions
            </Heading>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight="1.9"
              color={secondaryText}
            >
              I am a graduate Software Engineer and developer with experience
              in designing and building web, mobile and desktop applications.
              My academic and practical projects have helped me develop strong
              skills in full-stack development, database design, software
              architecture and application deployment.
            </Text>

            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight="1.9"
              color={secondaryText}
            >
              I enjoy solving real-world problems by turning requirements into
              reliable, responsive and user-friendly software. I am also
              interested in artificial intelligence, data-driven systems,
              cybersecurity and modern cloud deployment technologies.
            </Text>

            <HStack
              spacing={3}
              wrap="wrap"
              justify={{ base: 'center', lg: 'start' }}
            >
              <Badge
                px={4}
                py={2}
                borderRadius="full"
                colorScheme="blue"
              >
                Full-Stack Development
              </Badge>

              <Badge
                px={4}
                py={2}
                borderRadius="full"
                colorScheme="purple"
              >
                Mobile Development
              </Badge>

              <Badge
                px={4}
                py={2}
                borderRadius="full"
                colorScheme="green"
              >
                Database Design
              </Badge>

              <Badge
                px={4}
                py={2}
                borderRadius="full"
                colorScheme="orange"
              >
                AI & Data
              </Badge>
            </HStack>
          </VStack>

          {/* Specialization cards */}
          <SimpleGrid
            columns={{ base: 1, sm: 2 }}
            spacing={5}
          >
            {specializations.map((item, index) => {
              const Icon = item.icon;

              return (
                <Box
                  key={item.title}
                  p={6}
                  bg={cardBackground}
                  border="1px solid"
                  borderColor={cardBorder}
                  borderRadius="2xl"
                  boxShadow="sm"
                  transition="all 0.25s ease"
                  gridColumn={{
                    base: 'auto',
                    sm: index === 2 ? '1 / -1' : 'auto',
                  }}
                  _hover={{
                    transform: 'translateY(-6px)',
                    boxShadow: 'xl',
                    borderColor: 'cyan.400',
                  }}
                >
                  <Box
                    display="inline-flex"
                    alignItems="center"
                    justifyContent="center"
                    width="52px"
                    height="52px"
                    borderRadius="xl"
                    bg={iconBackground}
                    color="cyan.400"
                    mb={5}
                  >
                    <Icon size={24} />
                  </Box>

                  <Heading
                    as="h3"
                    fontSize="xl"
                    mb={3}
                  >
                    {item.title}
                  </Heading>

                  <Text
                    color={secondaryText}
                    lineHeight="1.7"
                  >
                    {item.description}
                  </Text>
                </Box>
              );
            })}

            <Box
              p={6}
              bgGradient="linear(to-br, cyan.400, blue.500, purple.500)"
              color="white"
              borderRadius="2xl"
              gridColumn={{ base: 'auto', sm: '1 / -1' }}
            >
              <HStack
                align="start"
                spacing={4}
              >
                <Box mt={1}>
                  <FaDatabase size={25} />
                </Box>

                <Box>
                  <Heading
                    as="h3"
                    fontSize="xl"
                    mb={2}
                  >
                    Continuous Learning
                  </Heading>

                  <Text lineHeight="1.7">
                    I continuously explore new frameworks, development
                    practices and technologies to improve the quality,
                    security and performance of the applications I build.
                  </Text>
                </Box>
              </HStack>
            </Box>
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default About;