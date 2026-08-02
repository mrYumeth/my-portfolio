import {
  Badge,
  Box,
  Container,
  Heading,
  HStack,
  Icon,
  Tag,
  Text,
  useColorModeValue,
  VStack,
  Wrap,
  WrapItem,
} from '@chakra-ui/react';

import {
  FaBriefcase,
  FaBuilding,
  FaCalendarAlt,
} from 'react-icons/fa';

import { experienceData } from '../data/experience';

function Experience() {
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

  const timelineColor = useColorModeValue(
    'gray.200',
    'whiteAlpha.200',
  );

  const tagBackground = useColorModeValue(
    'white',
    'whiteAlpha.100',
  );

  return (
    <Box
      as="section"
      id="experience"
      py={{ base: 16, md: 24 }}
      bg={sectionBackground}
    >
      <Container
        maxW="1000px"
        px={{ base: 5, sm: 6, md: 8 }}
      >
        {/* Section heading */}
        <VStack
          spacing={5}
          textAlign="center"
          maxW="750px"
          mx="auto"
          mb={{ base: 12, md: 16 }}
        >
          <Badge
            px={4}
            py={2}
            borderRadius="full"
            colorScheme="cyan"
            fontSize="sm"
            letterSpacing="wide"
          >
            Professional Experience
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
            My work experience
          </Heading>

          <Text
            color={secondaryText}
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight="1.8"
          >
            My previous roles helped me develop communication,
            creativity, customer service and professional
            collaboration skills alongside my software engineering
            knowledge.
          </Text>
        </VStack>

        {/* Timeline */}
        <VStack
          align="stretch"
          spacing={8}
          position="relative"
          _before={{
            content: '""',
            position: 'absolute',
            top: '28px',
            bottom: '28px',
            left: '27px',
            width: '2px',
            bg: timelineColor,
          }}
        >
          {experienceData.map((experience) => (
            <HStack
              key={`${experience.company}-${experience.role}`}
              align="flex-start"
              spacing={{ base: 4, md: 6 }}
              position="relative"
            >
              {/* Timeline icon */}
              <Box
                flexShrink={0}
                width="56px"
                height="56px"
                display="flex"
                alignItems="center"
                justifyContent="center"
                borderRadius="full"
                bgGradient="linear(to-br, cyan.400, blue.600)"
                color="white"
                boxShadow="lg"
                zIndex={1}
              >
                <Icon
                  as={FaBriefcase}
                  boxSize={5}
                />
              </Box>

              {/* Experience card */}
              <Box
                flex={1}
                p={{ base: 5, md: 7 }}
                bg={cardBackground}
                border="1px solid"
                borderColor={cardBorder}
                borderRadius="2xl"
                boxShadow="sm"
                transition="all 0.25s ease"
                _hover={{
                  transform: 'translateY(-5px)',
                  boxShadow: 'xl',
                  borderColor: 'cyan.400',
                }}
              >
                <HStack
                  justifyContent="space-between"
                  alignItems="flex-start"
                  flexWrap="wrap"
                  gap={3}
                  mb={4}
                >
                  <Box>
                    <Heading
                      as="h3"
                      fontSize={{ base: 'xl', md: '2xl' }}
                      mb={2}
                    >
                      {experience.role}
                    </Heading>

                    <HStack
                      color="cyan.400"
                      fontWeight="semibold"
                    >
                      <FaBuilding />

                      <Text>
                        {experience.company}
                      </Text>
                    </HStack>
                  </Box>

                  <HStack
                    px={3}
                    py={2}
                    borderRadius="full"
                    bg={tagBackground}
                    color={secondaryText}
                    fontSize="sm"
                    fontWeight="semibold"
                    whiteSpace="nowrap"
                  >
                    <FaCalendarAlt />

                    <Text>
                      {experience.period}
                    </Text>
                  </HStack>
                </HStack>

                <Text
                  color={secondaryText}
                  lineHeight="1.8"
                  mb={5}
                >
                  {experience.description}
                </Text>

                <Wrap spacing={2}>
                  {experience.skills.map((skill) => (
                    <WrapItem
                      key={`${experience.company}-${skill}`}
                    >
                      <Tag
                        px={3}
                        py={1.5}
                        borderRadius="full"
                        colorScheme="cyan"
                        variant="subtle"
                      >
                        {skill}
                      </Tag>
                    </WrapItem>
                  ))}
                </Wrap>
              </Box>
            </HStack>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}

export default Experience;