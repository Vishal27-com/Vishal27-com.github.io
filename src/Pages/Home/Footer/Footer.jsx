import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import Contact from '../Contact/Contact';
import { ContactUs } from '../Contact/EmailForm';

const Footer = () => {
    return (
        <Box bg='#FF5349' fontFamily='Poppins' id='contact'>
            <Text fontSize='40px' fontWeight='bold' >Contact</Text>
            <Contact />
            <Box m='40px auto 0 auto' p='15px' w={['100%','80%','80%']} >
            <ContactUs />
            </Box>
        </Box>
    );
};

export default Footer;