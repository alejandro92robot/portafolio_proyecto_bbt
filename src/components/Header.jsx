import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../img/ABS_logo.png';
import { Container, Typography, Button, Box, AppBar, Toolbar } from '@mui/material';
import AppBarLibrary from '../components/AppBar';
import Transition from '../components/Transition/Transition'
import { purple, yellow } from '@mui/material/colors';
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

            <Box sx={{ backgroundColor: '#0079E4', minHeight: '80vh', color: 'white', textAlign: 'center' }}>
                <Typography variant="h2" component="h1" gutterBottom sx={{ paddingTop: '100px' }}>
                    {/* Discover Knowledge. */}
                    Descubre el conocimiento.
                    <br />
                    {/*   Explore Freely. */}
                    Explora libremente.
                </Typography>
                <Typography variant="h6" component="p" sx={{ marginBottom: '40px' }}>
                    {/*  Welcome to Bibliotech, your intelligent school library. Defend yourself against ignorance and explore the vast world of knowledge freely. */}
                    Bienvenido a Bibliotech, tu biblioteca escolar inteligente. Defiéndete de la ignorancia y explora libremente el vasto mundo del conocimiento.
                </Typography>
                <Link to="/introduccion">
                    <Button variant="outlined" sx={{ color: 'white', borderColor: 'white' }}>
                        Start
                    </Button>
                </Link>
            </Box>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
                <img src={logo} alt="Logo de la biblioteca" style={{ width: '25%', margin: '25px', borderRadius: '20px' }} />
            </div>
        </>
    );
};
