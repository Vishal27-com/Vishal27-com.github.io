import React, { useState } from 'react';
import styles from "./Navbar.module.css";
import {Box,  Button,  Flex, HStack,  Text} from "@chakra-ui/react";
import NavbarMobile from './Navbar.mobile';
import Resume from "../../../Resources/Vishal_Gupta_Resume.pdf"

const Navbar = () => {
    const [navbar,setNavbar]=useState(false);
    const changeNavbarBg=()=>{
        if(window.scrollY>=60){
            setNavbar(true);
        }
        else {
            setNavbar(false);
        }
    }
    window.addEventListener("scroll",changeNavbarBg);
    return (
        <Box  bg={navbar?"#fff":"#fcc74c"} position='sticky' top='0' zIndex={10} >
        <Box display={["none","none","block"]}>
            <Flex className={styles.container}>
            <Box>
            <Box>
                <Text 
                color="#FF5349" 
                fontFamily='Poppins' 
                fontSize='30px'
                fontWeight='bold'>VG</Text>
            </Box>
            </Box>
            <Box>
                <HStack spacing={50}>
                <Box className={styles.tab}>
               <Text><a href='#about'>About me</a></Text>
                </Box>
                <Box className={styles.tab}>
               <Text><a href='#skills'>Skills</a></Text>
                </Box>
                <Box className={styles.tab}>
               <Text><a href='#projects'>Projects</a></Text>
                </Box>
                <Box className={styles.tab}>
                <Text><a href='#statistics'>Statistics</a></Text>
                </Box>
                <Box className={styles.tab}>
                <Text><a href='#contact'>Contact me</a></Text>
                </Box>
                <Box> <a href={Resume} download={Resume}>
                <Button fontFamily='Poppins'  m='10px 0' bg='#FF5349' color='#FFF' borderRadius='20px' _hover={{bg:"#FF5349",transform:'scale(1.1)'}}
                >Resume</Button></a></Box>
                </HStack>
            </Box>
            </Flex>
        </Box>
        <NavbarMobile navbar={navbar} />
        </Box>
    );
};

export default Navbar;