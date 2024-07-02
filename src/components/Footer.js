import React from 'react';
import '../styles/HeaderNavbar.css';
import { Box, Typography } from '@mui/material';
import Icon from 'react-icons-kit';
import {linkedin} from 'react-icons-kit/icomoon/linkedin'
import {git} from 'react-icons-kit/icomoon/git'

const Footer = () => {

const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sanjey-jonathan-asirvatham-9649b6148/', '_blank');
};
    
const handleGitHubLink = () => {
    window.open('https://github.com/sanjeyasir', '_blank');
};
  

  return (
    <div className="navbar">

        <div style={{display:'flex', flexDirection:'row', alignContent:'center', alignItems:'center'}}>

            <Typography variant="caption" style={{marginRight:'10px'}}>
                Sanjey Asirvatham @ 2024
            </Typography>
            <Box  onClick={handleLinkedInClick} sx={{ width: '10px', height: '10px', padding: '5px', borderRadius: '10px', backgroundColor: '#c6c6c6', marginRight:'10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ color: '#424242' }}>
                    <Icon size={10} icon={linkedin} />
                </div>
            </Box>
            <Box onClick={handleGitHubLink} sx={{ width: '10px', height: '10px', padding: '5px', borderRadius: '10px', backgroundColor: '#c6c6c6', marginRight:'10px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                <div style={{ color: '#424242' }}>
                    <Icon size={10} icon={git} />
                </div>
            </Box>

        </div>

   
        
      
      
    </div>
  );
};

export default Footer;
