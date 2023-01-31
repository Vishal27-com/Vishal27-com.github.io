import React from 'react'

import {Box, Button, HStack, Img, Stack, Text} from "@chakra-ui/react";
const Card = ({data}) => {
  return (
    <Box fontSize='18px' bg='#fff' p='10px' borderRadius='10px'> 
     <Img src={data.image} />
     <Stack gap='5px' mt='10px'>
     <Text align='left'><b>Title:</b> {data.title}</Text> 
     <Text align='left'><b>Type:</b> {data.type}</Text> 
     <Text align='left'><b>Description:</b> {data.desc}</Text> 
     <Text align='left'><b>Area of responsibility:</b> {data.area?data.area.map((item)=>
     <li>{item}</li>
     ):"Whole app"}</Text> 
     <Text align='left'><b>Tech Stack:</b> {data.stack}</Text> 
     <HStack gap='15px'>
     <Button bg='#FF5349'  color='white' _hover={{bg:'#FF5349'}} rel='noopener'><a href={data.link} target='_blank'>Live</a></Button>    
     <Button bg='#FF5349'  color='white' _hover={{bg:'#FF5349'}} rel='noopener'><a href={data.code} target='_blank'>Github</a></Button>    
     </HStack>
     </Stack>
    </Box>
  )
}

export default Card