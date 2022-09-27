import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
import twitter from "../../../Resources/twitter.png"
import github from "../../../Resources/github.png"
import linkedin from "../../../Resources/linkedin.png"
import phone from "../../../Resources/phone.ico"
import gmail from "../../../Resources/gmail.png"
const Contact = () => {
    return (
        <Box>
          <Flex justify='center' mt='20px' gap='30px'>
        <Box  h='50px' w='50px'>
            <a href='https://www.linkedin.com/in/vishal-gupta-573335237' ><Img src={linkedin}  /></a>
        </Box>
        <Box  h='50px' w='50px'>
            <a href='https://github.com/Vishal27-com' ><Img src={github} w='50px' /></a>
        </Box>
        <Box  h='50px' w='50px'>
            <a href='https://twitter.com/VishalG271203'><Img src={twitter}  /></a>
        </Box>
        <Box  h='50px' w='50px' cursor='pointer' onClick={()=>alert('Mobile No. +91 9621480163')}>
            <Img src={phone}  />
        </Box>
        <Box  h='50px' w='50px' cursor='pointer' onClick={()=>alert('Gmail-vishalgupta962148@gmail.com')}>
            <Img src={gmail}  />
        </Box>
        </Flex> 
        
        </Box>
    );
};

export default Contact;