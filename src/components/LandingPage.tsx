import { 
  Box, 
  Container, 
  Typography, 
  useTheme, 
  useMediaQuery,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

const sections = [
  { 
    title: 'Welcome', 
    content: 'Welcome to our amazing product!',
    twoColumns: true,
    cards: Array(9).fill().map((_, i) => ({ title: `Card ${i + 1}`, content: `This is card number ${i + 1}` }))
  },
  { title: 'Features', content: 'Discover our incredible features.' },
  { title: 'Pricing', content: 'Affordable plans for everyone.' },
  { title: 'Testimonials', content: 'See what our customers are saying.' },
  { title: 'Contact', content: 'Get in touch with us today!' },
];

const LandingPage = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <Box>
      {sections.map((section, index) => (
        <Box
          key={section.title}
          sx={{
            minHeight: '100vh',
            display: 'flex',
            alignItems: 'center',
            bgcolor: index % 2 === 0 ? 'background.default' : 'background.paper',
            borderBottom: '1px solid',
            borderColor: 'divider',
          }}
        >
          <Container maxWidth="lg">
            {section.twoColumns ? (
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Typography
                    variant={isSmallScreen ? 'h4' : 'h2'}
                    component="h2"
                    gutterBottom
                  >
                    {section.title}
                  </Typography>
                  <Typography variant="body1">
                    {section.content}
                  </Typography>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Grid container spacing={2}>
                    {section.cards.map((card, cardIndex) => (
                      <Grid item xs={12} sm={6} md={4} key={cardIndex}>
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
            ) : (
              <>
                <Typography
                  variant={isSmallScreen ? 'h4' : 'h2'}
                  component="h2"
                  gutterBottom
                >
                  {section.title}
                </Typography>
                <Typography variant="body1">
                  {section.content}
                </Typography>
              </>
            )}
          </Container>
        </Box>
      ))}
    </Box>
  );
};

export default LandingPage;