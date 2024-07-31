import { Link, Box, Typography } from '@mui/material'

function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" align="center">
        <Link color="inherit" href="https://www.schmidtfutures.org/">
          Schmidt Futures
        </Link>{' '}
        {new Date().getFullYear()}
      </Typography>
    );
  }

// TODO consider replicating the fun footer of ecosia homepage still looks passable and fun now
export default function Footer() {
  return (
    <Box component="footer" sx={{ mt: 'auto', py: 2 }}>
      <Copyright />
    </Box>
  )
}