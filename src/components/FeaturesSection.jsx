import React from 'react';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { Box, Typography, Card, CardContent, Stepper, Step, StepLabel, Button, Avatar } from '@mui/material';
import { EmojiEvents as TrophyIcon, Book as BookIcon, School as SchoolIcon } from '@mui/icons-material';
const FeatureCard = ({ icon, title, description }) => (
    <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', margin: '20px 0' }}>
        <Box sx={{ marginRight: '20px' }}>
            {icon}
        </Box>
        <Box>
            <Typography variant="h6" sx={{ color: '#6A1B9A', fontWeight: 'bold' }}>{title}</Typography>
            <Typography variant="body1" sx={{ color: '#333' }}>{description}</Typography>
        </Box>
    </Box>
);

const LibraryFeatures = () => {
    return (
        <Box sx={{ padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: '300px', marginLeft: '300px' }}>
           {/*  <FeatureCard
                icon={<BookIcon sx={{ fontSize: 200, color: '#8E24AA' }} />}
                title="Acceso Ilimitado a Cientos de Títulos"
                description="Explora un vasto catálogo de libros que abarca desde novelas apasionantes hasta manuales técnicos. Descubre tu próxima lectura en múltiples idiomas y categorías, disponibles a solo un clic."
            />
            <FeatureCard
                icon={<SchoolIcon sx={{ fontSize: 200, color: '#8E24AA' }} />}
                title="Recursos Educativos Exclusivos"
                description="Sumérgete en una amplia selección de guías de estudio, investigaciones académicas y materiales didácticos. Perfecto para apoyar tu aprendizaje y ayudarte a destacar en tus estudios."
            />
            <FeatureCard
                icon={<SportsEsportsIcon sx={{ fontSize: 200, color: '#8E24AA' }} />}
                title="Gana Puntos de Experiencia y Mejora tu Rango"
                description="Conviértete en un maestro del conocimiento al ganar puntos de experiencia por tus logros. Cada acción te acerca a desbloquear nuevos niveles y recompensas mientras subes en el ranking de Bibliotech."
            />
            <FeatureCard
                icon={<EmojiEventsIcon sx={{ fontSize: 200, color: '#8E24AA' }} />}
                title="Trofeos y Premios al Progreso"
                description="Cada hito alcanzado en tu aventura académica te recompensa con premios únicos. Demuestra tu maestría y colecciona trofeos a medida que conquistas los retos del conocimiento."
            /> */}
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
            icon: <SchoolIcon sx={{ fontSize: 50, color: '#FFD700' }} />,
        },
        {
            label: 'Expansión de Recursos',
            description: 'Buscamos ampliar los recursos disponibles, incorporando nuevos títulos en diferentes géneros y material diversificado para cada estilo de aprendizaje.',
            icon: <BookIcon sx={{ fontSize: 50, color: '#8E24AA' }} />,
        },
        {
            label: 'Implementación de Gamificación',
            description: 'El sistema de puntos de experiencia y rangos fue implementado, recompensando a los usuarios por su participación y aprendizaje.',
            icon: <TrophyIcon sx={{ fontSize: 50, color: '#4CAF50' }} />,
        },
        {
            label: 'La Comunidad Crece',
            description: 'Con la participación activa de estudiantes y docentes, Bibliotech se ha convertido en una comunidad vibrante de aprendizaje.',
            icon: <Avatar alt="Comunidad" src="/comunidad.jpg" sx={{ width: 50, height: 50 }} />,
        },
    ];

    return (
        <Box sx={{ width: '100%', padding: '40px', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#f3f4f6', boxShadow: '0px 10px 30px rgba(0,0,0,0.1)' }}>
            <Stepper orientation="vertical" activeStep={-1} connector={null}>
                {steps.map((step, index) => (
                    <Step key={index}>
                        <StepLabel icon={step.icon}>
                            <Typography variant="h5" sx={{ fontWeight: 'bold', color: '#3f51b5', textAlign: 'left', display: 'block' }}>
                                {step.label}
                            </Typography>
                        </StepLabel>
                        <Card sx={{ backgroundColor: '#ffffff', boxShadow: '0px 4px 15px rgba(0,0,0,0.1)', marginBottom: '20px', padding: '20px', borderRadius: '10px', textAlign: 'center' }}>
                            <CardContent>
                                <Typography variant="body1" sx={{ color: '#4B6E9C', textAlign: 'left' }}>
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