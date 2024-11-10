import React, { useRef } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import FeaturesSection from './components/FeaturesSection';
import Gallery from './components/Gallery';
import Footer from './components/Footer';
import './App.css'
function App() {
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);

  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Router>
      <Header />
      <Box
        sx={{
          padding: { xs: '10px', sm: '20px', md: '40px' },  // Responsividad en márgenes
          width: '100%', // Ancho 100% en móviles
          maxWidth: '70%', // Limitado al 70% en pantallas grandes
          marginX: 'auto',  // Centrado
        }}
      >
        <IntroSection secRef={section1Ref} />
        <FeaturesSection />
        <Gallery />
      </Box>
      <Footer />
    </Router>
  );
}

export default App;
