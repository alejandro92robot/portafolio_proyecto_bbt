import * as Ract from 'react';

import { Box, Typography, Link } from '@mui/material';

const Footer = () => {
    return (
        <Box sx={{ backgroundColor: '#0079E4', color: 'white', padding: '20px', marginTop: '20px' }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexWrap: 'wrap' }}>
                <Box sx={{ display: 'flex', gap: '15px', margin: '30px' }}>
                    <Link href="#" color="inherit" underline="hover">
                        Inicio
                    </Link>
                    <Link href="#" color="inherit" underline="hover">
                        Acerca de
                    </Link>
                    <Link href="#" color="inherit" underline="hover">
                        Contacto
                    </Link>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '30px' }}>
                    <Typography variant="h6">Biblioteca Inteligente</Typography>
                    <Typography variant="body2">© 2024 Todos los derechos reservados</Typography>
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;