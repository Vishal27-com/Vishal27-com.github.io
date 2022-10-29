import { Box, Button, Flex, HStack, Text } from '@chakra-ui/react';
import React, { useEffect } from 'react';
import Carousel from './Carousel';
import Aos from "aos";
import "aos/dist/aos.css"
const ProjectsCard = ({data}) => {
    useEffect(()=>{
        Aos.init({duration:2000})
      },[])
    return (
        <Box  boxShadow='xl' w='80%' m='40px auto' data-aos='fade-left' bg='#fff' p='20px' borderRadius='20px'>
        <Flex direction='column' justify='center' align={['left','left','center']} >
        <Box w={['100%','100%','80%']} >
        <Carousel key={data.title} data={data}/>  
        </Box > 
        <Box p='10px'  align='left' fontFamily="Poppins" >
         <Text fontSize={['18px','18px','20px']}  fontWeight="bold">{data.title}</Text>   
         <Text fontSize={['18px','18px','20px']} >{data.desc}</Text>   
         <Text fontSize={['18px','18px','20px']} >{data.type}</Text>   
         <Text fontSize={['18px','18px','20px']} ><span style={{fontWeight:"bold"}}>Responsibility-</span>{data.area}</Text>   
         <Text fontSize={['18px','18px','20px']} ><span style={{fontWeight:"bold"}}>Tech stack-</span>{data.stack}</Text>  
         {/* <HStack spacing={10} mt='20px'> */}
         <Flex justify='center' align='center' gap='20px' mt='10px'>
        <Button bg='#FF5349'  color='white' _hover={{bg:'#FF5349'}}><a href={data.code} target='_blank'>Github</a></Button>    
        <Button bg='#FF5349' color='white' _hover={{bg:'#FF5349'}}><a href={data.links} target='_blank'>Live</a></Button>       
        </Flex>   
        {/* </HStack>  */}
        </Box>  
        </Flex>  
        </Box>
    );
};

export default ProjectsCard;