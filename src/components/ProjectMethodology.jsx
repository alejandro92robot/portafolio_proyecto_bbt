// ProjectMethodology.js
import React from 'react';
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Card } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProjectMethodology = () => {
    return (
        <Container maxWidth="md" sx={{ mt: 4 }}>
            <Card
                sx={{
                    padding: { xs: 2, sm: 3, md: 4 },
                    background: 'linear-gradient(135deg, #FFFFFF 40%, #E0F7FA)',
                    borderRadius: '16px',
                    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.15)',
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.02)',
                        boxShadow: '0px 6px 24px rgba(0, 0, 0, 0.2)',
                    },
                }}
            >
                <Typography
                    variant="h4"
                    align="left"
                    color="primary"
                    sx={{ mb: 3, fontWeight: 'bold' }}
                >
                    Metodología del Proyecto
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
                    <Accordion key={index} sx={{ mb: 2, backgroundColor: '#f5f5f5' }}>
                        <AccordionSummary
                            expandIcon={<ExpandMoreIcon />}
                            aria-controls={`panel${index}-content`}
                            id={`panel${index}-header`}
                        >
                            <Typography variant="h6" color="secondary" sx={{ fontWeight: 'bold' }}>
                                {section.title}
                            </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                            <Typography variant="body1" sx={{ color: '#4B6E9C' }}>
                                {section.content}
                            </Typography>
                        </AccordionDetails>
                    </Accordion>
                ))}
            </Card>
        </Container>
    );
};

export default ProjectMethodology;
