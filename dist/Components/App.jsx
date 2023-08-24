import React, { useState, useEffect } from 'react';
import Typed from 'typed.js';
import { Container, Box, createTheme, ThemeProvider } from '@mui/material';
import LeetCode from './LeetCode.jsx';

const theme = createTheme({
  palette: {
    mode: 'dark', // Set the theme mode to dark
    primary: {
      main: '#90caf9', // Adjust primary color for dark mode
    },
    secondary: {
      main: '#f48fb1', // Adjust secondary color for dark mode
    },
    background: {
      default: '#121212', // Adjust background color for dark mode
      paper: '#1e1e1e', // Adjust paper color for dark mode
    },
  },
  typography: {
    fontFamily: 'Roboto, Arial, sans-serif',
  },
});
export default function App() {
  const el = React.useRef(null);
  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["I'm Mike, welcome to my development sampler."],
      startDelay: 300,
      typeSpeed: 100,
      backSpeed: 100,
      backDelay: 100
    });
    return () => {
      typed.destroy();
    };
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="md">
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            minHeight="100vh"
          >
          <h1 ref={el}></h1>
          <LeetCode />
        </Box>
      </Container>
    </ThemeProvider>
  );
}