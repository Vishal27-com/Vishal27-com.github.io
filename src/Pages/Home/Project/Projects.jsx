import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'
import Card from './Card'
import { projects } from './ProjectsData'

const Projects = () => {
  return (
    <Box m='40px 0' borderBottom='1px solid rgb(160, 159, 159)' id='projects'>
        <Text fontFamily='Poppins' fontSize='40px' fontWeight='bold' mt='40px'>Projects</Text>
        <SimpleGrid w='80%' m='20px auto' columns={[1,1,2]} gap='20px'>
         {
            projects.map((item)=>
            <Card key={item.image} data={item} />
            )
         }   
        </SimpleGrid>
    </Box>
  )
}

export default Projects