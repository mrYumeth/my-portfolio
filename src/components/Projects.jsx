import {
  Badge,
  Box,
  Container,
  Heading,
  SimpleGrid,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import ProjectCard from './ProjectCard';
import { projects } from '../data/projects';

function Projects() {
  const sectionBackground = useColorModeValue(
    'gray.50',
    'whiteAlpha.50',
  );

  const secondaryText = useColorModeValue(
    'gray.600',
    'gray.300',
  );

  return (
    <Box
      as="section"
      id="projects"
      py={{ base: 16, md: 24 }}
      bg={sectionBackground}
    >
      <Container
        maxW="1200px"
        px={{ base: 5, sm: 6, md: 8 }}
      >
        <VStack
          maxW="760px"
          mx="auto"
          mb={{ base: 10, md: 14 }}
          spacing={5}
          textAlign="center"
        >
          <Badge
            px={4}
            py={2}
            borderRadius="full"
            colorScheme="cyan"
            fontSize="sm"
            letterSpacing="wide"
          >
            My Work
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
            Projects that demonstrate my experience
          </Heading>

          <Text
            color={secondaryText}
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight="1.8"
          >
            A selection of web, mobile, desktop and AI-supported
            applications I have designed, developed or contributed to.
          </Text>
        </VStack>

        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            xl: 3,
          }}
          spacing={{ base: 6, md: 8 }}
          alignItems="stretch"
        >
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Projects;