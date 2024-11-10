import React from 'react';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ArticleCard = ({ picture, category, title, description, author }) => {
    return (
        <Box
            sx={{
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                overflow: 'hidden',
                maxWidth: { xs: '100%', sm: 600, md: 1050 },
                backgroundColor: '#fff',
                boxShadow: 3,
                margin: 'auto', // Centrado en pantallas más pequeñas
            }}
        >
            <Grid container spacing={0}>
                {/* Imagen */}
                <Grid item xs={12} md={4}>
                    <Box
                        component="img"
                        src={picture} // Recibe la imagen desde props
                        alt="Imagen de artículo"
                        sx={{
                            width: '100%',
                            height: { xs: 200, md: '100%' }, // Ajusta la altura en pantallas pequeñas
                            objectFit: 'cover',
                        }}
                    />
                </Grid>

                {/* Contenido de la Tarjeta */}
                <Grid item xs={12} md={7}>
                    <Box sx={{ padding: { xs: 2, md: 3 } }}>
                        {/* Categoría */}
                        <Typography variant="subtitle2" sx={{ color: 'orange', fontWeight: 'bold' }}>
                            {category} {/* Categoría recibida desde props */}
                        </Typography>

                        {/* Título */}
                        <Typography
                            variant="h6"
                            sx={{
                                fontWeight: 'bold',
                                marginTop: 1,
                                fontSize: { xs: '1rem', md: '1.25rem' }, // Ajusta tamaño del título
                            }}
                        >
                            {title} {/* Título recibido desde props */}
                        </Typography>

                        {/* Descripción */}
                        <Typography
                            variant="body2"
                            sx={{
                                marginTop: 1,
                                color: 'text.secondary',
                                display: { xs: 'none', sm: 'block' }, // Oculta en pantallas XS
                            }}
                        >
                            {description} {/* Descripción recibida desde props */}
                        </Typography>

                        {/* Autor */}
                        <Typography
                            variant="body2"
                            sx={{
                                color: 'primary.main',
                                marginTop: 2,
                                fontSize: { xs: '0.8rem', md: '1rem' },
                            }}
                        >
                            {author} {/* Autor recibido desde props */}
                        </Typography>
                    </Box>
                </Grid>
            </Grid>

            {/* Iconos de Comentarios y Vistas */}
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'flex-end',
                    padding: { xs: 1, md: 2 },
                    borderTop: '1px solid #e0e0e0',
                    color: 'text.secondary',
                }}
            >
                <IconButton size="small">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <Typography variant="caption" sx={{ marginLeft: 0.5 }}>9</Typography>
                </IconButton>
                <IconButton size="small">
                    <VisibilityIcon fontSize="small" />
                    <Typography variant="caption" sx={{ marginLeft: 0.5 }}>274</Typography>
                </IconButton>
            </Box>
        </Box>
    );
};

export default ArticleCard;
