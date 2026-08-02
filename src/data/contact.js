export const contactDetails = {
  email: 'yumethindiv123@gmail.com',

  whatsappNumber: '94776939608',

  whatsappMessage:
    'Hi Yumeth, I visited your portfolio and would like to connect with you.',

  github: 'https://github.com/mrYumeth',

  linkedin:
    'https://www.linkedin.com/in/yumeth-thenuwara-b87985279',

  location: 'Sri Lanka',
};

export const emailLink = `mailto:${contactDetails.email}`;

export const whatsappLink = `https://wa.me/${
  contactDetails.whatsappNumber
}?text=${encodeURIComponent(contactDetails.whatsappMessage)}`;