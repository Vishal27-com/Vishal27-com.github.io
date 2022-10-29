import { Box, Button, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, Flex,  SimpleGrid, Text, useDisclosure, VStack } from '@chakra-ui/react';
import React from 'react';
import styles from "./Navbar.module.css";
const NavbarMobile = ({navbar}) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = React.useRef()
    return (
        <Box display={["block","block","none"]} p='0 20px'>
       <Flex justify="space-between" align="center">
       <Box>
       <Text 
                color="#FF5349" 
                fontFamily='Poppins' 
                fontSize='30px'
                fontWeight='bold'>VG</Text>
       </Box> 
      <Button ref={btnRef}  onClick={onOpen} bg={navbar?"#fff":"#fcc74c"}>
        <VStack spacing={1} >
        <Box w="35px"  color="#FF5349" border='2px solid #FF5349' ></Box>
        <Box w="35px"  color="#FF5349" border='2px solid #FF5349' ></Box>
        <Box w="35px"  color="#FF5349" border='2px solid #FF5349' ></Box>
        </VStack>
      </Button>
      </Flex>     
      <Drawer
        isOpen={isOpen}
        placement='top'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader><Text 
                color="#FF5349" 
                fontFamily='Poppins' 
                fontSize='30px'
                fontWeight='bold'>VG</Text></DrawerHeader>
          <DrawerBody>
           <SimpleGrid columns={[1,2]} spacing={5} >
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
           </SimpleGrid>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Box>
    );
};

export default NavbarMobile;