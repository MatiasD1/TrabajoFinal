import React, { useState } from 'react';
import GaleriaImagenes from '../GaleriaImagenes/GaleriaImagenes';
import galeriaInicio1 from '../../img/galeriaInicio1.jpg'
import galeriaInicio2 from '../../img/galeriaInicio2.jpg'
import galeriaInicio3 from '../../img/galeriaInicio3.jpg'
import galeriaInicio4 from '../../img/galeriaInicio4.jpg'
import galeriaInicio5 from '../../img/galeriaInicio5.jpg'
import galeriaInicio6 from '../../img/galeriaInicio6.jpg'
import galeriaInicio7 from '../../img/galeriaInicio7.jpg'
import galeriaInicio8 from '../../img/galeriaInicio8.jpg'
import simboloMas from "../../img/icons/simboloMas.png" 


const GaleriaInicio = () => {
    const [showCarrusel, setShowCarrusel] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    
    // Lista completa de imágenes para el carrusel
    const images = [
        galeriaInicio1,
        galeriaInicio2,
        galeriaInicio3,
        galeriaInicio5,
        galeriaInicio4, 
        galeriaInicio7,
        galeriaInicio6,
        galeriaInicio8,
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
