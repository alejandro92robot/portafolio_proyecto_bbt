import React from "react";
import { Box } from "@mui/material";
import ArticleCard from "./ArticleCard";
import proyecto from '../img/abp_picture.jpg'
import totem from '../img/totem_picture.jpg'
import library from '../img/library_view.jpg'
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
            <ArticleCard picture={totem}/>
            <ArticleCard picture={proyecto}/>
            <ArticleCard picture={library}/>
        </Box>
    )
}
export default Gallery;