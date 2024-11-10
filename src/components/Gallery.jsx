import React from "react";
import { Box } from "@mui/material";
import ArticleCard from "./ArticleCard";
import totemImage from '../img/totem_picture.jpg'; // Reemplaza con tu imagen
import libraryView from '../img/library_view.jpg'
import abpPicture from '../img/abp_picture.jpg'
import gamificacion from '../img/gamificacion.jpg'
import libraryView2 from '../img/library_view2.jpg'
import implementacion from '../img/implementacion.jpg'
import pruebas from '../img/pruebas.jpg'
// Arreglo de información de tarjetas
const articles = [
    {
        picture: totemImage,
        category: "Modernización Tecnológica",
        title: "Tótem Interactivo",
        description: "Implementación de un tótem táctil en Windows, utilizando React para la interfaz de usuario, Node.js para el backend, y MongoDB como base de datos. Este tótem permitirá la búsqueda de libros y su localización física mediante un sistema de luces controlado por Arduino.",
        author: "Equipo de Desarrollo",
        views: 350,
        comments: 12
    },
    {
        picture: libraryView,
        category: "Modernización Tecnológica",
        title: "Sistema de Préstamos",
        description: "Desarrollo de un sistema de gestión de préstamos que permitirá a los estudiantes solicitar y devolver libros mediante códigos QR, con autenticación basada en su RUT.",
        author: "Equipo de Desarrollo",
        views: 220,
        comments: 8
    },
    {
        picture: abpPicture,
        category: "Modernización Tecnológica",
        title: "Gamificación",
        description: "Implementación de un sistema de gamificación para incentivar el uso de la biblioteca mediante la acumulación de puntos de experiencia y rangos, ofreciendo recompensas y privilegios a los estudiantes más activos.",
        author: "Equipo de Gamificación",
        views: 410,
        comments: 15
    },
    {
        picture: gamificacion,
        category: "Desarrollo y Pruebas",
        title: "Metodología Ágil",
        description: "Uso de metodologías ágiles para gestionar el desarrollo del software, asegurando la capacidad de adaptarse rápidamente a los cambios y a las necesidades de los usuarios.",
        author: "Equipo de Desarrollo",
        views: 180,
        comments: 5
    },
    {
        picture: libraryView2,
        category: "Desarrollo y Pruebas",
        title: "Pruebas Piloto",
        description: "Realización de pruebas piloto para evaluar la eficacia del sistema y hacer los ajustes necesarios antes de su implementación final.",
        author: "Equipo de QA",
        views: 300,
        comments: 7
    },
    {
        picture: implementacion,
        category: "Documentación y Casos de Uso",
        title: "Guías Técnicas y de Usuario",
        description: "Elaboración de documentación detallada que incluye códigos, tecnologías implementadas y casos de uso específicos que ilustran el funcionamiento del sistema en la práctica.",
        author: "Equipo de Documentación",
        views: 150,
        comments: 3
    },
    {
        picture: pruebas,
        category: "Implementación Tecnológica",
        title: "Página Web",
        description: "Desarrollo e implementación de una plataforma web para la gestión de préstamos de libros con funcionalidad de códigos QR.",
        author: "Equipo Web",
        views: 280,
        comments: 10
    },
    {
        picture: totemImage,
        category: "Implementación Tecnológica",
        title: "Sistema de Iluminación Inteligente",
        description: "Instalación de un sistema de iluminación que mejora la navegación y búsqueda de libros dentro de la biblioteca.",
        author: "Equipo de Tecnología",
        views: 390,
        comments: 14
    },
    {
        picture: libraryView,
        category: "Actualización del Inventario",
        title: "Selección de Materiales",
        description: "Actualización y diversificación del inventario con nuevos títulos y géneros que responden a los intereses y necesidades actuales de los estudiantes.",
        author: "Equipo de Biblioteca",
        views: 210,
        comments: 6
    },
    {
        picture: libraryView2,
        category: "Sistema de Gamificación",
        title: "Desarrollo e Implementación",
        description: "Creación de un sistema de gamificación que incentive la participación activa de los estudiantes en el uso de la biblioteca.",
        author: "Equipo de Gamificación",
        views: 460,
        comments: 18
    },
    {
        picture: pruebas,
        category: "Involucramiento de la Comunidad",
        title: "Participación de Estudiantes Voluntarios",
        description: "Inclusión de estudiantes voluntarios en las fases de desarrollo e implementación para fomentar un sentido de pertenencia y compromiso con el proyecto.",
        author: "Equipo de Comunidad",
        views: 195,
        comments: 4
    },
    {
        picture: implementacion,
        category: "Involucramiento de la Comunidad",
        title: "Taller de Programación Creativa",
        description: "Continuación del taller iniciado en 2023, donde un grupo de estudiantes y su profesor trabajará en el desarrollo y mejora del proyecto.",
        author: "Equipo de Educación",
        views: 340,
        comments: 11
    }
];

// Componente Gallery
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
            {articles.map((article, index) => (
                <ArticleCard 
                    key={index}
                    picture={article.picture}
                    category={article.category}
                    title={article.title}
                    description={article.description}
                    author={article.author}
                />
            ))}
        </Box>
    );
}

export default Gallery;
