import React, { useState } from 'react';
import Encabezado from '../Encabezado/Encabezado' 
import EnlaceContacto from '../EnlaceContacto/EnlaceContacto'
import imagenPlaya from '../../img/playa.jpg'
import CostaImagen from "../../img/costa.jpeg";
import fotoExterior from "../../img/fotoExterior.jpg";
import fotoPieza from "../../img/fotoPieza.jpg"; 
import GaleriaImagenes from '../GaleriaImagenes/GaleriaImagenes';
import IconosServicios from '../IconosServicios/IconosServicios.js'; 
import fotoMardel from '../../img/fotoMardel.jpg'
import OtrosServicios from '../OtrosServicios/OtrosServicios.js';

const Servicios = () => {
    const [showCarrusel, setShowCarrusel] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
    const [images] = useState([
        fotoPieza,
        CostaImagen,
        fotoExterior,
        // Agrega más URLs de imágenes aquí según sea necesario
    ]);
    const handleImageClick = () => {
        setSelectedImage(images);
        setShowCarrusel(true);
    };
    return (
        <div className='servicios'>
            <Encabezado imageSrc={fotoMardel} seccion={"Servicios"}/>
            <IconosServicios/>
            {showCarrusel && <GaleriaImagenes images={selectedImage} onClose={() => setShowCarrusel(false)} />} {/* Renderiza el carrusel si showCarrusel es true */}
            <OtrosServicios/>
            <EnlaceContacto imageSrc={imagenPlaya} /> 
        </div>  
    );
}

export default Servicios;