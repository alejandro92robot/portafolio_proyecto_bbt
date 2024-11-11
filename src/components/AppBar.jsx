import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import LocalLibraryIcon from '@mui/icons-material/LocalLibrary';
import logo from '../img/logoAppbar.jpg'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const pages = [
    { nombre: 'Resumen', path: '/resumen', onClick: 'handleOpenDialog' },
    { nombre: 'Objetivos', path: '/objetivos' },
    { nombre: 'Galería', path: '/galeria', onClick: '' },
]

function AppBarPage() {
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [openDialog, setOpenDialog] = React.useState(false);

    const location = useLocation(); // Hook to get the current location

    React.useEffect(() => {
        if (location.pathname === '/buscar') {
            setOpenDialog(true);
        } else {
            setOpenDialog(false);
        }
    }, [location.pathname]); // Dependency array to trigger effect on location change

    const handleOpenDialog = () => {
        setOpenDialog(true);
    };

    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar
    position="static"
    sx={{
        background: 'linear-gradient(135deg, #D500F9 1%, #FF4081 100%)', // Gradiente fucsia
    }}
>
    <Container maxWidth="xl">
        <Toolbar disableGutters>
            <LocalLibraryIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
            <Typography
                variant="h6"
                noWrap
                component="a"
                href="/"
                sx={{
                    mr: 2,
                    display: { xs: 'none', md: 'flex' },
                    fontFamily: 'monospace',
                    fontWeight: 700,
                    letterSpacing: '.3rem',
                    color: 'inherit',
                    textDecoration: 'none',
                }}
            >
                BIBLIOTECH
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'right' }}>
                {pages.map((page) => (
                    <Button
                        key={page.nombre}
                        component={Link}
                        to={page.path}
                        onClick={page.onClick === 'handleOpenDialog' ? handleOpenDialog : undefined}
                        sx={{ my: 2, color: 'white', display: 'block', textDecoration: 'none' }}
                    >
                        {page.nombre}
                    </Button>
                ))}
            </Box>
        </Toolbar>
    </Container>
</AppBar>

        </>
    );
}
export default AppBarPage;
