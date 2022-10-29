import { Box, Flex, Text } from '@chakra-ui/react';
import React from 'react';

const Circle = ({text,head,subhead}) => {
    return (
        <Box fontFamily='Poppins'>   
        <Box border='5px solid blue' h='150px' w='150px' borderRadius='100%' bg='#fff' >
            <Flex h='150px' w='150px' justify='center' align='center'>
                <Text fontSize='40px' fontWeight='bold' >
                {text}
                </Text>
            </Flex>
        </Box>
        <Text fontSize='30px' fontWeight='bold'>{head}</Text>
        <Text fontSize='20px' fontWeight='bold'>{subhead}</Text>
        </Box>
    );
};

export default Circle;