import { Box, Center, Img, SimpleGrid, Text} from '@chakra-ui/react';
import React from 'react';
import Circle from './Circle';
import Calendar from "react-github-calendar"
const Statistics = () => {
    return (
        <Box fontFamily='Poppins' id='statistics'>
        <Text  fontSize='40px' fontWeight='bold' m='40px 0 20px 0'>Statistics</Text>
        <SimpleGrid  columns={[1,2,3]} align='center'>
        <Circle text='1200+' head='Hours' subhead='of Full Stack Coding'/>
        <Circle text='100+' head='Hours' subhead='of Soft Skill training'/>
        <Circle text='300+' head='DSA' subhead='problems on OJ platform'/>
        </SimpleGrid>
        <Box m='20px auto' w={['80%', "100%", "100%"]}>
        <Text fontSize='30px' fontWeight='bold'>Working Status on Github</Text>
        <Center m='20px auto' >
        <Img src='https://github-readme-streak-stats.herokuapp.com/?user=vishal27-com&theme=black-ice&hide_border=true&stroke=0000&background=060A0CD0' />    
        </Center>   
        <Center m='20px auto'>
        <Img src='https://github-readme-stats.vercel.app/api?username=vishal27-com&show_icons=true&count_private=true&theme=react&hide_border=true&bg_color=0D1117' />    
        </Center>   
        <Center >
            <Box bg='#FFF' p='10px' borderRadius='10px' w={['90%', "90%", "60%"]} >
            <Calendar  username='Vishal27-com' />
            </Box>
        </Center>   
        </Box> 
        </Box>
    );
};

export default Statistics;