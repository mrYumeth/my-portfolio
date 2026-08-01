import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  IconButton,
  Image,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from '@chakra-ui/react';

import {
  FaArrowDown,
  FaEnvelope,
  FaGithub,
  FaLinkedin,
  FaWhatsapp,
} from 'react-icons/fa';

import profileImage from '../assets/profile/profile.png';

function Hero() {
  const secondaryTextColor = useColorModeValue('gray.600', 'gray.300');
  const imageBorderColor = useColorModeValue('gray.200', 'whiteAlpha.300');
  const backgroundGlow = useColorModeValue(
    'rgba(49, 130, 206, 0.18)',
    'rgba(0, 214, 255, 0.15)',
  );

  const whatsappNumber = '94776939608';

  const whatsappMessage = encodeURIComponent(
    'Hi Yumeth, I visited your portfolio and would like to connect with you.',
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  const socialButtonBg = useColorModeValue(
  'gray.100',
  'whiteAlpha.200',
);

const socialButtonHoverBg = useColorModeValue(
  'gray.200',
  'whiteAlpha.300',
);

const socialIconColor = useColorModeValue(
  'gray.800',
  'white',
);

  return (
    <Box
      as="section"
      id="home"
      position="relative"
      overflow="hidden"
      minHeight={{ base: 'auto', lg: '90vh' }}
      display="flex"
      alignItems="center"
      py={{ base: 16, md: 20, lg: 24 }}
    >
      {/* Decorative background glow */}
      <Box
        position="absolute"
        top={{ base: '5%', lg: '10%' }}
        right={{ base: '-150px', lg: '-80px' }}
        width={{ base: '300px', lg: '500px' }}
        height={{ base: '300px', lg: '500px' }}
        borderRadius="full"
        background={backgroundGlow}
        filter="blur(90px)"
        pointerEvents="none"
      />

      <Container maxW="1200px" px={{ base: 5, sm: 6, md: 8 }}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 10, lg: 16 }}
          alignItems="center"
        >
          {/* Introduction */}
          <VStack
            order={{ base: 2, lg: 1 }}
            align={{ base: 'center', lg: 'start' }}
            spacing={6}
            textAlign={{ base: 'center', lg: 'left' }}
          >
            <Text
              fontSize={{ base: 'md', md: 'lg' }}
              fontWeight="bold"
              letterSpacing="wide"
              textTransform="uppercase"
              bgGradient="linear(to-r, cyan.400, purple.400)"
              bgClip="text"
            >
              Hello, I&apos;m
            </Text>

            <Heading
              as="h1"
              fontSize={{
                base: '4xl',
                sm: '5xl',
                md: '6xl',
                lg: '7xl',
              }}
              lineHeight="1.05"
              letterSpacing="tight"
            >
              Yumeth Thenuwara
            </Heading>

            <Heading
              as="h2"
              fontSize={{
                base: 'xl',
                sm: '2xl',
                md: '3xl',
              }}
              fontWeight="semibold"
              bgGradient="linear(to-r, cyan.400, blue.500, purple.500)"
              bgClip="text"
            >
              Graduate Software Engineer & Developer
            </Heading>

            <Text
              maxW="650px"
              fontSize={{ base: 'md', md: 'lg' }}
              lineHeight="1.8"
              color={secondaryTextColor}
            >
                I am a graduate Software Engineer and developer with experience in
                building web, mobile, desktop and AI-supported applications. I enjoy
                transforming real-world requirements into responsive, reliable and
                user-friendly software solutions.
            </Text>

            {/* Main action buttons */}
            <Stack
              direction={{ base: 'column', sm: 'row' }}
              spacing={4}
              width={{ base: '100%', sm: 'auto' }}
            >
              <Button
                as="a"
                href="#projects"
                size="lg"
                width={{ base: '100%', sm: 'auto' }}
                rightIcon={<FaArrowDown />}
                bgGradient="linear(to-r, cyan.400, blue.500)"
                color="white"
                _hover={{
                  bgGradient: 'linear(to-r, cyan.500, blue.600)',
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.2s ease"
              >
                View My Projects
              </Button>

              <Button
                as="a"
                href="#contact"
                size="lg"
                width={{ base: '100%', sm: 'auto' }}
                variant="outline"
                leftIcon={<FaEnvelope />}
                _hover={{
                  transform: 'translateY(-2px)',
                }}
                transition="all 0.2s ease"
              >
                Contact Me
              </Button>
            </Stack>

            {/* Social links */}
            <HStack spacing={3} pt={2}>
            <IconButton
                as="a"
                href="https://github.com/mrYumeth"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Yumeth's GitHub profile"
                icon={<FaGithub />}
                borderRadius="full"
                size="lg"
                bg={socialButtonBg}
                color={socialIconColor}
                _hover={{
                bg: socialButtonHoverBg,
                transform: 'translateY(-3px)',
                }}
                transition="all 0.2s ease"
            />

            <IconButton
                as="a"
                href="https://www.linkedin.com/in/yumeth-thenuwara-b87985279"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Yumeth's LinkedIn profile"
                icon={<FaLinkedin />}
                borderRadius="full"
                size="lg"
                bg={socialButtonBg}
                color={socialIconColor}
                _hover={{
                bg: socialButtonHoverBg,
                transform: 'translateY(-3px)',
                }}
                transition="all 0.2s ease"
            />

            <IconButton
                as="a"
                href="mailto:yumethindiv123@gmail.com"
                aria-label="Email Yumeth"
                icon={<FaEnvelope />}
                borderRadius="full"
                size="lg"
                bg={socialButtonBg}
                color={socialIconColor}
                _hover={{
                bg: socialButtonHoverBg,
                transform: 'translateY(-3px)',
                }}
                transition="all 0.2s ease"
            />

            <IconButton
                as="a"
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Contact Yumeth through WhatsApp"
                icon={<FaWhatsapp />}
                borderRadius="full"
                size="lg"
                bg={socialButtonBg}
                color={socialIconColor}
                _hover={{
                bg: socialButtonHoverBg,
                transform: 'translateY(-3px)',
                }}
                transition="all 0.2s ease"
            />
            </HStack>
          </VStack>

          {/* Profile image */}
          <Box
            order={{ base: 1, lg: 2 }}
            display="flex"
            justifyContent="center"
            position="relative"
          >
            <Box
              position="absolute"
              width={{ base: '230px', md: '330px' }}
              height={{ base: '230px', md: '330px' }}
              borderRadius="full"
              bgGradient="linear(to-br, cyan.400, blue.500, purple.500)"
              filter="blur(25px)"
              opacity="0.35"
            />

            <Image
              src={profileImage}
              alt="Yumeth Thenuwara"
              width={{ base: '220px', sm: '260px', md: '320px' }}
              height={{ base: '220px', sm: '260px', md: '320px' }}
              borderRadius="full"
              objectFit="cover"
              position="relative"
              border="5px solid"
              borderColor={imageBorderColor}
              boxShadow="0 25px 60px rgba(0, 0, 0, 0.35)"
            />
          </Box>
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Hero;