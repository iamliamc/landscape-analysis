import React from 'react';
import { createTheme, ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

const theme = createTheme({
  palette: {
    primary: {
      main: '#F0E6E6', // Soft pink
      contrastText: '#4A4A4A',
    },
    secondary: {
      main: '#E6F0E8', // Soft mint
      contrastText: '#4A4A4A',
    },
    tertiary: {
        main: '#E6E6F0', // Soft lavender 
        contrastText: '#4A4A4A',
      },
    background: {
      default: '#FFFFFF',
    },
    text: {
      primary: '#4A4A4A',
      secondary: '#6B6B6B',
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '2.5rem',
      fontWeight: 500,
    },
    h2: {
      fontSize: '2rem',
      fontWeight: 500,
    },
    body1: {
      fontSize: '1rem',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none',
        },
      },
    },
  },
});

export const CustomThemeProvider = ({ children }) => {
  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiThemeProvider>
  );
};

export default CustomThemeProvider;