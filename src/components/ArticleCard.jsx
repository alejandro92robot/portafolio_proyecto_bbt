import React from 'react';
import { Box, Typography, IconButton, Card, CardContent } from '@mui/material';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';

const ArticleCard = ({ picture, category, title, description, author }) => {
    return (
        <Card
            sx={{
                background: 'linear-gradient(135deg, #FFFFFF 40%, #E0F7FA)',
                boxShadow: '0px 4px 20px rgba(0,0,0,0.15)',
                borderRadius: '12px',
                overflow: 'hidden',
                maxWidth: { xs: '100%', sm: 600, md: 900 },
                margin: 'auto',
                transition: 'transform 0.3s ease',
                '&:hover': {
                    transform: 'scale(1.02)',
                },
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' },
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
                    padding: { xs: 2, md: 3 },
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                }}
            >
                {/* Encabezado */}
                <Box>
                    <Typography variant="subtitle2" sx={{ color: '#FF7043', fontWeight: 'bold' }}>
                        {category}
                    </Typography>

                    <Typography
                        variant="h6"
                        sx={{
                            fontWeight: 'bold',
                            marginTop: 1,
                            color: '#3F51B5',
                            fontSize: { xs: '1rem', md: '1.25rem' },
                        }}
                    >
                        {title}
                    </Typography>

                    <Typography
                        variant="body2"
                        sx={{
                            marginTop: 1,
                            color: 'text.secondary',
                            display: { xs: 'none', sm: 'block' },
                            fontSize: { xs: '0.9rem', md: '1rem' },
                        }}
                    >
                        {description}
                    </Typography>
                </Box>

                {/* Autor e Iconos */}
                <Box sx={{ marginTop: 2, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <Typography
                        variant="body2"
                        sx={{ color: 'primary.main', fontSize: { xs: '0.8rem', md: '1rem' } }}
                    >
                        {author}
                    </Typography>
                    <Box sx={{ display: 'flex', alignItems: 'center', color: 'text.secondary' }}>
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
    );
};

export default ArticleCard;
