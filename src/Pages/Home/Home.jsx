import React from 'react';
import {Box} from "@chakra-ui/react";
import Navbar from './Navbar/Navbar';
import AboutMe from './About me/AboutMe';
import TechSkills from "./Skills/TechSkills";
import Footer from "./Footer/Footer";
import Statistics from './Statistics/Statistics';
import Projects from './Project/Projects';
const Home = () => {
    return (
        <Box >
          <Navbar /> 
          <AboutMe />
          <TechSkills />
          <Projects />
          <Statistics />
          <Footer />
        </Box>
    );
};

export default Home;