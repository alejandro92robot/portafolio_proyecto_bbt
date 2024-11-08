import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Introduction = (secRef) => {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    padding: 6,
                    backgroundColor: '#f4f4f9',
                    borderRadius: 3,
                    boxShadow: 3,
                    textAlign: 'center',
                    transition: 'all 0.3s ease-in-out',
                    '&:hover': {
                        boxShadow: 6,
                        transform: 'scale(1.02)',
                    },
                }}
            >
                <Typography
                    variant="h3"
                    sx={{
                        marginBottom: 2,
                        fontWeight: 'bold',
                        color: '#3f51b5',
                        fontFamily: '"Roboto", sans-serif',
                        letterSpacing: 1,
                    }}
                >
                    BIBLIOTECA INTELIGENTE
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        marginBottom: 4,
                        fontWeight: 400,
                        color: '#555',
                        fontFamily: '"Roboto", sans-serif',
                        lineHeight: 1.6,
                    }}
                >
                    En la era digital actual, la forma en que accedemos al conocimiento está cambiando rápidamente. Sin embargo, las bibliotecas escolares no han evolucionado al ritmo de estos avances, limitando su capacidad para servir como un centro vibrante de aprendizaje y descubrimiento. La biblioteca, que aún se basa en recursos impresos tradicionales, no cumple con las expectativas modernas de los estudiantes, quienes buscan experiencias más dinámicas e interactivas.
                    El proyecto Biblioteca Inteligente se propone transformar esta realidad al introducir innovaciones tecnológicas y modernizar el inventario de la biblioteca. Nuestro objetivo es convertir la biblioteca en un espacio moderno y atractivo, donde la tecnología y la accesibilidad se unan para mejorar la experiencia de lectura y aprendizaje. La iniciativa incluye la implementación de una plataforma web para la gestión de préstamos mediante códigos QR y un sistema de iluminación inteligente para facilitar la búsqueda de libros.

                </Typography>

                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        padding: '12px 30px',
                        fontSize: '16px',
                        borderRadius: 20,
                        fontWeight: 'bold',
                        letterSpacing: 1,
                        '&:hover': {
                            backgroundColor: '#283593',
                        },
                    }}
                    href="#about"
                >
                    Aprende más sobre el proyecto
                </Button>
            </Box>
        </Container>
    );
};

export default Introduction;
