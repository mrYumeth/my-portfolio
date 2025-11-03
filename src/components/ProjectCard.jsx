import {
  Box,
  Heading,
  Text,
  Link,
  HStack,
  useColorModeValue,
} from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';

// Adding colors to the map
const languageColors = {
  javascript: 'yellow.400',
  typescript: 'blue.500',
  python: 'blue.200',
  java: 'orange.400',
  csharp: 'green.500',
  sql: 'red.400',
  react: 'cyan.400',
  css: 'purple.400', 
  html: 'orange.500', 
  default: 'green.500',
};

// 2. Change the prop from `language` to `languages`
export const ProjectCard = ({ title, description, href, languages }) => {
  const cardBg = useColorModeValue('white', 'gray.800');

  return (
    <Link
      href={href}
      isExternal
      _hover={{ textDecoration: 'none' }}
      role="group"
    >
      <Box
        p={5}
        shadow="md"
        borderWidth="1px"
        borderRadius="lg"
        bg={cardBg}
        transition="all 0.2s"
        _hover={{ shadow: 'lg', transform: 'translateY(-2px)' }}
        height="100%" 
        display="flex"
        flexDirection="column"
        justifyContent="space-between" 
      >
        <Box>
          <HStack justify="space-between" mb={3}>
            <Heading fontSize="xl" as="h3">{title}</Heading>
            <FaGithub size="1.2em" />
          </HStack>
          <Text mb={4}>{description}</Text>
        </Box>

        {/* 3. Check if the `languages` array exists and map over it */}
        {languages && languages.length > 0 && (
          <HStack spacing={4} wrap="wrap"> {/* This HStack will wrap languages to the next line if needed */}
            {languages.map((lang) => {
              // Get color for this specific language
              const langColor =
                languageColors[lang?.toLowerCase()] || languageColors.default;

              return (
                <HStack key={lang} spacing={2} align="center">
                  <Box as="span" h="12px" w="12px" borderRadius="full" bg={langColor} />
                  <Text fontSize="sm" fontWeight="medium">
                    {lang}
                  </Text>
                </HStack>
              );
            })}
          </HStack>
        )}
      </Box>
    </Link>
  );
};