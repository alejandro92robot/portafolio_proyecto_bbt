import React from 'react';
import { Box, Typography, Divider, Card } from '@mui/material';

const ProjectMethodology = () => {
    return (
        <Card
            sx={{
                maxWidth: { xs: '90%', sm: '80%', md: '750px', lg: '900px' },
                margin: '30px auto',
                padding: { xs: 2, sm: 3, md: 4 },
                background: 'linear-gradient(135deg, #FFFFFF 40%, #E0F7FA)',
                borderRadius: '16px',
                boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
                lineHeight: 1.75,
                typography: { xs: 'body2', sm: 'body1', md: 'body1' },
                transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.02)',
                    boxShadow: '0px 6px 24px rgba(0, 0, 0, 0.2)',
                },
            }}
        >
            <Typography
                variant="h6"
                gutterBottom
                sx={{
                    fontWeight: 'bold',
                    color: '#3F51B5',
                    fontSize: { xs: '1rem', sm: '1rem', md: '1.5rem' },
                    textAlign: 'left',
                    marginBottom: 3,
                }}
            >
                Metodología del Proyecto
            </Typography>

            <Typography variant="body1" paragraph>
                La metodología empleada en el desarrollo del proyecto de la Biblioteca Inteligente se basa en un enfoque ágil y participativo, promoviendo la colaboración activa entre estudiantes, docentes y otros participantes. Desde la concepción hasta su implementación, se siguen procesos que garantizan adaptabilidad y mejora continua.
            </Typography>

            {[
                {
                    title: 'Identificación de Necesidades',
                    content: 'El proceso inicia con la identificación de las necesidades y expectativas de los estudiantes mediante encuestas y formularios entre estudiantes y docentes. Esta información permite definir los requisitos del sistema y proporciona una base sólida para el desarrollo.',
                },
                {
                    title: 'Desarrollo Iterativo',
                    content: 'Una vez definidos los requerimientos, el equipo adopta un enfoque de desarrollo iterativo. Se crean prototipos tempranos de la interfaz y el sistema, permitiendo ajustes y pruebas piloto en un entorno real para refinar el sistema antes de su despliegue completo.',
                },
                {
                    title: 'Participación Activa de Estudiantes',
                    content: 'Los estudiantes del taller de programación creativa participan en todas las etapas, desde la programación y el diseño hasta la configuración del hardware, fomentando pertenencia y responsabilidad en un proyecto que beneficia a toda la comunidad.',
                },
                {
                    title: 'Tecnología y Herramientas',
                    content: 'El software utiliza React para el frontend, Node.js para el backend y MongoDB para la base de datos. Arduino controla la iluminación de los cubículos, permitiendo la integración interactiva de hardware y software y mejorando la experiencia del usuario.',
                },
                {
                    title: 'Integración y Monitoreo Continuo',
                    content: 'La integración de todos los componentes garantiza un sistema coherente y eficiente. Se monitorea el desempeño en tiempo real para identificar y corregir problemas oportunamente, asegurando una mejora continua y adaptación.',
                },
                {
                    title: 'Resumen',
                    content: 'La metodología combina la recolección y análisis de datos, el desarrollo iterativo y la participación colaborativa, creando un sistema avanzado que fomenta un entorno de aprendizaje didáctico y participativo, adaptado a las necesidades actuales.',
                },
            ].map((section, index) => (
                <Box key={index} sx={{ marginBottom: 3 }}>
                    <Typography
                        variant="h6"
                        gutterBottom
                        sx={{
                            fontWeight: 'bold',
                            fontSize: { xs: '1.1rem', sm: '1.25rem', md: '1.5rem' },
                            color: '#FF7043',
                        }}
                    >
                        {section.title}
                    </Typography>
                    <Typography variant="body1" paragraph sx={{ color: '#4B6E9C' }}>
                        {section.content}
                    </Typography>
                    {index < 5 && <Divider sx={{ my: { xs: 1, sm: 2 }, backgroundColor: '#ccc' }} />}
                </Box>
            ))}
        </Card>
    );
};

export default ProjectMethodology;
