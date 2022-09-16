import React from 'react';
import styles from "./Navbar.module.css";
import {Box,  Flex, HStack,  Text} from "@chakra-ui/react";
import NavbarMobile from './Navbar.mobile';
const Navbar = () => {
    return (
        <Box className={styles.nav}>
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
                </HStack>
            </Box>
            </Flex>
        </Box>
        <NavbarMobile />
        </Box>
    );
};

export default Navbar;