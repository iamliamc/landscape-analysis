import { Link, Box, Typography } from '@mui/material'

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        <Link color="inherit" href="https://www.schmidtfutures.org/">
          Schmidt Futures: Syntropic Climate AI
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }

// TODO consider replicating the fun footer of ecosia homepage still looks passable and fun now
export default function Footer() {
  return (
      <Box style={{position: 'relative', marginTop: '5px'}} sx={{ bgcolor: 'background.paper', p: 6, backgroundRepeat: "no-repeat" }} component="footer">
          <Copyright />
      </Box>
  )
}