import { Box, Center, Flex, Img, Text } from '@chakra-ui/react';
import React from 'react';
const Contact = () => {
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
        </Flex>
       <Center>
      <Flex direction={['column','column','column']} gap='10px'> 
      <Text fontSize='18px' fontWeight='bold'>Phone No- +91 9621480163</Text>
      <Text fontSize='18px' fontWeight='bold'>Gmail- vishalgupta962148@gmail</Text>
      </Flex>   
        </Center> 
        </Box>
    );
};

export default Contact;