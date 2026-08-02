import {
  IconButton,
  Tooltip,
} from '@chakra-ui/react';

import { FaWhatsapp } from 'react-icons/fa';

import { whatsappLink } from '../data/contact';

function WhatsAppButton() {
  return (
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
        icon={<FaWhatsapp size={28} />}
        position="fixed"
        right={{ base: 4, md: 7 }}
        bottom={{ base: 4, md: 7 }}
        width={{ base: '54px', md: '60px' }}
        height={{ base: '54px', md: '60px' }}
        borderRadius="full"
        bg="green.400"
        color="white"
        boxShadow="0 12px 30px rgba(0, 0, 0, 0.35)"
        zIndex={1000}
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
  );
}

export default WhatsAppButton;