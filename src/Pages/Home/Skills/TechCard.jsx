import { Box, Flex, Img, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Aos from "aos";
import "aos/dist/aos.css"
const TechCard = ({logo,title}) => {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return (
        <Box  h={['120px','120px','150px']} w={['120px','120px','150px']} bg='#FFF' borderRadius='10px' cursor="pointer" _hover={{transform:"scale(1.1)"}} boxShadow='xl'
        data-aos='flip-left'
        >
            <Flex direction='column' justify='center' align='center'h={['120px','120px','150px']} gap='10px'>
            <Img src={logo} w={['40px','40px','60px']}  />
            <Text fontSize={['20px','20px','25px']}>{title}</Text>
            </Flex>
        </Box>
    );
};

export default TechCard;