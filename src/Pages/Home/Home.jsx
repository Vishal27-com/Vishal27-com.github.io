import React from 'react';
import {Box,Text} from "@chakra-ui/react";
import Navbar from './Navbar/Navbar';
// import Education from "./Education/Education"
import AboutMe from './About me/AboutMe';
import TechSkills from "./Skills/TechSkills";
import Footer from "./Footer/Footer";
import Project from "./Project/Project"
const Home = () => {
    return (
        <Box >
          <Navbar /> 
          <AboutMe />
          {/* <Education />  */}
          <TechSkills />
          <Project/>
          <Footer />
        </Box>
    );
};

export default Home;