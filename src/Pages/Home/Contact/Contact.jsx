import { Box, Flex, Img, useToast } from '@chakra-ui/react';
import React from 'react';
const Contact = () => {
    const toast = useToast()
    return (
        <Box>
          <Flex justify='center' mt='20px' gap='30px'>
        <Box  h='50px' w='50px'>
            <a href='https://www.linkedin.com/in/vishal-gupta-573335237' ><Img src="https://img.icons8.com/3d-fluency/94/000000/linkedin.png"/></a>
        </Box>
        <Box  h='50px' w='50px'>
            <a href='https://github.com/Vishal27-com' ><Img src="https://img.icons8.com/3d-fluency/94/000000/github.png"/></a>
        </Box>
        <Box  h='50px' w='50px'>
            <a href='https://twitter.com/VishalG271203'>
                <Img src="https://img.icons8.com/3d-fluency/94/000000/twitter-circled.png"/>
                </a>
        </Box>
        <Box  h='45px' w='45px' cursor='pointer' onClick={() =>
        toast({
          title: 'Phone Number',
          description: "9621480163",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }>
            <Img  src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-phone-notifications-justicon-lineal-color-justicon.png"/>
        </Box>
        <Box  h='45px' w='45px' cursor='pointer' onClick={() =>
        toast({
          title: 'Email',
          description: "vishalgupta962148@gmail.com",
          status: 'success',
          duration: 9000,
          isClosable: true,
        })
      }>
            <Img  src='https://img.icons8.com/3d-fluency/100/000000/google-logo.png' />
        </Box>
        </Flex> 
        
        </Box>
    );
};

export default Contact;