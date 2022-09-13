import { Box, Text} from '@chakra-ui/react';
import React from 'react';
import ProjectsCard from './ProjectsCard';
import { projects } from './ProjectsData';
const Project = () => {
    return (
        <Box>
            <Text fontFamily='Poppins' fontSize='40px' fontWeight='bold' mt='40px'>Projects</Text>
         {
            projects.map(p=>
            <ProjectsCard key={p.title} data={p}/>
                )
         }   
        </Box>
    );
};

export default Project;