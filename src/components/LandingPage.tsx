import React from 'react';
import { 
  Box, 
  Container, 
  Typography, 
  useTheme, 
  useMediaQuery,
  Grid,
  Card,
  CardContent,
  Divider,
} from '@mui/material';
import CustomThemeProvider from './CustomThemeProvider';

const MultiColumnGrid = ({ columnSet = [0, 1, 2] }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        minHeight: '80vh', // This ensures the grid takes up most of the viewport height
        width: '100%',
      }}
    >
      {columnSet.map((columnIndex) => (
        <React.Fragment key={columnIndex}>
          {columnIndex > 0 && (
            <Divider orientation="vertical" flexItem sx={{ mx: 2, display: { xs: 'none', md: 'block' } }} />
          )}
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              p: 2,
              width: { xs: '100%', md: '33.33%' },
            }}
          >
            <Typography variant={isSmallScreen ? 'h5' : 'h4'} component="h2" gutterBottom>
              Column {columnIndex + 1}
            </Typography>
            <Typography variant="body1" paragraph>
              This is column {columnIndex + 1} content. You can customize this text for each column.
            </Typography>
            <Box sx={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
              Content
            </Box>
          </Box>
        </React.Fragment>
      ))}
    </Box>
  );
};

// Welcome Section Component
const WelcomeSection = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  const cards = Array(9).fill().map((_, i) => ({ 
    title: `Card ${i + 1}`, 
    content: `This is card number ${i + 1}` 
  }));

  return (
    <Grid container spacing={4}>
      <Grid item xs={12} md={6}>
        <Typography variant={isSmallScreen ? 'h4' : 'h2'} component="h2" gutterBottom>
          Welcome
        </Typography>
        <Typography variant="body1">
          Welcome to our amazing product!
        </Typography>
      </Grid>
      <Grid item xs={8} md={6}>
        <Grid container spacing={2}>
          {cards.map((card, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card>
                <CardContent>
                  <Typography variant="h6" component="h3">
                    {card.title}
                  </Typography>
                  <Typography variant="body2">
                    {card.content}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

// Features Section Component
const FeaturesSection = () => (
  <>
    <Typography variant="h2" component="h2" gutterBottom>
      Features
    </Typography>
    <Typography variant="body1">
      Discover our incredible features.
    </Typography>
  </>
);

// Pricing Section Component
const PricingSection = () => (
  <>
    <Typography variant="h2" component="h2" gutterBottom>
      Pricing
    </Typography>
    <Typography variant="body1">
      Affordable plans for everyone.
    </Typography>
  </>
);

// Testimonials Section Component
const TestimonialsSection = () => (
  <>
    <Typography variant="h2" component="h2" gutterBottom>
      Testimonials
    </Typography>
    <Typography variant="body1">
      See what our customers are saying.
    </Typography>
  </>
);

// Contact Section Component
const ContactSection = () => (
  <>
    <Typography variant="h2" component="h2" gutterBottom>
      Contact
    </Typography>
    <Typography variant="body1">
      Get in touch with us today!
    </Typography>
  </>
);

// Main LandingPage Component
const LandingPage = () => {
  const sections = [
    { component: MultiColumnGrid, bgColor: 'primary.main', props: { columnSet: [0, 1] } },
    { component: MultiColumnGrid, bgColor: 'secondary.main' },
    { component: PricingSection, bgColor: 'background.default' },
    { component: TestimonialsSection, bgColor: 'background.paper' },
    { component: ContactSection, bgColor: 'background.default' },
  ];

  return (
    <CustomThemeProvider>
    <Box>
      {sections.map(({ component: SectionComponent, bgColor, props }, index) => (
        <Box
          key={index}
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            bgcolor: bgColor,
            color: 'theme.palette.primary.main',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Container maxWidth="xl">
            <SectionComponent {...props} />
          </Container>
        </Box>
      ))}
    </Box>
    </CustomThemeProvider>
  );
};

export default LandingPage;