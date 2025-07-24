import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { PURE_WHITE } from '../constants/colors';

const appBarStyles = {
    backgroundColor: PURE_WHITE, // Make the AppBar transparent
    position: 'fixed',
    top: 0,
    left: 0,
}

const appBarButtonStyles = {
    color: '#000', // Set button text color to black
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.1)', // Light hover effect
    },
};

export default function AppBarComponent() {
  return (
    <AppBar sx={appBarStyles} elevation={0}>
        <Toolbar className="flex justify-between">  {/* Tailwind flex container with space between items */}
            <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: '#000' }}>
            Omal Remitance
            </Typography>
            <Box>
            <Button sx={appBarButtonStyles}>Information</Button>
            <Button sx={appBarButtonStyles}>Contact</Button>
            </Box>
        </Toolbar>
    </AppBar>
  
  );
}