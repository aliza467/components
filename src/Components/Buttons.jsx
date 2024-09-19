import React from 'react';
import { Button, Container, Box, ThemeProvider, createTheme } from '@mui/material';
import { styled } from '@mui/system';
import Tables from './Table';

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: 30,
  padding: '10px 20px',
  textTransform: 'none',
  fontWeight: 'bold',
  fontSize: '1rem',
  transition: 'all 0.3s ease-in-out',
  '&:hover': {
    transform: 'scale(1.05)',
    boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
  },
}));

const theme = createTheme({
    palette: {
      primary: {
        main: '#1976d2', // A nice blue color
      },
      secondary: {
        main: '#dc004e', // A nice red color
      },
    },
  });

const Buttons = () => {
  return (
    <Container maxWidth="sm" sx={{ mt: 5 }}>
      <Box sx={{ display: 'flex', gap: 2, flexDirection: 'column', alignItems: 'center' }}>
        <StyledButton variant="contained" color="primary">
          Contained Button
        </StyledButton>
        <StyledButton variant="outlined" color="secondary">
          Outlined Button
        </StyledButton>
        <StyledButton variant="text" color="primary">
          Text Button
        </StyledButton>

        <ThemeProvider theme={theme}>
            <Tables />
        </ThemeProvider>
      </Box>
    </Container>


  );
};

export default Buttons;

