import React from 'react';
import { Box, Typography, Avatar, Grid, IconButton } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ArticleCard = () => {
    return (
        <Box
            sx={{
                border: '1px solid #e0e0e0',
                borderRadius: 2,
                overflow: 'hidden',
                maxWidth: 850,
                backgroundColor: '#fff',
                boxShadow: 3,
            }}
        >
            <Grid container spacing={0}>
                {/* Imagen */}
                <Grid item xs={12} md={5}>
                    <Box
                        component="img"
                        src="https://tse4.mm.bing.net/th?id=OIP.WNk42slKG8T0UFajEldD8gHaE8&pid=Api&P=0&h=180" // Reemplaza con la URL de la imagen deseada
                        alt="Imagen de artículo"
                        sx={{
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                        }}
                    />
                </Grid>

                {/* Contenido de la Tarjeta */}
                <Grid item xs={12} md={7}>
                    <Box sx={{ padding: 2 }}>
                        {/* Categoría */}
                        <Typography variant="subtitle2" sx={{ color: 'orange', fontWeight: 'bold' }}>
                            TECHNOLOGY INTEGRATION
                        </Typography>

                        {/* Título */}
                        <Typography variant="h6" sx={{ fontWeight: 'bold', marginTop: 1 }}>
                            Overcoming Potential Risks of Student Tech Use
                        </Typography>

                        {/* Descripción */}
                        <Typography variant="body2" sx={{ marginTop: 1, color: 'text.secondary' }}>
                            From social isolation to a mistaken belief that they can multitask, here are some of the risks that arise when students use digital tools—and what teachers can do to help.
                        </Typography>

                        {/* Autor */}
                        <Typography variant="body2" sx={{ color: 'primary.main', marginTop: 2 }}>
                            Daniel Leonard
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
                    padding: 1,
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
