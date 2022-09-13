import { Box, Flex, Img } from '@chakra-ui/react';
import React from 'react';
import twitter from "../../../Resources/twitter.png"
import github from "../../../Resources/github.png"
import linkedin from "../../../Resources/linkedin.png"
const Contact = () => {
    return (
        <Box>
          <Flex justify='center' mt='20px' gap='30px'>
        <Box  h='50px' w='50px'>
            <a href='https://www.linkedin.com/in/vishal-gupta-573335237' target="_blank"><Img src={linkedin}  /></a>
        </Box>
        <Box  h='50px' w='50px'>
            <a href='https://github.com/Vishal27-com' target="_blank"><Img src={github} w='50px' /></a>
        </Box>
        <Box  h='50px' w='50px'>
            <a href='https://twitter.com/VishalG271203' target="_blank"><Img src={twitter}  /></a>
        </Box>
        </Flex>  
        </Box>
    );
};

export default Contact;