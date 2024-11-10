import React from 'react';
import { Box, Typography, Button, Container } from '@mui/material';

const Introduction = (secRef) => {
    return (
        <Container maxWidth="lg">
            <Box
                sx={{
                    padding: { xs: 3, md: 6 }, // Ajuste de padding responsivo
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
                        fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' }, // Tamaño de fuente responsivo
                    }}
                >
                    BIBLIOTECA INTELIGENTE
                </Typography>

                <Typography
                    variant="h6"
                    sx={{
                        marginBottom: { xs: 3, md: 4 },
                        fontWeight: 400,
                        color: '#555',
                        fontFamily: '"Roboto", sans-serif',
                        lineHeight: 1.6,
                        fontSize: { xs: '0.9rem', sm: '1rem', md: '1.15rem' }, // Tamaño de fuente responsivo
                        paddingX: { xs: 2, sm: 5, md: 10 }, // Ajuste de padding lateral en pantallas grandes
                    }}
                >
El proyecto Biblioteca Inteligente busca modernizar las bibliotecas escolares, que aún dependen de recursos impresos tradicionales, para adaptarse a las necesidades de los estudiantes actuales, quienes buscan experiencias más dinámicas e interactivas. La iniciativa incluye la incorporación de tecnología, como una plataforma web para gestionar préstamos mediante códigos QR y un sistema de iluminación inteligente, con el objetivo de crear un espacio moderno y accesible que mejore la experiencia de lectura y aprendizaje.                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    sx={{
                        padding: { xs: '10px 20px', sm: '12px 30px' }, // Ajuste de padding responsivo
                        fontSize: { xs: '14px', sm: '16px' }, // Tamaño de fuente responsivo
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
