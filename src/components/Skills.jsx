import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Tag,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import { skillCategories } from '../data/skills';

function Skills() {
  const sectionBackground = useColorModeValue(
    'white',
    '#07111f',
  );

  const cardBackground = useColorModeValue(
    'gray.50',
    'whiteAlpha.50',
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
    'white',
    'whiteAlpha.100',
  );

  const tagBorder = useColorModeValue(
    'gray.200',
    'whiteAlpha.200',
  );

  return (
    <Box
      as="section"
      id="skills"
      py={{ base: 16, md: 24 }}
      bg={sectionBackground}
    >
      <Container
        maxW="1200px"
        px={{ base: 5, sm: 6, md: 8 }}
      >
        {/* Section heading */}
        <VStack
          spacing={5}
          textAlign="center"
          maxW="750px"
          mx="auto"
          mb={{ base: 10, md: 14 }}
        >
          <Badge
            px={4}
            py={2}
            borderRadius="full"
            colorScheme="cyan"
            fontSize="sm"
            letterSpacing="wide"
          >
            My Technical Skills
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
            Technologies I use to build software
          </Heading>

          <Text
            color={secondaryText}
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight="1.8"
          >
            My experience covers frontend, backend, mobile, desktop,
            database and cloud technologies used to develop complete
            software solutions.
          </Text>
        </VStack>

        {/* Skill category cards */}
        <SimpleGrid
          columns={{
            base: 1,
            md: 2,
            xl: 3,
          }}
          spacing={{ base: 5, md: 7 }}
        >
          {skillCategories.map((category) => {
            const CategoryIcon = category.icon;

            return (
              <Box
                key={category.title}
                p={{ base: 5, md: 6 }}
                bg={cardBackground}
                border="1px solid"
                borderColor={cardBorder}
                borderRadius="2xl"
                boxShadow="sm"
                transition="all 0.25s ease"
                _hover={{
                  transform: 'translateY(-7px)',
                  boxShadow: 'xl',
                  borderColor: 'cyan.400',
                }}
              >
                <HStack
                  align="flex-start"
                  spacing={4}
                  mb={5}
                >
                  <Box
                    flexShrink={0}
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    width="54px"
                    height="54px"
                    borderRadius="xl"
                    bgGradient={category.gradient}
                    color="white"
                    boxShadow="md"
                  >
                    <Icon
                      as={CategoryIcon}
                      boxSize={6}
                    />
                  </Box>

                  <Box>
                    <Heading
                      as="h3"
                      fontSize="xl"
                      mb={2}
                    >
                      {category.title}
                    </Heading>

                    <Text
                      color={secondaryText}
                      fontSize="sm"
                      lineHeight="1.7"
                    >
                      {category.description}
                    </Text>
                  </Box>
                </HStack>

                <HStack
                  spacing={2}
                  flexWrap="wrap"
                  align="flex-start"
                >
                  {category.skills.map((skill) => (
                    <Tag
                      key={`${category.title}-${skill}`}
                      px={3}
                      py={2}
                      mb={2}
                      borderRadius="full"
                      bg={tagBackground}
                      border="1px solid"
                      borderColor={tagBorder}
                      fontWeight="medium"
                      transition="all 0.2s ease"
                      _hover={{
                        borderColor: 'cyan.400',
                        color: 'cyan.400',
                        transform: 'translateY(-2px)',
                      }}
                    >
                      {skill}
                    </Tag>
                  ))}
                </HStack>
              </Box>
            );
          })}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Skills;