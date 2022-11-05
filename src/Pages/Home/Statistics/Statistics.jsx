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
        <Box m='20px auto'>
        <Text fontSize='30px' fontWeight='bold'>Working Status on Github</Text>
        <Center m='20px 0'>
        <Img src='https://camo.githubusercontent.com/54365ff43cdc10ba24f5c70a1632a0e83681fc52ba29a05c37e0b4d727b98563/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d76697368616c32372d636f6d267468656d653d626c61636b2d69636526686964655f626f726465723d74727565267374726f6b653d30303030266261636b67726f756e643d3036304130434430' />    
        </Center>   
        <Center >
            <Box bg='blackAlpha.800' p='10px' borderRadius='10px' >
          <Calendar  username='Vishal27-com' color='yellow' />
            </Box>
        </Center>   
        </Box> 
        </Box>
    );
};

export default Statistics;