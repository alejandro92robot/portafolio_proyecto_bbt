import React from 'react';
import { Box, Typography, Card, CardContent, Stepper, Step, StepLabel, Avatar } from '@mui/material';
import { EmojiEvents as TrophyIcon, Book as BookIcon, School as SchoolIcon } from '@mui/icons-material';

const LibraryFeatures = () => {
  return <BibliotechStory />;
};

export default LibraryFeatures;

const BibliotechStory = () => {
  const steps = [
    {
      label: 'Fundación',
      description:
        'Un taller de programación permitió a los estudiantes explorar tecnología e idear innovaciones. A pesar de las limitaciones, surgió la idea de modernizar la biblioteca escolar con un tótem interactivo para localizar libros, lo que dio origen al proyecto Biblioteca Inteligente, buscando transformar la biblioteca en un espacio educativo del siglo XXI y promover la colaboración entre estudiantes y docentes.',
      icon: <SchoolIcon sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: '#FFD700' }} />
    },
    {
      label: 'Expansión de Recursos',
      description:
        'Buscamos ampliar los recursos disponibles, incorporando nuevos títulos en diferentes géneros y material diversificado para cada estilo de aprendizaje.',
      icon: <BookIcon sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: '#8E24AA' }} />,
    },
    {
      label: 'Implementación de Gamificación',
      description:
        'El sistema de puntos de experiencia y rangos fue implementado, recompensando a los usuarios por su participación y aprendizaje.',
      icon: <TrophyIcon sx={{ fontSize: { xs: 40, sm: 50, md: 60 }, color: '#4CAF50' }} />,
    },
    {
      label: 'La Comunidad Crece',
      description:
        'Con la participación activa de estudiantes y docentes, Bibliotech se ha convertido en una comunidad vibrante de aprendizaje.',
      icon: <Avatar alt="Comunidad" src="/comunidad.jpg" sx={{ width: { xs: 40, sm: 50, md: 60 }, height: { xs: 40, sm: 50, md: 60 } }} />,
    },
  ];

  return (
    <Box
      sx={{
        maxWidth: { xs: '100%', sm: '90%', md: '70%' },
        margin: 'auto',
        padding: { xs: 3, sm: 4 },
        background: 'linear-gradient(135deg, #0079E4 1%, #00B4D8 100%)',
        borderRadius: 4,
        boxShadow: '0px 6px 30px rgba(0,0,0,0.3)',
        transition: 'transform 0.3s ease',
        '&:hover': {
          transform: 'scale(1.01)',
          boxShadow: '0px 8px 35px rgba(0,0,0,0.4)',
        },
      }}
    >
      <Stepper orientation="vertical" activeStep={-1} connector={null}>
        {steps.map((step, index) => (
          <Step key={index}>
            <StepLabel
              icon={step.icon}
              sx={{
                '& .MuiStepLabel-iconContainer': {
                  marginRight: 2,
                },
              }}
            >
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 'bold',
                  color: '#E3F2FD',
                  textAlign: 'left',
                  fontSize: { xs: '1.3rem', sm: '1.6rem' },
                  textShadow: '1px 1px 6px rgba(0,0,0,0.4)',
                  marginY: 1,
                }}
              >
                {step.label}
              </Typography>
            </StepLabel>
            <Card
              sx={{
                background: 'linear-gradient(135deg, #FFFFFF 30%, #E3F2FD)',
                boxShadow: '0px 4px 15px rgba(0,0,0,0.25)',
                padding: { xs: 3, sm: 4 },
                borderRadius: 3,
                transition: 'transform 0.3s ease',
                marginBottom: 3,
                '&:hover': {
                  transform: 'scale(1.03)',
                  boxShadow: '0px 6px 20px rgba(0,0,0,0.3)',
                },
              }}
            >
              <CardContent>
                <Typography
                  variant="body1"
                  sx={{
                    color: '#0d47a1',
                    fontSize: { xs: '1rem', sm: '1.2rem' },
                    textAlign: 'left',
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
