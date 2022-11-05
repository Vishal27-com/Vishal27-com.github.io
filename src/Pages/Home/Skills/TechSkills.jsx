import React from 'react';
import {Box, Center, SimpleGrid, Text} from "@chakra-ui/react";
import styles from "./Skills.module.css"
import TechCard from './TechCard';
import { backend, frontend, tools } from './techData';

const TechSkills = () => {
   
    return (
        <Box className={styles.techCont} id='skills'>
        <Box>
            <Text fontSize='40px'>Tech Skills</Text>
        </Box>  
            {/* Frontend */}
           
        <Box className={styles.frontend}>
       <Text fontSize='30px' mb='20px'>Frontend</Text>
       <SimpleGrid columns={[1,3,4]} gap="30px">
        {
            frontend.map(item=>
                <Center key={item.title} >
                <TechCard  
                logo={item.logo} 
                title={item.title} />
                </Center>
                )
        }
       </SimpleGrid>
        </Box>
   
        {/* Backend */}
      
        <Box className={styles.backend}>
       <Text fontSize='30px'>Backend</Text>
       <Box >

       <SimpleGrid columns={[1,3,4]} gap="30px" >
       
        {
            backend.map(item=>
                <Center key={item.title}>
                <TechCard  
                logo={item.logo} 
                title={item.title} />
                </Center>
                )
            }

       </SimpleGrid>
            </Box>
        </Box>
        {/* Tools */}
        <Box className={styles.backend}>
       <Text fontSize='30px'>Tools</Text>
       <Box >

       <SimpleGrid columns={[1,3,4]} gap="30px" >
        {
            tools.map(item=>
                <Center>
                <TechCard 
                key={item.title} 
                logo={item.logo} 
                title={item.title} />
                </Center>
                )
            }
       </SimpleGrid>
            </Box>
        </Box>
        </Box>
    );
};

export default TechSkills;