import React from 'react';
import { Projects } from '../projects/projectsC';
import HeaderNavbar from '../../components/HeaderNavbar';
import Footer from '../../components/Footer';
import { Box } from '@mui/material';

const Project = () => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <HeaderNavbar />
      <Box sx={{ flex: 1, marginBottom: '10px' }}>
        <Projects />
      </Box>
      <Footer />
    </Box>
  );
};

export default Project;
