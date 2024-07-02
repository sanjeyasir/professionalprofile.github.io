
import React from 'react';
import {Details, Expertise, Journey} from '../home/homeC';
import HeaderNavbar from '../../components/HeaderNavbar';
import Footer from '../../components/Footer';
import { Box } from '@mui/material';

const Home = () => {

  
    return (
      <>
       <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <HeaderNavbar />
          <Box sx={{ flex: 1, marginBottom: '10px' }}>
          <div style={{marginBottom:'10px'}}>
          <Details/>
          </div>
          <div style={{marginBottom:'20px'}}>
            <Journey/>
          </div>
          <div style={{marginTop:'10px',marginBottom:'20px'}}>
            <Expertise/>
          </div>
          </Box>
          <Footer />
        </Box>
      
      </>
    );
  }

export default Home;
