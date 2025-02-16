import React, { useState } from 'react';
import GaleriaImagenes from '../GaleriaImagenes/GaleriaImagenes';
import CostaImagen from "../../img/costa.jpeg";
import fotoExterior from "../../img/fotoExterior.jpg";
import fotoPieza from "../../img/fotoPieza.jpg"; 
import fotoHabitacion from "../../img/fotoHabitacion.JPG"
import simboloMas from "../../img/icons/simboloMas.png" 
import villaVictoria from "../../img/villaVictoria.jpg";
import torreAgua from "../../img/torreDelAgua.jpg";
import centroGuemes from "../../img/centroGuemes.jpg";
import playaVarese from "../../img/playaVarese.jpg";

const GaleriaInicio = () => {
    const [showCarrusel, setShowCarrusel] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    
    // Lista completa de imágenes para el carrusel
    const images = [
        fotoPieza,
        CostaImagen,
        fotoExterior,
        fotoHabitacion, 
        villaVictoria,
        torreAgua,
        centroGuemes,
        playaVarese,
        // Asegúrate de agregar aquí todas las imágenes disponibles
        // Agrega más URLs de imágenes aquí según sea necesario
    ];

    // Maneja el clic en una imagen, abriendo el carrusel desde esa imagen específica
    const handleImageClick = (index) => {
        setSelectedImageIndex(index);
        setShowCarrusel(true);
    };

    const closeCarousel = () => {
        setShowCarrusel(false);
    };

    return (
        <div className='galeriaInicio'>
            <h2 className='tituloGaleriaInicio'>Galería de Imágenes</h2>
            <div className='grid-container'>
                {/* Fila 1 */}
                <div className='grid-row'>
                    {images.map((image, index) => (
                        <div key={index} className='fotosDeptosInicio' onClick={() => handleImageClick(index)}>
                            <img src={simboloMas} alt="Simbolo Mas" className='fotoSimboloInicio'/>
                            <img src={image} alt={`Imagen ${index + 1}`} className='fotoDeptoInicio'/>
                        </div>
                    ))}
                </div>      
                {/* Puedes añadir más filas según necesites */}
               
            </div>

            {showCarrusel && (
                <div className="overlay" onClick={closeCarousel}>
                    <div className="carrusel-container" onClick={(e) => e.stopPropagation()}>
                        <GaleriaImagenes 
                            images={images} 
                            initialIndex={selectedImageIndex} 
                            onClose={closeCarousel} 
                        />
                    </div>
                </div>
            )}
        </div>
    );
}

export default GaleriaInicio;
