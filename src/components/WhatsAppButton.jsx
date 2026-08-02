import {
  IconButton,
  Tooltip,
} from '@chakra-ui/react';

import { FaWhatsapp } from 'react-icons/fa';

import {
  motion,
  useReducedMotion,
} from 'framer-motion';

import { whatsappLink } from '../data/contact';

function WhatsAppButton() {
  // Hooks must be called inside the component
  const shouldReduceMotion = useReducedMotion();

  return (
    <motion.div
      animate={
        shouldReduceMotion
          ? {}
          : {
              scale: [1, 1.06, 1],
            }
      }
      transition={{
        duration: 2.8,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
      style={{
        position: 'fixed',
        right: '28px',
        bottom: '28px',
        zIndex: 1000,
      }}
    >
      <Tooltip
        label="Message me on WhatsApp"
        placement="left"
        hasArrow
      >
        <IconButton
          as="a"
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Contact Yumeth through WhatsApp"
          icon={
            <motion.span
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      rotate: [0, -8, 8, -5, 5, 0],
                    }
              }
              transition={{
                duration: 1,
                repeat: Infinity,
                repeatDelay: 4,
              }}
              style={{
                display: 'flex',
              }}
            >
              <FaWhatsapp size={28} />
            </motion.span>
          }
          width={{ base: '54px', md: '60px' }}
          height={{ base: '54px', md: '60px' }}
          borderRadius="full"
          bg="green.400"
          color="white"
          boxShadow="0 12px 30px rgba(0, 0, 0, 0.35)"
          transition="all 0.2s ease"
          _hover={{
            bg: 'green.500',
            transform: 'translateY(-4px) scale(1.05)',
            boxShadow:
              '0 16px 35px rgba(0, 0, 0, 0.4)',
          }}
          _active={{
            transform: 'scale(0.96)',
          }}
        />
      </Tooltip>
    </motion.div>
  );
}

export default WhatsAppButton;