import {  Box, Button, Container, Flex, Img, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import Vishal from "../../../Resources/Vishal.jpg"
import Resume from "../../../Resources/Vishal_Gupta_Resume.pdf"
import Typewriter from "typewriter-effect";
import styles from "./About.module.css"

const AboutMe = () => {
    const [state]=useState({
        title:"Hi, I am",
        titleTwo:"Vishal Gupta",
        titleThree:"Aspiring Mern Stack Developer, proficient in writting clean and optimised code,good at Data Structure and Algorithms, skilled in teamwork, Looking to start a career as an entry-level professional with a reputed IT company. ",
        image:Vishal
    })
    return (
        <Box className={styles.container} id='about'>
         <Flex direction={["column","column","row"]}>
        <Container w='100%'>
            <Box className={styles.imgBox}>
                <Img  src={state.image} h={["150px","300px","300px"]} w={["150px","300px","300px"]} objectFit="cover" borderRadius='100%' />
            </Box>
        </Container>
        <Box className={styles.introBox}>
        <Text fontSize={['36px','36px','40px']}>{state.title}</Text>
        <Text fontSize={['36px','36px','40px']} color='#FF5349' >{state.titleTwo}</Text>
        <Text fontSize={['36px','36px','40px']} color='#FF5349' >
        <Typewriter
            options={{
                autoStart:true,
                loop:true,
                delay:40,
                strings:[
                    "Full Stack Web Developer.",
                    "Tech Enthusiast.",
                    "MERN Stack Developer."
                ]
            }} />
        </Text>
        <Text fontSize={['18px','18px','20px']} m='10px auto' w='90%'>
            {state.titleThree}
        </Text>
        <a href={Resume} download={"Vishal-Gupta-Resume"}>
        <Button  m='30px 0' bg='#FF5349' color='#FFF' borderRadius='20px' _hover={{bg:"#FF5349",transform:'scale(1.1)'}}
        >Resume</Button>
        </a>
        </Box>
        </Flex>   
        </Box>
    );
};

export default AboutMe;