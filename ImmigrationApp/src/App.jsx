import React from 'react';
import bgVideo from './assets/background.mp4';
//import Helmet from 'react-helmet-async';
import Hero from './components/Hero';
import AppBarComponent from './components/AppBar';
import SlideshowBackground from './components/SlideshowBackground';
import MainPage from './pages/MainPage';
import ContactSection from './components/contactSection';
import { ThemeProvider } from '@mui/material/styles';
import theme from './constants/styles'; // Assuming you have a theme.js file for MUI them
import { Box } from '@mui/material';
function App() {
  console.log('App component rendered');
  return (
    <ThemeProvider theme={theme}>
      <AppBarComponent />
      {/* <Box sx={{ padding: "2rem", borderRadius: "8px", borderTop: "1px solid #ccc", width: "100%", height: "100vh", overflowY: "auto" }}>
        
         <SlideshowBackground>
         
        </SlideshowBackground>
      </Box> */}
      <MainPage />
     <ContactSection />
      
      {/* <div className="relative z-10 w-full px-6">
          <Hero />
          <ContactSection />
      </div> */}
    </ThemeProvider>
    
  );
}

export default App;