import React, { useState } from 'react';
import { Typography, Box, Card, Grid, Button } from '@mui/material';
import Overlay from '../../components/OverlayComponent';
import { DonutChart } from '../../components/GraphicalComponents';
import qualityInspectionImage from '../../assets/apparelInspection.jpg'; // Credits: https://www.linkedin.com/pulse/decoding-clothing-manufacturing-process-from-design-delivery/
import decathlonImage from '../../assets/decathlonRank2.png'; // Credits: https://logistician.org/blog-2/decathlons-supply-chain-part-1-sustainable-procurement.html
import coatsImage from '../../assets/coats.png'; // Credits: https://www.yarnsandfibers.com/news/textile-news/coats-launches-its-new-bci-certified-cotton-thread/
import downtimeImage from '../../assets/downtimeImage.jpg'; // Credits: https://evocon.com/articles/types-of-downtime-in-manufacturing-the-difference-between-planned-and-unplanned/
import powerPlatformImage from '../../assets/powerPlatform.jpg'; // Credits: https://emerge.digital/resources/what-is-the-microsoft-power-platform/


const Projects = () => {
    const [open, setOpen] = useState(false);
    const [contentTitle, setContentTitle] = useState("");
    const [content, setContent] = useState(null);
  
    const handleOpen = (title, content) => {
      setContentTitle(title);
      setContent(content);
      setOpen(true);
    };
  
    const handleClose = () => setOpen(false);
  
  
    return (
      <Box sx={{ margin: '35px' }}>
        <Typography variant="h4" fontWeight="medium" style={{ paddingTop: '20px' }}>
          Projects
        </Typography>
  
        <Grid container spacing={4} justifyContent="center">
          
          <Grid item xs={8} sm={5} md={3} style={{ marginTop: '15px' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '20px', height: '100%' }}>
              <img src={qualityInspectionImage} alt="Quality Management Module" style={{ width: '100%', borderRadius: '10px' }} />
              <Typography variant="h6" fontWeight="medium" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginTop: '10px' }}>
                Apparel Quality Management Module
              </Typography>
              <Button variant="contained" onClick={() => handleOpen('Quality Management Module', ComponentApparelQuality)} style={{ marginTop: '10px' }}>
                Learn More
              </Button>
            </Card>
          </Grid>

          
          
  

         
          <Grid item xs={8} sm={5} md={3} style={{ marginTop: '15px' }}>
            <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px', borderRadius: '20px', height: '100%' }}>
              <img src={downtimeImage} alt="Downtime Management Module" style={{ width: '100%', borderRadius: '10px' }} />
              <Typography variant="h6" fontWeight="medium" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginTop: '10px' }}>
                Downtime Management Module
              </Typography>
              <Button variant="contained" onClick={() => handleOpen('Downtime Management Module', ComponentDowntime)} style={{ marginTop: '10px' }}>
                Learn More
              </Button>
            </Card>
          </Grid>


         
         
  
         
        </Grid>
  
        <Overlay open={open} handleClose={handleClose} contentTitle={contentTitle} content={content} />
      </Box>
    );
  }

  const ComponentApparelQuality = () => (
    <Box sx={{ padding: '20px' }}>
      <Card sx={{ padding: '20px', borderRadius: '20px', height: '100%' }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Grid Item */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={qualityInspectionImage} alt="Quality Management Module" style={{ width: '100%', borderRadius: '10px' }} />
            </Box>
          </Grid>
  
          {/* Right Grid Item */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '20px' }}>
                Apparel Quality Management Module
              </Typography>
              
              <Typography variant="body1" sx={{ fontFamily: 'Roboto', textAlign: 'left', lineHeight: '1.6' }}>
                <strong>Project Overview:</strong><br/>
                I played a pivotal role in developing and implementing an advanced apparel quality inspection module that has been successfully deployed across all plants of my current organization. This module enhances quality control processes by leveraging innovative technology.
              </Typography>
  
              <Typography variant="body1" sx={{ fontFamily: 'Roboto', textAlign: 'left', lineHeight: '1.6', marginTop: '20px' }}>
                <strong>Development Contributions:</strong><br/>
                <ul>
                  <li>
                    <strong>React Component Development:</strong> Contributed to the development of React components for an Andon system, which serves as a real-time monitoring and alerting platform. These components streamline communication and decision-making across production lines.
                  </li>
                  <li>
                    <strong>Canvas Elements for Defect Detection:</strong> Designed and implemented unique components using canvas elements to visually pinpoint defects on apparel items during the inspection process, improving accuracy and efficiency.
                  </li>
                </ul>
              </Typography>
  
              <Typography variant="body1" sx={{ fontFamily: 'Roboto', textAlign: 'left', lineHeight: '1.6', marginTop: '20px' }}>
                <strong>Current Deployment:</strong><br/>
                This application is currently operational in all plants of our organization, ensuring standardized quality inspection procedures and facilitating seamless production workflows.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
  );


  const ComponentDowntime = () => (
    <Box sx={{ padding: '20px' }}>
      <Card sx={{ padding: '20px', borderRadius: '20px', height: '100%' }}>
        <Grid container spacing={4} alignItems="center">
          {/* Left Grid Item */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
              <img src={downtimeImage} alt="Downtime Management Module" style={{ width: '100%', borderRadius: '10px' }} />
            </Box>
          </Grid>
  
          {/* Right Grid Item */}
          <Grid item xs={12} sm={6}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography variant="h6" sx={{ fontFamily: 'Roboto', textAlign: 'center', marginBottom: '20px' }}>
                Downtime Management Module
              </Typography>
  
              <Typography variant="body1" sx={{ fontFamily: 'Roboto', textAlign: 'left', lineHeight: '1.6' }}>
                <strong>Project Overview:</strong><br/>
                As the lead developer, I spearheaded the development of a downtime management module, an advanced Andon system designed to alert users of machine downtime within manufacturing plants. This module has been successfully implemented in two plants within our group, enhancing operational efficiency and reducing downtime.
              </Typography>
  
              <Typography variant="body1" sx={{ fontFamily: 'Roboto', textAlign: 'left', lineHeight: '1.6', marginTop: '20px' }}>
                <strong>Key Contributions:</strong><br/>
                <ul>
                  <li>
                    <strong>Lead Developer Role:</strong> Took charge of designing and developing the downtime management module, ensuring robust functionality and seamless integration with existing plant operations.
                  </li>
                  <li>
                    <strong>Framework Architecture in React:</strong> Played a key role in architecting the React framework, leveraging reusable components to enhance modularity and scalability. This framework provided a solid foundation for the module's front-end development, promoting consistency and ease of maintenance.
                  </li>
                  <li>
                    <strong>API Development:</strong> Developed APIs to facilitate seamless communication between the downtime management module and existing plant systems. These APIs enabled real-time data exchange and actionable insights, optimizing decision-making processes during machine downtime events.
                  </li>
                </ul>
              </Typography>
  
              <Typography variant="body1" sx={{ fontFamily: 'Roboto', textAlign: 'left', lineHeight: '1.6', marginTop: '20px' }}>
                <strong>Current Implementation:</strong><br/>
                Currently operational in two plants within our group, this module plays a crucial role in minimizing production disruptions and optimizing resource utilization through timely notifications and actionable insights.
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Card>
    </Box>
);


  
  
 
  
  
    


export { Projects };