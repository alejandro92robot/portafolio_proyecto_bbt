import React from "react";
import { Box } from "@mui/material";
import ArticleCard from "./ArticleCard";
const Gallery = () => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center', // Centra el contenido en el eje horizontal
                gap: 2, // Espacio entre cada tarjeta
                width: '100%' // Asegura que el contenedor ocupe el ancho completo
            }}
        >
            <ArticleCard />
            <ArticleCard />
            <ArticleCard />
        </Box>
    )
}
export default Gallery;