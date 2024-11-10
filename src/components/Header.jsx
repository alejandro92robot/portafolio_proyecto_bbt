import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../img/bibliotech.png';
import { Typography, Button, Box } from '@mui/material';
import AppBarLibrary from '../components/AppBar';
import Transition from '../components/Transition/Transition';

const Inicio = () => {
    return (
        <>
            <AppBarLibrary sx={{ backgroundColor: '#4B6E9C' }} />
            <div>
                <Transition ComponentToAnimate={Info} />
            </div>
        </>
    );
};

export default Inicio;

const Info = () => {
    return (
        <>
            <Box
                sx={{
                    backgroundColor: '#0079E4',
                    minHeight: '45vh',
                    color: 'white',
                    textAlign: 'center',
                    paddingX: { xs: 2, md: 4 },
                }}
            >
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        paddingTop: { xs: '60px', md: '100px' },
                        fontSize: { xs: '1.8rem', sm: '2.5rem', md: '3.5rem' }, // Tamaño de fuente responsivo
                    }}
                >
                    Descubre el conocimiento.
                    <br />
                    Explora libremente.
                </Typography>

                <Typography
                    variant="h6"
                    component="p"
                    sx={{
                        marginBottom: { xs: '20px', md: '40px' },
                        fontSize: { xs: '1rem', sm: '1.25rem' }, // Tamaño de fuente responsivo
                        paddingX: { xs: 2, sm: 5, md: 10 }, // Ajuste de padding lateral en pantallas grandes
                    }}
                >
                    Bienvenido a Bibliotech, tu biblioteca escolar inteligente. Defiéndete de la ignorancia y explora libremente el vasto mundo del conocimiento.
                </Typography>

                <Link to="/introduccion">
                    <Button
                        variant="outlined"
                        sx={{
                            color: 'white',
                            borderColor: 'white',
                            fontSize: { xs: '0.8rem', md: '1rem' }, // Ajuste de tamaño de fuente del botón
                            paddingX: { xs: 2, md: 4 }, // Ajuste de padding horizontal en el botón
                            paddingY: { xs: 1, md: 1.5 },
                        }}
                    >
                        Start
                    </Button>
                </Link>
            </Box>

            {/* Contenedor de la imagen */}
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    marginTop: { xs: '30px', md: '50px' },
                }}
            >
                <Box
                    component="img"
                    src={logo}
                    alt="Logo de la biblioteca"
                    sx={{
                        width: { xs: '50%', sm: '35%', md: '25%' }, // Ajuste de tamaño de imagen responsivo
                        margin: '25px',
                        borderRadius: '20px',
                    }}
                />
            </Box>
        </>
    );
};
