import React from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Box, Typography, Card, CardContent, Stepper, Step, StepLabel, Avatar } from '@mui/material';
import { EmojiEvents as TrophyIcon, Book as BookIcon, School as SchoolIcon } from '@mui/icons-material';

const FeatureCard = ({ icon, title, description }) => (
  <Box
    sx={{
      display: 'flex',
      flexDirection: { xs: 'column', sm: 'row' },
      alignItems: 'center',
      margin: { xs: '10px 0', sm: '20px 0' },
      textAlign: { xs: 'center', sm: 'left' },
      width: '100%', // Prevent overflow
      maxWidth: '100%', // Prevent overflow
      boxSizing: 'border-box', // Ensures padding/margins are accounted for
    }}
  >
    <Box sx={{ marginRight: { sm: '20px' }, marginBottom: { xs: '10px', sm: 0 } }}>
      {icon}
    </Box>
    <Box>
      <Typography
        variant="h6"
        sx={{
          color: '#6A1B9A',
          fontWeight: 'bold',
          fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
          wordWrap: 'break-word',
          overflowWrap: 'break-word', // Prevent overflow
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: '#333',
          fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
          overflowWrap: 'break-word',
          wordBreak: 'break-word', // Prevent text overflow
          maxWidth: '100%', // Prevent overflow
          textOverflow: 'ellipsis', // Handle overflow gracefully
        }}
      >
        {description}
      </Typography>
    </Box>
  </Box>
);

const LibraryFeatures = () => {
  return (
    <Box
      sx={{
        padding: { xs: '10px', sm: '20px', md: '30px' }, // Adjust padding for small screens
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%',
        marginX: 'auto',
        width: '100%', // Make sure width is always 100%
        boxSizing: 'border-box',  // Ensure margins and paddings are considered in width calculation
      }}
    >
      <BibliotechStory />
    </Box>
  );
};

export default LibraryFeatures;

const BibliotechStory = () => {
  const steps = [
    {
      label: 'Fundación de Bibliotech',
      description: 'En 2023, el Colegio American British inició un taller de programación creativa para que los estudiantes exploraran tecnología de forma práctica. Aunque el equipo tuvo ideas innovadoras, la falta de recursos y la visión limitada de tecnología dificultaron su desarrollo. En 2024, los participantes reconocieron el potencial de la biblioteca escolar, que estaba subutilizada y desactualizada, para convertirse en un centro de aprendizaje moderno. Propusieron un tótem interactivo para localizar libros usando luces controladas por computadora, y de esta idea nació el proyecto de Biblioteca Inteligente, con el objetivo de modernizar la biblioteca y hacerla relevante para la educación del siglo XXI mediante la colaboración entre estudiantes y docentes.',
      icon: <SchoolIcon sx={{ fontSize: { xs: 30, sm: 40, md: 50 }, color: '#FFD700' }} />,
    },
    {
      label: 'Expansión de Recursos',
      description: 'Buscamos ampliar los recursos disponibles, incorporando nuevos títulos en diferentes géneros y material diversificado para cada estilo de aprendizaje.',
      icon: <BookIcon sx={{ fontSize: { xs: 30, sm: 40, md: 50 }, color: '#8E24AA' }} />,
    },
    {
      label: 'Implementación de Gamificación',
      description: 'El sistema de puntos de experiencia y rangos fue implementado, recompensando a los usuarios por su participación y aprendizaje.',
      icon: <TrophyIcon sx={{ fontSize: { xs: 30, sm: 40, md: 50 }, color: '#4CAF50' }} />,
    },
    {
      label: 'La Comunidad Crece',
      description: 'Con la participación activa de estudiantes y docentes, Bibliotech se ha convertido en una comunidad vibrante de aprendizaje.',
      icon: <Avatar alt="Comunidad" src="/comunidad.jpg" sx={{ width: { xs: 30, sm: 40, md: 50 }, height: { xs: 30, sm: 40, md: 50 } }} />,
    },
  ];

  return (
    <Box
      sx={{
        width: '100%',
        padding: { xs: '15px', sm: '20px', md: '30px' }, // Adjust padding for small screens
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        backgroundColor: '#f3f4f6',
        boxShadow: '0px 10px 30px rgba(0,0,0,0.1)',
        margin: '0 auto',
        maxWidth: '100%', // Prevent overflow
        boxSizing: 'border-box', // Ensures padding is considered
      }}
    >
      <Stepper orientation="vertical" activeStep={-1} connector={null}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel icon={step.icon}>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: '#3f51b5',
                  textAlign: { xs: 'center', sm: 'left' },
                  fontSize: { xs: '1rem', sm: '1.25rem', md: '1.5rem' },
                  display: 'block',
                  wordWrap: 'break-word', // Ensure wrapping for longer text
                }}
              >
                {step.label}
              </Typography>
            </StepLabel>
            <Card
              sx={{
                backgroundColor: '#ffffff',
                boxShadow: '0px 4px 15px rgba(0,0,0,0.1)',
                marginBottom: '20px',
                padding: { xs: '10px', sm: '15px', md: '20px' },
                borderRadius: '10px',
                textAlign: 'center',
                width: '100%', // Prevent overflow
                maxWidth: '100%', // Prevent overflow
                marginX: 'auto',
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#4B6E9C',
                    textAlign: 'left',
                    fontSize: { xs: '0.9rem', sm: '1rem', md: '1.1rem' },
                    overflowWrap: 'break-word', // Prevent overflow
                  }}
                >
                  {step.description}
                </Typography>
              </CardContent>
            </Card>
          </Step>
        ))}
      </Stepper>
    </Box>
  );
};
