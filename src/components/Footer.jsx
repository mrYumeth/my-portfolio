import {
  Box,
  Container,
  HStack,
  IconButton,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';

import {
  FaArrowUp,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';

import {
  contactDetails,
  emailLink,
  whatsappLink,
} from '../data/contact';

const footerLinks = [
  {
    name: 'About',
    href: '#about',
  },
  {
    name: 'Skills',
    href: '#skills',
  },
  {
    name: 'Projects',
    href: '#projects',
  },
  {
    name: 'Experience',
    href: '#experience',
  },
  {
    name: 'Education',
    href: '#education',
  },
  {
    name: 'Contact',
    href: '#contact',
  },
];

function Footer() {
  const footerBackground = useColorModeValue(
    'gray.100',
    '#050c16',
  );

  const footerBorder = useColorModeValue(
    'gray.200',
    'whiteAlpha.200',
  );

  const secondaryText = useColorModeValue(
    'gray.600',
    'gray.400',
  );

  const iconBackground = useColorModeValue(
    'white',
    'whiteAlpha.100',
  );

  const iconHoverBackground = useColorModeValue(
    'gray.200',
    'whiteAlpha.200',
  );

  return (
    <Box
      as="footer"
      bg={footerBackground}
      borderTop="1px solid"
      borderColor={footerBorder}
      py={{ base: 10, md: 12 }}
    >
      <Container
        maxW="1200px"
        px={{ base: 5, sm: 6, md: 8 }}
      >
        <Stack
          direction={{ base: 'column', lg: 'row' }}
          justifyContent="space-between"
          alignItems={{
            base: 'center',
            lg: 'flex-start',
          }}
          spacing={8}
        >
          <VStack
            align={{ base: 'center', lg: 'start' }}
            textAlign={{ base: 'center', lg: 'left' }}
            spacing={3}
          >
            <Link
              href="#home"
              fontSize="2xl"
              fontWeight="bold"
              _hover={{
                textDecoration: 'none',
              }}
            >
              Yumeth
              <Box
                as="span"
                color="cyan.400"
              >
                .
              </Box>
            </Link>

            <Text
              color={secondaryText}
              maxW="420px"
              lineHeight="1.7"
            >
              Graduate Software Engineer and developer
              building practical web, mobile, desktop and
              AI-supported applications.
            </Text>

            <Text
              color={secondaryText}
              fontSize="sm"
            >
              © {new Date().getFullYear()} Yumeth Thenuwara.
              All rights reserved.
            </Text>
          </VStack>

          <VStack
            align={{ base: 'center', lg: 'flex-end' }}
            spacing={5}
          >
            <HStack
              spacing={5}
              flexWrap="wrap"
              justifyContent="center"
            >
              {footerLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  fontSize="sm"
                  fontWeight="semibold"
                  color={secondaryText}
                  _hover={{
                    color: 'cyan.400',
                    textDecoration: 'none',
                  }}
                >
                  {link.name}
                </Link>
              ))}
            </HStack>

            <HStack spacing={3}>
              <IconButton
                as="a"
                href={contactDetails.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                icon={<FaGithub />}
                borderRadius="full"
                bg={iconBackground}
                _hover={{
                  bg: iconHoverBackground,
                  color: 'cyan.400',
                }}
              />

              <IconButton
                as="a"
                href={contactDetails.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                icon={<FaLinkedin />}
                borderRadius="full"
                bg={iconBackground}
                _hover={{
                  bg: iconHoverBackground,
                  color: 'cyan.400',
                }}
              />

              <IconButton
                as="a"
                href={emailLink}
                aria-label="Email"
                icon={<FaEnvelope />}
                borderRadius="full"
                bg={iconBackground}
                _hover={{
                  bg: iconHoverBackground,
                  color: 'cyan.400',
                }}
              />

              <IconButton
                as="a"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                icon={<FaWhatsapp />}
                borderRadius="full"
                bg={iconBackground}
                _hover={{
                  bg: iconHoverBackground,
                  color: 'cyan.400',
                }}
              />

              <IconButton
                as="a"
                href="#home"
                aria-label="Return to the top"
                icon={<FaArrowUp />}
                borderRadius="full"
                bgGradient="linear(to-r, cyan.400, blue.500)"
                color="white"
                _hover={{
                  transform: 'translateY(-3px)',
                }}
              />
            </HStack>
          </VStack>
        </Stack>
      </Container>
    </Box>
  );
}

export default Footer;