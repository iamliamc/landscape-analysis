import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  useTheme, 
  useMediaQuery,
  Divider,
  IconButton,
  Collapse,
  Link,
  CircularProgress,
  Stack,
  LinearProgress,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import stockFlow from '../assets/images/stock_flow.png';
import waterFlowImage from '../assets/images/water_flow.png';
import CustomThemeProvider from './CustomThemeProvider';
import FulcrumAnimation from './FulcrumAnimation';
import TensionAnimation from './TensionAnimation';
import EarthPointCloudComponent from './EarthPointCloud';
import ClimateCanvas from './ClimateCanvas';

const SectionWrapper = ({ bgColor, children, removeTopBorder = false }) => (
  <Box
    sx={{
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column', // Added to allow content to expand vertically
      justifyContent: 'center', // Centers content vertically
      alignItems: 'center',
      bgcolor: bgColor,
      color: 'text.primary',
      borderTop: removeTopBorder ? 'none' : '1px solid',
      borderColor: 'divider',
    }}
  >
    <Container maxWidth="xl">
      {children}
    </Container>
  </Box>
);

const LandingPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));
  const [expandedSection, setExpandedSection] = useState(false);

  const toggleExpand = () => {
    setExpandedSection(!expandedSection);
  };

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= 100 ? 0 : prevProgress + 10));
    }, 800);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <CustomThemeProvider>
      <Box>
        <SectionWrapper bgColor="primary.default" removeTopBorder={true}>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: '80vh', width: '100%' }}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2, width: { xs: '100%', md: '50%' } }}>
              <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h2" gutterBottom>Reframing Divergence</Typography>
              <Typography variant={isSmallScreen ? 'h6' : 'h5'} component="h3" gutterBottom>Contexualizing apparent paradoxes in Climate & AI landscape</Typography>
              <Divider orientation='horizontal' flexItem sx={{ my: 2 }} />
              <Typography variant="body1" paragraph>
                A non-classical instantiation of the irresistible force paradox:
              </Typography>
                <Typography 
                  variant="body1" 
                  component="blockquote"
                  sx={{
                    borderLeft: '4px solid',
                    borderColor: 'primary.main',
                    paddingLeft: 2,
                    marginY: 2,
                    fontStyle: 'italic',
                  }}
                >
                  "What happens when an instantaneous quantum entanglement is observed alongside an unbreakable light-speed barrier?"
                </Typography>
              <Typography variant="body1" paragraph>
                Most often we claim a false dilemma, that we are subject to erroneously limitations about what options are available.
              </Typography>
              <Typography 
                variant='h6'
                sx={{
                  fontWeight: 'bold',
                  my: 2, 
                }}
              >
                It's not that the two concepts are mutually exclusive, but rather how the two ideas are in relation that enables us to act within this context.
              </Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 2, display: { xs: 'none', md: 'block' } }} />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2, width: { xs: '100%', md: '50%' } }}>
              {/* <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h2" gutterBottom>About Us</Typography>
              <Typography variant="body1" paragraph>We are a company dedicated to innovation.</Typography> */}
              {/* <FulcrumAnimation /> */}
              <TensionAnimation />
            </Box>
          </Box>
          <Typography variant="body2">The <Link color="text.primary" href="#">Schmidt Climate & AI Fellowship</ Link> is an evolving praxis focused on acting in service to a thriving planet</Typography>
        </SectionWrapper>

        <SectionWrapper bgColor="primary.main">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: '100%', width: '100%' }}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2, width: { xs: '100%', md: '33.33%' } }}>
              <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h2" gutterBottom>Design Forward Communication</Typography>
              <Typography variant="body1" paragraph>Presenting scientific information with design forward techniques has an outsized impact in the policy space</Typography>
              <img 
                src={waterFlowImage}
                alt="Earth" 
                style={{
                  maxWidth: '100%',
                  maxHeight: '100%',
                  width: 'auto',
                  height: 'auto',
                  objectFit: 'contain',
                }}
              />
              <Divider orientation="horizontal" flexItem sx={{ my: 2 }} />
              <Typography variant="body1" paragraph>Communication is transient - updates require lasting engagement</Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 2, display: { xs: 'none', md: 'block' } }} />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2, width: { xs: '100%', md: '33.33%' } }}>

            <Stack spacing={2} direction="row">
              <CircularProgress variant="determinate" value={25} />
              <CircularProgress variant="determinate" value={50} />
              <CircularProgress variant="determinate" value={75} />
              <CircularProgress variant="determinate" value={100} />
              <CircularProgress variant="determinate" value={progress} />
            </Stack>
            <CircularProgress variant="determinate" value={50} />
            <br/>
            <LinearProgress color="secondary" />
            <br/>
            <LinearProgress color="success" />
            <br/>
            <LinearProgress color="inherit" />
            <br/>
            <LinearProgress color="secondary" />
            <br/>
            <LinearProgress color="success" />
            <br/>
            <LinearProgress color="inherit" />
            <br/>
            <LinearProgress color="secondary" />
            <br/>
            <LinearProgress color="success" />
            <br/>
            <LinearProgress color="inherit" />
            <br/>
            <LinearProgress color="secondary" />
            <br/>
            <LinearProgress color="success" />
            <br/>
            <LinearProgress color="inherit" />
            <br/>
            <LinearProgress color="secondary" />
            <br/>
            <LinearProgress color="success" />
            <br/>
            <LinearProgress color="inherit" />
            <br/>
            <LinearProgress color="secondary" />
            <br/>
            <LinearProgress color="success" />
            <br/>
            <LinearProgress color="inherit" />
            <br/>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 2, display: { xs: 'none', md: 'block' } }} />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2, width: { xs: '100%', md: '33.33%' } }}>
              <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h2" gutterBottom>Expanding the User</Typography>
              <Typography variant="body1" paragraph>Online search and data download capabilities will democratize access to Earth science data, allowing a broader range of users to engage in climate research and analysis.</Typography>
              <EarthPointCloudComponent />

            </Box>
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <IconButton onClick={toggleExpand} sx={{ transform: expandedSection ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }}>
              <ExpandMoreIcon />
            </IconButton>
          </Box>
        </SectionWrapper>
        <Collapse in={expandedSection}>
            <SectionWrapper bgColor="primary.main" removeTopBorder={true}>
              <Box sx={{ mt: 2, width: '100%' }}>
                <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h2" gutterBottom>
                  Expanded Feature Details
                </Typography>
                <Typography variant="body1" paragraph>
                  This section provides more in-depth information about our features. 
                  You can add as much content as you need here to give a comprehensive 
                  overview of what your product or service offers.
                </Typography>
              </Box>
              </SectionWrapper>
          </Collapse>

        <SectionWrapper bgColor="background.default">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: '80vh', width: '100%' }}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2, width: { xs: '100%', md: '33.33%' } }}>
              <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h2" gutterBottom>Statement 1</Typography>
              <Typography variant="body1" paragraph>Header 1</Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 2, display: { xs: 'none', md: 'block' } }} />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2, width: { xs: '100%', md: '33.33%' } }}>
              <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h2" gutterBottom>Center</Typography>
              <Typography variant="body1" paragraph>Plan</Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 2, display: { xs: 'none', md: 'block' } }} />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2, width: { xs: '100%', md: '33.33%' } }}>
              <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h2" gutterBottom>Divergent Statement</Typography>
              <Typography variant="body1" paragraph>Contact us</Typography>
            </Box>
          </Box>
          <Typography variant="body2">Interetsted to know more.</Typography>
        </SectionWrapper>

        <SectionWrapper bgColor="secondary.main">
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, minHeight: '80vh', width: '100%' }}>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2, width: { xs: '100%', md: '50%' } }}>
              <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h2" gutterBottom>John Doe</Typography>
              <Typography variant="body1" paragraph>"Great product, highly recommended!"</Typography>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ mx: 2, display: { xs: 'none', md: 'block' } }} />
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', p: 2, width: { xs: '100%', md: '50%' } }}>
              <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h2" gutterBottom>Jane Smith</Typography>
              <Typography variant="body1" paragraph>"Improved our workflow significantly."</Typography>
            </Box>
          </Box>
          <Typography variant="body2">Read more testimonials on our website.</Typography>
        </SectionWrapper>
      </Box>
    </CustomThemeProvider>
  );
};

export default LandingPage;