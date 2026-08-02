import { useState } from 'react';

import {
  Badge,
  Box,
  Button,
  Heading,
  HStack,
  Image,
  Tag,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import {
  FaExternalLinkAlt,
  FaGithub,
} from 'react-icons/fa';

function ProjectCard({ project }) {
  const [imageAvailable, setImageAvailable] = useState(
    Boolean(project.image),
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

  const tagBackground = useColorModeValue(
    'gray.100',
    'whiteAlpha.100',
  );

  const sourceButtonBackground = useColorModeValue(
    'gray.100',
    'whiteAlpha.100',
  );
  
  const statusBadgeStyles = {
  Featured: {
    background: 'cyan.300',
    color: 'gray.900',
    borderColor: 'cyan.100',
  },

  'Team Project': {
    background: 'orange.300',
    color: 'gray.900',
    borderColor: 'orange.100',
  },

  Recent: {
    background: 'purple.500',
    color: 'white',
    borderColor: 'purple.200',
  },
};

const currentStatusStyle =
  statusBadgeStyles[project.status] || {
    background: 'gray.600',
    color: 'white',
    borderColor: 'gray.300',
  };

  return (
    <Box
      role="group"
      bg={cardBackground}
      border="1px solid"
      borderColor={cardBorder}
      borderRadius="2xl"
      overflow="hidden"
      boxShadow="sm"
      display="flex"
      flexDirection="column"
      height="100%"
      transition="all 0.3s ease"
      _hover={{
        transform: 'translateY(-8px)',
        boxShadow: '2xl',
        borderColor: 'cyan.400',
      }}
    >
      {/* Project screenshot or gradient placeholder */}
      <Box
        position="relative"
        height={{ base: '210px', md: '220px' }}
        overflow="hidden"
      >
        {imageAvailable ? (
          <Image
            src={project.image}
            alt={`${project.title} project interface`}
            width="100%"
            height="100%"
            objectFit="cover"
            transition="transform 0.4s ease"
            onError={() => setImageAvailable(false)}
            _groupHover={{
              transform: 'scale(1.05)',
            }}
          />
        ) : (
          <Box
            width="100%"
            height="100%"
            bgGradient={project.gradient}
            display="flex"
            alignItems="center"
            justifyContent="center"
            px={6}
          >
            <Heading
              color="white"
              textAlign="center"
              fontSize={{ base: '2xl', md: '3xl' }}
            >
              {project.title}
            </Heading>
          </Box>
        )}

        <Box
          position="absolute"
          inset={0}
          bgGradient="linear(to-t, blackAlpha.600, transparent)"
          pointerEvents="none"
        />

        <Badge
          position="absolute"
          top={4}
          left={4}
          px={3.5}
          py={1.5}
          borderRadius="full"
          background={currentStatusStyle.background}
          color={currentStatusStyle.color}
          border="1px solid"
          borderColor={currentStatusStyle.borderColor}
          boxShadow="0 5px 16px rgba(0, 0, 0, 0.4)"
          fontSize="xs"
          fontWeight="800"
          letterSpacing="wide"
          textTransform="uppercase"
          zIndex={2}
        >
          {project.status}
        </Badge>
      </Box>

      {/* Card content */}
      <VStack
        align="stretch"
        spacing={4}
        p={{ base: 5, md: 6 }}
        flex={1}
      >
        <Box>
          <Text
            color="cyan.400"
            fontSize="sm"
            fontWeight="bold"
            textTransform="uppercase"
            letterSpacing="wide"
            mb={2}
          >
            {project.category}
          </Text>

          <Heading
            as="h3"
            fontSize={{ base: 'xl', md: '2xl' }}
            lineHeight="1.3"
          >
            {project.title}
          </Heading>
        </Box>

        <Text
          color={secondaryText}
          fontSize="sm"
          lineHeight="1.8"
          flex={1}
        >
          {project.description}
        </Text>

        <Wrap spacing={2}>
          {project.technologies.map((technology) => (
            <WrapItem key={`${project.title}-${technology}`}>
              <Tag
                px={3}
                py={1.5}
                bg={tagBackground}
                borderRadius="full"
                fontSize="xs"
                fontWeight="semibold"
              >
                {technology}
              </Tag>
            </WrapItem>
          ))}
        </Wrap>

        <HStack
          spacing={3}
          pt={2}
          width="100%"
        >
          <Button
            as="a"
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            leftIcon={<FaGithub />}
            bg={sourceButtonBackground}
            variant="solid"
            flex={1}
            _hover={{
              transform: 'translateY(-2px)',
            }}
          >
            Source
          </Button>

          {project.demo && (
            <Button
              as="a"
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              leftIcon={<FaExternalLinkAlt />}
              colorScheme="cyan"
              flex={1}
              _hover={{
                transform: 'translateY(-2px)',
              }}
            >
              Live Demo
            </Button>
          )}
        </HStack>
      </VStack>
    </Box>
  );
}

export default ProjectCard;