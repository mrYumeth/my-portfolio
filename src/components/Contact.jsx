import {
  Badge,
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Icon,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import {
  FaArrowRight,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaMapMarkerAlt,
  FaWhatsapp,
} from 'react-icons/fa';

import {
  contactDetails,
  emailLink,
  whatsappLink,
} from '../data/contact';

const contactMethods = [
  {
    title: 'Email',
    value: contactDetails.email,
    href: emailLink,
    icon: FaEnvelope,
  },
  {
    title: 'WhatsApp',
    value: 'Send me a message',
    href: whatsappLink,
    icon: FaWhatsapp,
  },
  {
    title: 'LinkedIn',
    value: 'Connect professionally',
    href: contactDetails.linkedin,
    icon: FaLinkedin,
  },
  {
    title: 'GitHub',
    value: 'View my repositories',
    href: contactDetails.github,
    icon: FaGithub,
  },
];

function Contact() {
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

  const iconBackground = useColorModeValue(
    'white',
    'whiteAlpha.100',
  );

  return (
    <Box
      as="section"
      id="contact"
      py={{ base: 16, md: 24 }}
      bg={sectionBackground}
      position="relative"
      overflow="hidden"
    >
      {/* Decorative glow */}
      <Box
        position="absolute"
        width="420px"
        height="420px"
        borderRadius="full"
        bgGradient="linear(to-br, cyan.400, blue.500, purple.500)"
        opacity="0.12"
        filter="blur(100px)"
        right="-180px"
        bottom="-180px"
        pointerEvents="none"
      />

      <Container
        maxW="1200px"
        px={{ base: 5, sm: 6, md: 8 }}
        position="relative"
      >
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 12, lg: 16 }}
          alignItems="center"
        >
          {/* Contact introduction */}
          <VStack
            align={{ base: 'center', lg: 'start' }}
            textAlign={{ base: 'center', lg: 'left' }}
            spacing={6}
          >
            <Badge
              px={4}
              py={2}
              borderRadius="full"
              colorScheme="cyan"
              fontSize="sm"
              letterSpacing="wide"
            >
              Contact Me
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
              Let&apos;s build something useful together
            </Heading>

            <Text
              color={secondaryText}
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight="1.9"
              maxW="620px"
            >
              Feel free to contact me regarding software development,
              professional opportunities, collaborations or project
              discussions. The quickest way to reach me is through
              email or WhatsApp.
            </Text>

            <HStack
              color={secondaryText}
              fontWeight="semibold"
            >
              <FaMapMarkerAlt />

              <Text>
                Based in {contactDetails.location}
              </Text>
            </HStack>

            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              width={{ base: '100%', sm: 'auto' }}
            >
              <Button
                as="a"
                href={emailLink}
                size="lg"
                width={{ base: '100%', sm: 'auto' }}
                leftIcon={<FaEnvelope />}
                rightIcon={<FaArrowRight />}
                bgGradient="linear(to-r, cyan.400, blue.500)"
                color="white"
                _hover={{
                  bgGradient:
                    'linear(to-r, cyan.500, blue.600)',
                  transform: 'translateY(-3px)',
                }}
                transition="all 0.2s ease"
              >
                Email Me
              </Button>

              <Button
                as="a"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                size="lg"
                width={{ base: '100%', sm: 'auto' }}
                leftIcon={<FaWhatsapp />}
                variant="outline"
                _hover={{
                  transform: 'translateY(-3px)',
                }}
                transition="all 0.2s ease"
              >
                WhatsApp
              </Button>
            </Stack>
          </VStack>

          {/* Contact method cards */}
          <SimpleGrid
            columns={{ base: 1, sm: 2 }}
            spacing={5}
          >
            {contactMethods.map((method) => (
              <Box
                key={method.title}
                as="a"
                href={method.href}
                target={
                  method.title === 'Email'
                    ? undefined
                    : '_blank'
                }
                rel={
                  method.title === 'Email'
                    ? undefined
                    : 'noopener noreferrer'
                }
                p={6}
                bg={cardBackground}
                border="1px solid"
                borderColor={cardBorder}
                borderRadius="2xl"
                boxShadow="sm"
                textDecoration="none"
                transition="all 0.25s ease"
                _hover={{
                  transform: 'translateY(-6px)',
                  boxShadow: 'xl',
                  borderColor: 'cyan.400',
                  textDecoration: 'none',
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
                  <Icon
                    as={method.icon}
                    boxSize={6}
                  />
                </Box>

                <Heading
                  as="h3"
                  fontSize="xl"
                  mb={2}
                >
                  {method.title}
                </Heading>

                <Text
                  color={secondaryText}
                  fontSize="sm"
                  lineHeight="1.7"
                  wordBreak="break-word"
                >
                  {method.value}
                </Text>
              </Box>
            ))}
          </SimpleGrid>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Contact;