import React, {useRef} from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Box } from '@mui/material';
import Header from './components/Header';
import IntroSection from './components/IntroSection';
import FeaturesSection from './components/FeaturesSection';
import Gallery from './components/Gallery';
import TechDetails from './components/TechDetails';
import GameSection from './components/GameSection';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ArticleCard from './components/ArticleCard';

function App() {
  // Crear referencias para cada sección
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);

  // Función para hacer scroll a una sección específica
  const scrollToSection = (sectionRef) => {
    sectionRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <Router>
      <Header />
      <IntroSection secRef={section1Ref}/>
      <FeaturesSection />
      <Gallery />
      {/*  
     
      
      <TechDetails />
      <GameSection />
      <Contact />*/}
      <Footer />
    </Router>
  );
}

export default App;