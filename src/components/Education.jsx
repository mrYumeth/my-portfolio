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
  FaCalendarAlt,
  FaCheckCircle,
  FaGraduationCap,
  FaUniversity,
} from 'react-icons/fa';

import { educationData } from '../data/education';

function Education() {
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

  const timelineColor = useColorModeValue(
    'gray.200',
    'whiteAlpha.200',
  );

  const informationBackground = useColorModeValue(
    'gray.100',
    'whiteAlpha.100',
  );

  return (
    <Box
      as="section"
      id="education"
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
            colorScheme="purple"
            fontSize="sm"
            letterSpacing="wide"
          >
            Academic Background
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
            Education and qualifications
          </Heading>

          <Text
            color={secondaryText}
            fontSize={{ base: 'md', md: 'lg' }}
            lineHeight="1.8"
          >
            My education has provided a strong foundation in
            software engineering, computing, databases, security,
            data and artificial intelligence.
          </Text>
        </VStack>

        {/* Education timeline */}
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
          {educationData.map((education) => (
            <HStack
              key={education.qualification}
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
                bgGradient="linear(to-br, purple.400, blue.600)"
                color="white"
                boxShadow="lg"
                zIndex={1}
              >
                <Icon
                  as={FaGraduationCap}
                  boxSize={6}
                />
              </Box>

              {/* Education card */}
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
                  borderColor: 'purple.400',
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
                      {education.qualification}
                    </Heading>

                    <HStack
                      color="purple.400"
                      fontWeight="semibold"
                      align="flex-start"
                    >
                      <FaUniversity />

                      <Text>
                        {education.institution}
                      </Text>
                    </HStack>

                    <Text
                      mt={1}
                      color={secondaryText}
                      fontSize="sm"
                    >
                      {education.provider}
                    </Text>
                  </Box>

                  <VStack
                    align={{ base: 'flex-start', sm: 'flex-end' }}
                    spacing={2}
                  >
                    <HStack
                      px={3}
                      py={2}
                      borderRadius="full"
                      bg={informationBackground}
                      color={secondaryText}
                      fontSize="sm"
                      fontWeight="semibold"
                      whiteSpace="nowrap"
                    >
                      <FaCalendarAlt />

                      <Text>
                        {education.period}
                      </Text>
                    </HStack>

                    <Badge
                      px={3}
                      py={1.5}
                      borderRadius="full"
                      colorScheme="green"
                      display="flex"
                      alignItems="center"
                      gap={2}
                    >
                      <FaCheckCircle />
                      {education.status}
                    </Badge>
                  </VStack>
                </HStack>

                <Text
                  color={secondaryText}
                  lineHeight="1.8"
                  mb={education.subjects.length ? 5 : 0}
                >
                  {education.description}
                </Text>

                {education.subjects.length > 0 && (
                  <Wrap spacing={2}>
                    {education.subjects.map((subject) => (
                      <WrapItem
                        key={`${education.qualification}-${subject}`}
                      >
                        <Tag
                          px={3}
                          py={1.5}
                          borderRadius="full"
                          colorScheme="purple"
                          variant="subtle"
                        >
                          {subject}
                        </Tag>
                      </WrapItem>
                    ))}
                  </Wrap>
                )}
              </Box>
            </HStack>
          ))}
        </VStack>
      </Container>
    </Box>
  );
}

export default Education;