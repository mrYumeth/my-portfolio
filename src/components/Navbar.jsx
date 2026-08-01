import {
  Box,
  Container,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  HStack,
  IconButton,
  Link,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';

import {
  FaBars,
  FaMoon,
  FaSun,
} from 'react-icons/fa';

const navigationLinks = [
  {
    name: 'Home',
    href: '#home',
  },
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

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  const navbarBackground = useColorModeValue(
    'rgba(255, 255, 255, 0.85)',
    'rgba(7, 17, 31, 0.85)',
  );

  const borderColor = useColorModeValue(
    'blackAlpha.200',
    'whiteAlpha.200',
  );

  const hoverColor = useColorModeValue(
    'blue.600',
    'cyan.300',
  );

  const mobileMenuBackground = useColorModeValue(
    'white',
    '#07111f',
  );

  const mobileLinkHoverBackground = useColorModeValue(
    'blackAlpha.50',
    'whiteAlpha.100',
  );

  return (
    <>
      <Box
        as="header"
        position="sticky"
        top={0}
        width="100%"
        zIndex={1000}
        background={navbarBackground}
        backdropFilter="blur(16px)"
        borderBottom="1px solid"
        borderColor={borderColor}
      >
        <Container
          maxW="1200px"
          px={{ base: 5, sm: 6, md: 8 }}
        >
          <HStack
            minHeight="72px"
            justifyContent="space-between"
          >
            {/* Portfolio logo or name */}
            <Link
              href="#home"
              textDecoration="none"
              _hover={{
                textDecoration: 'none',
              }}
            >
              <Text
                fontSize={{ base: 'lg', md: 'xl' }}
                fontWeight="bold"
                letterSpacing="tight"
              >
                Yumeth
                <Box
                  as="span"
                  color="cyan.400"
                >
                  .
                </Box>
              </Text>
            </Link>

            {/* Desktop navigation */}
            <HStack
              as="nav"
              spacing={6}
              display={{ base: 'none', lg: 'flex' }}
            >
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  fontSize="sm"
                  fontWeight="semibold"
                  position="relative"
                  transition="color 0.2s ease"
                  _hover={{
                    color: hoverColor,
                    textDecoration: 'none',
                  }}
                  _after={{
                    content: '""',
                    position: 'absolute',
                    left: 0,
                    bottom: '-6px',
                    width: '0%',
                    height: '2px',
                    borderRadius: 'full',
                    background: 'linear-gradient(90deg, #22d3ee, #3b82f6)',
                    transition: 'width 0.2s ease',
                  }}
                  sx={{
                    '&:hover::after': {
                      width: '100%',
                    },
                  }}
                >
                  {link.name}
                </Link>
              ))}

              <IconButton
                onClick={toggleColorMode}
                aria-label={
                  colorMode === 'light'
                    ? 'Enable dark mode'
                    : 'Enable light mode'
                }
                icon={
                  colorMode === 'light'
                    ? <FaMoon />
                    : <FaSun />
                }
                variant="ghost"
                borderRadius="full"
              />
            </HStack>

            {/* Mobile navigation buttons */}
            <HStack
              display={{ base: 'flex', lg: 'none' }}
              spacing={2}
            >
              <IconButton
                onClick={toggleColorMode}
                aria-label={
                  colorMode === 'light'
                    ? 'Enable dark mode'
                    : 'Enable light mode'
                }
                icon={
                  colorMode === 'light'
                    ? <FaMoon />
                    : <FaSun />
                }
                variant="ghost"
                borderRadius="full"
              />

              <IconButton
                onClick={onOpen}
                aria-label="Open navigation menu"
                icon={<FaBars />}
                variant="ghost"
                borderRadius="full"
              />
            </HStack>
          </HStack>
        </Container>
      </Box>

      {/* Mobile drawer */}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size="xs"
      >
        <DrawerOverlay />

        <DrawerContent background={mobileMenuBackground}>
          <DrawerCloseButton />

          <DrawerHeader
            borderBottomWidth="1px"
            borderColor={borderColor}
          >
            Navigation
          </DrawerHeader>

          <DrawerBody pt={8}>
            <VStack
              as="nav"
              align="stretch"
              spacing={3}
            >
              {navigationLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={onClose}
                  padding={3}
                  fontSize="lg"
                  fontWeight="semibold"
                  borderRadius="lg"
                  transition="all 0.2s ease"
                _hover={{
                color: hoverColor,
                background: mobileLinkHoverBackground,
                textDecoration: 'none',
                transform: 'translateX(4px)',
                }}
                >
                  {link.name}
                </Link>
              ))}
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Navbar;