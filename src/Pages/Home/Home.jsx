import React from 'react';
import {Box} from "@chakra-ui/react";
import Navbar from './Navbar/Navbar';
import AboutMe from './About me/AboutMe';
import TechSkills from "./Skills/TechSkills";
import Footer from "./Footer/Footer";
import Project from "./Project/Project"
import Statistics from './Statistics/Statistics';
const Home = () => {
    return (
        <Box >
          <Navbar /> 
          <AboutMe />
          <TechSkills />
          <Project/>
          <Statistics />
          <Footer />
        </Box>
    );
};

export default Home;