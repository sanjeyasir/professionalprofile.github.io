import React, { useState } from 'react';
import { Typography, Box, Card, Grid, Button } from '@mui/material';
import profile from '../../assets/profile_sanjeyasir.png';
import { Icon } from 'react-icons-kit'
import {paintFormat} from 'react-icons-kit/icomoon/paintFormat'
import {android} from 'react-icons-kit/icomoon/android'
import {tablet} from 'react-icons-kit/icomoon/tablet'
import {pencil2} from 'react-icons-kit/icomoon/pencil2'
import Overlay from '../../components/OverlayComponent';
import { DonutChart } from '../../components/GraphicalComponents';

const Details = () => {
  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/sanjey-jonathan-asirvatham-9649b6148/', '_blank');
  };

  return (
    <Box sx={{ margin: '25px' }}>
      <Grid container spacing={3}>
        {/* Left Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%' }}>
            <Typography variant="h6" fontWeight="medium" sx={{ fontFamily: 'Roboto' }}>
              Hey, I am Sanjey
            </Typography>
            <Typography variant="h2" fontWeight="medium" sx={{ color: 'purple', fontFamily: 'Roboto' }}>
              Full Stack
            </Typography>
            <Typography variant="h2" fontWeight="medium" sx={{ fontFamily: 'Roboto' }}>
              Developer
            </Typography>
            <Typography variant="body1" style={{ marginTop: '10px', fontFamily: 'Roboto' }}>
              A mechatronics engineer turned full stack developer. <br />
              From tinkering with gadgets to building websites, I thrive on creating innovative <br /> solutions that make a difference.
            </Typography>
            <Button variant="contained" onClick={handleLinkedInClick} sx={{ marginTop: '20px', width:'200px', borderRadius:'20px'}}>
              Contact Me
            </Button>
          </Box>
        </Grid>

        {/* Right Section */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%' }}>
            <Card sx={{ width: '100%', height: 'auto', borderRadius: '10px' }}>
              <img src={profile} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '10px' }} alt="Profile" />
            </Card>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

const Journey = () => {
    return (
      <Box sx={{ margin: '35px' }}>
        <Typography variant="body2" fontWeight="medium">
          My Skills
        </Typography>
        <Typography variant="h4" fontWeight="medium">
              Journey
        </Typography>
  
        <Grid container spacing={4} justifyContent="center">
          {/* First Card */}
          <Grid item xs={8} sm={5} md={3} style={{marginTop:'15px'}}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '20px', height: '100%'}}>
              <Box sx={{ width: '50px', height: '50px', padding: '5px', borderRadius: '10px', backgroundColor: '#ffbbf0', marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ color: '#FF1DCE' }}>
                  <Icon size={30} icon={paintFormat} />
                </div>
              </Box>
              <Typography variant="h6" fontWeight="medium" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '5px' }}>
                Tinkerer
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>
                From early days of exploration and experimenting, dismantling gadgets, crafting circuits, and coding for fun
              </Typography>
            </Card>
          </Grid>
  
          {/* Second Card */}
          <Grid item xs={8} sm={5} md={3} style={{marginTop:'15px'}}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '20px', height: '100%' }}>
              <Box sx={{ width: '50px', height: '50px', padding: '5px', borderRadius: '10px', backgroundColor: '#c6c6c6', marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ color: '#424242' }}>
                  <Icon size={30} icon={android} />
                </div>
              </Box>
              <Typography variant="h6" fontWeight="medium" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '5px' }}>
                The Engineer
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>
                University introduced me to mechatronics, delving into complex projects merging mechanics, electronics, and programming.
              </Typography>
            </Card>
          </Grid>
  
          {/* Third Card */}
          <Grid item xs={8} sm={5} md={3} style={{marginTop:'15px'}}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '20px', height: '100%'}}>
              <Box sx={{ width: '50px', height: '50px', padding: '5px', borderRadius: '10px', backgroundColor: '#99b6fc', marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ color: '#004AF9' }}>
                  <Icon size={30} icon={tablet} />
                </div>
              </Box>
              <Typography variant="h6" fontWeight="medium" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '5px' }}>
                The Developer
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>
                Discovering web development sparked a new passion. Mastering front-end and back-end technologies, I embarked on creating impactful web applications.
              </Typography>
            </Card>
          </Grid>

  
          {/* Fourth Card */}
          <Grid item xs={8} sm={5} md={3} style={{marginTop:'15px'}}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '20px', height: '100%'}}>
              <Box sx={{ width: '50px', height: '50px', padding: '5px', borderRadius: '10px', backgroundColor: '#fde7c7', marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <div style={{ color: '#F4A261' }}>
                  <Icon size={30} icon={pencil2} />
                </div>
              </Box>
              <Typography variant="h6" fontWeight="medium" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '5px' }}>
                The Creator
              </Typography>
              <Typography variant="body2" sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>
                Combining creativity with technology, I continue to innovate, solving problems and crafting intuitive solutions that inspire.
              </Typography>
            </Card>
          </Grid>
  
        </Grid>
      </Box>
    );
}

const Expertise = () => {
  const [open, setOpen] = useState(false);
  const [contentTitle, setContentTitle] = useState("");
  const [content, setContent] = useState(null);

  const handleOpen = (title, content) => {
    setContentTitle(title);
    setContent(content);
    setOpen(true);
  };

  const handleClose = () => setOpen(false);

  let componentFrontendDevelopment= ComponentFrontendDevelopment;
  let componentBackendDevelopment= ComponentBackendDevelopment;
  let componentServerDevelopment= ComponentServerDevelopment;
  let componentMachineLearningDevelopment= ComponentMachineLearningDevelopment;

  return (
    <Box sx={{ margin: '35px'}}>
      <Typography variant="h4" fontWeight="medium" style={{paddingTop:'20px'}}>
        Expertise
      </Typography>

      <Grid container spacing={4} justifyContent="center">
        {/* First Card */}
        <Grid item xs={8} sm={5} md={3} style={{marginTop:'15px'}}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '20px', height: '100%' }}>
            <Box sx={{ width: '50px', height: '50px', padding: '5px', borderRadius: '10px', backgroundColor: '#c6c6c6', marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ color: '#424242' }}>
                <Icon size={30} icon={android} />
              </div>
            </Box>
            <Typography variant="h6" fontWeight="medium" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '5px' }}>
              Frontend Development
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>
              React
            </Typography>
            <Button onClick={() => handleOpen('Frontend Development',componentFrontendDevelopment)}>
              Learn More
            </Button>
          </Card>
        </Grid>

        {/* Second Card */}
        <Grid item xs={8} sm={5} md={3} style={{marginTop:'15px'}}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '20px', height: '100%' }}>
            <Box sx={{ width: '50px', height: '50px', padding: '5px', borderRadius: '10px', backgroundColor: '#c6c6c6', marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ color: '#424242' }}>
                <Icon size={30} icon={android} />
              </div>
            </Box>
            <Typography variant="h6" fontWeight="medium" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '5px' }}>
              Backend Development
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>
              NodeJS,<br/> SQL,<br/>MongoDB
            </Typography>
            <Button onClick={() => handleOpen('Backend Development',componentBackendDevelopment)}>
              Learn More
            </Button>
          </Card>
        </Grid>

        {/* Third Card */}
        <Grid item xs={8} sm={5} md={3} style={{marginTop:'15px'}}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '20px', height: '100%' }}>
            <Box sx={{ width: '50px', height: '50px', padding: '5px', borderRadius: '10px', backgroundColor: '#c6c6c6', marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ color: '#424242' }}>
                <Icon size={30} icon={android} />
              </div>
            </Box>
            <Typography variant="h6" fontWeight="medium" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '5px' }}>
              Server Management
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>
              Ubuntu
            </Typography>
            <Button onClick={() => handleOpen('Server Management',componentServerDevelopment)}>
              Learn More
            </Button>
          </Card>
        </Grid>

        {/* Fourth Card */}
        <Grid item xs={8} sm={5} md={3} style={{marginTop:'15px'}}>
          <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '20px', height: '100%' }}>
            <Box sx={{ width: '50px', height: '50px', padding: '5px', borderRadius: '10px', backgroundColor: '#c6c6c6', marginBottom: '10px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
              <div style={{ color: '#424242' }}>
                <Icon size={30} icon={android} />
              </div>
            </Box>
            <Typography variant="h6" fontWeight="medium" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '5px' }}>
              Machine Learning
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>
              Python
            </Typography>
            <Button onClick={() => handleOpen('Machine Learning',componentMachineLearningDevelopment)}>
              Learn More
            </Button>
          </Card>
        </Grid>

      </Grid>

      <Overlay open={open} handleClose={handleClose} contentTitle={contentTitle} content={content} />
    </Box>
  );
}


const ComponentFrontendDevelopment = () => (
  <Box sx={{ padding: '20px' }}>
    <Card sx={{ padding: '20px', borderRadius: '20px', height:'100%' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <DonutChart percentage={75} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '10px' }}>
              Frontend Development
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>
            My expertise in React has been transformative. Utilizing its component-based architecture, I built dynamic high-performance user interfaces. 
            I also was able to follow best practices, to craft seamless user experiences.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  </Box>
);

const ComponentBackendDevelopment = () => (
  <Box sx={{ padding: '20px' }}>
    <Card sx={{ padding: '20px', borderRadius: '20px', height:'100%' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <DonutChart percentage={50} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '10px' }}>
              Backend Development
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>
            With a strong foundation in server-side development, I excel in building robust and scalable backend systems. Utilizing technologies like Node.js, Express, MySQL and DynamoDB,
            I ensured seamless data management and API integrations, providing a solid backbone for web applications.
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  </Box>
);


const ComponentServerDevelopment = () => (
  <Box sx={{ padding: '20px' }}>
    <Card sx={{ padding: '20px', borderRadius: '20px', height:'100%' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <DonutChart percentage={60} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '10px' }}>
            Server and Version Management
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>
            Managing server instances on Ubuntu with AWS services, I handle deployment, scaling, and maintenance. 
            Utilizing Git and other version control tools, I ensure efficient code management and seamless updates on live servers
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  </Box>
);

const ComponentMachineLearningDevelopment = () => (
  <Box sx={{ padding: '20px' }}>
    <Card sx={{ padding: '20px', borderRadius: '20px', height:'100%' }}>
      <Grid container spacing={4} alignItems="center">
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <DonutChart percentage={60} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <Typography variant="h6" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '10px' }}>
              Machine Learning
            </Typography>
            <Typography variant="body2" sx={{ fontFamily: 'Roboto', textAlign: 'center' }}>
            Leveraging Python, I train and test data models to derive meaningful insights. I follow rigorous methodologies to extract and transform data, ensuring high-quality outcomes.
            By developing APIs, I seamlessly integrate these models into applications, delivering relevant results efficiently
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Card>
  </Box>
);
  
  


export { Details, Journey,Expertise };





