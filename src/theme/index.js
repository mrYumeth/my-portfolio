import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },

  colors: {
    brand: {
      50: '#e5fbff',
      100: '#b8f3ff',
      200: '#88eaff',
      300: '#55dfff',
      400: '#2ad4ff',
      500: '#12bde6',
      600: '#0794b4',
      700: '#066c84',
      800: '#064654',
      900: '#03262f',
    },
  },

  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },

  styles: {
    global: {
      html: {
        scrollBehavior: 'smooth',
      },

      body: {
        background: {
          base: '#f7fafc',
          _dark: '#07111f',
        },
      },

      '::selection': {
        background: 'brand.400',
        color: '#07111f',
      },
    },
  },

  components: {
    Button: {
      baseStyle: {
        borderRadius: 'full',
        fontWeight: '600',
      },
    },
  },
});

export default theme;