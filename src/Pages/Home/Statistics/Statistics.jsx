import { Box, Center, Img, SimpleGrid, Text} from '@chakra-ui/react';
import React from 'react';
import Circle from './Circle';
import commits from '../../../Resources/GithubCommits.png'
const Statistics = () => {
    return (
        <Box fontFamily='Poppins'>
        <Text  fontSize='40px' fontWeight='bold' m='40px 0 20px 0'>Statistics</Text>
        <SimpleGrid  columns={[1,2,3]} align='center'>
        <Circle text='1200+' head='Hours' subhead='of Full Stack Coding'/>
        <Circle text='100+' head='Hours' subhead='of Soft Skill training'/>
        <Circle text='300+' head='DSA' subhead='problems on OJ platform'/>
        </SimpleGrid>
        <Box m='20px auto'>
         <Center>
        <Img src={commits} borderRadius='10px' />
        </Center>   
        <Text fontSize='20px' fontWeight='bold'>Working Status on Github after started Coding</Text>
        </Box>
        </Box>
    );
};

export default Statistics;