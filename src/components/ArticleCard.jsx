import React, { useState } from 'react';
import { Box, Typography, IconButton, Card, CardContent, Dialog, DialogTitle, DialogContent, DialogActions, Button } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ArticleCard = ({ picture, category, title, description, author }) => {
    const [open, setOpen] = useState(false);

    // Funciones para manejar la apertura y cierre del modal
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Card
                onClick={handleOpen}
                sx={{
                    background: 'linear-gradient(135deg, #0079E4 1%, #00B4D8 100%)', // Gradiente azul
                    boxShadow: '0px 4px 20px rgba(0,0,0,0.3)',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    maxWidth: { xs: '100%', sm: 600, md: 900 },
                    margin: 'auto',
                    transition: 'transform 0.3s ease',
                    '&:hover': {
                        transform: 'scale(1.05)',
                        boxShadow: '0px 6px 25px rgba(0,0,0,0.35)',
                    },
                    display: 'flex',
                    flexDirection: { xs: 'column', md: 'row' },
                    cursor: 'pointer',
                }}
            >
                {/* Imagen */}
                <Box
                    component="img"
                    src={picture}
                    alt="Imagen de artículo"
                    sx={{
                        width: { xs: '100%', md: '35%' },
                        height: { xs: 200, md: '100%' },
                        objectFit: 'cover',
                    }}
                />

                {/* Contenido */}
                <CardContent
                    sx={{
                        padding: { xs: 3, md: 4 },
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                        color: '#FFFFFF',
                    }}
                >
                    {/* Encabezado */}
                    <Box>
                        <Typography variant="subtitle2" sx={{ color: '#BBDEFB', fontWeight: 'bold', fontSize: '1.1rem' }}>
                            {category}
                        </Typography>

                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 'bold',
                                marginTop: 1,
                                color: '#E3F2FD',
                                textShadow: '1px 1px 6px rgba(0,0,0,0.6)',
                                fontSize: { xs: '1.2rem', md: '1.5rem' },
                            }}
                        >
                            {title}
                        </Typography>

                        <Typography
                            variant="body2"
                            sx={{
                                marginTop: 1,
                                color: '#E1F5FE',
                                display: { xs: 'none', sm: 'block' },
                                fontSize: { xs: '1rem', md: '1.1rem' },
                            }}
                        >
                            {description}
                        </Typography>
                    </Box>

                    {/* Autor e Iconos */}
                    <Box sx={{ marginTop: 3, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Typography
                            variant="body2"
                            sx={{ color: '#BBDEFB', fontSize: { xs: '0.9rem', md: '1.1rem' }, fontWeight: 'bold' }}
                        >
                            {author}
                        </Typography>
                        <Box sx={{ display: 'flex', alignItems: 'center', color: '#E1F5FE' }}>
                            <IconButton size="small" sx={{ color: 'inherit' }}>
                                <ChatBubbleOutlineIcon fontSize="small" />
                                <Typography variant="caption" sx={{ marginLeft: 0.5 }}>9</Typography>
                            </IconButton>
                            <IconButton size="small" sx={{ color: 'inherit' }}>
                                <VisibilityIcon fontSize="small" />
                                <Typography variant="caption" sx={{ marginLeft: 0.5 }}>274</Typography>
                            </IconButton>
                        </Box>
                    </Box>
                </CardContent>
            </Card>

            {/* Modal */}
            <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
                <DialogTitle
                    sx={{
                        background: 'linear-gradient(135deg, #3F51B5, #2196F3)',
                        color: '#E3F2FD',
                        textAlign: 'center',
                        fontWeight: 'bold',
                        textShadow: '2px 2px 8px rgba(0,0,0,0.5)',
                    }}
                >
                    {title}
                </DialogTitle>
                <DialogContent dividers sx={{ backgroundColor: '#E3F2FD' }}>
                    <Box
                        component="img"
                        src={picture}
                        alt="Imagen de artículo"
                        sx={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'cover',
                            marginBottom: 2,
                            borderRadius: '12px',
                        }}
                    />
                    <Typography variant="subtitle2" color="#2196F3" sx={{ marginBottom: 1, fontWeight: 'bold' }}>
                        {category}
                    </Typography>
                    <Typography variant="body1" sx={{ marginBottom: 2, color: '#1E88E5' }}>
                        {description}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Autor: <span style={{ color: '#3F51B5' }}>{author}</span>
                    </Typography>
                </DialogContent>
                <DialogActions sx={{ backgroundColor: '#E3F2FD' }}>
                    <Button onClick={handleClose} sx={{ color: '#1E88E5', fontWeight: 'bold' }}>
                        Cerrar
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

export default ArticleCard;
