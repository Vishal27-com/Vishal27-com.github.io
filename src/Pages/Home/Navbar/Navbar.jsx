import React from 'react';
import styles from "./Navbar.module.css";
import {Box, Button, Flex, HStack,  Text} from "@chakra-ui/react";
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
               <Text>About me</Text>
                </Box>
                <Box className={styles.tab}>
               <Text>Education</Text>
                </Box>
                <Box className={styles.tab}>
               <Text>Skills</Text>
                </Box>
                <Box className={styles.tab}>
               <Text>Projects</Text>
                </Box>
                <Box className={styles.tab}>
                <Text>Contact me</Text>
                </Box>
                <Button bgColor="white"></Button>
                </HStack>
            </Box>
            </Flex>
        </Box>
        <NavbarMobile />
        </Box>
    );
};

export default Navbar;