import React, { useState } from 'react';
import GaleriaImagenes from '../GaleriaImagenes/GaleriaImagenes.js';
import CostaImagen from "../../img/costa.jpeg";
import fotoExterior from "../../img/fotoExterior.jpg";
import fotoPieza from "../../img/fotoPieza.jpg"; 
import fotoDucha from "../../img/Ducha.JPG"
import fotoHabitacion from "../../img/fotoHabitacion.JPG"
import fotoSala from "../../img/fotoSala.jpg"
import living from "../../img/Living.JPG"
import simboloMas from "../../img/icons/simboloMas.png" 
import aloeFooter from '../../img/icons/aloeFooter.png' 
import imagenPlaya from '../../img/playa.jpg'
import EnlaceContacto from '../EnlaceContacto/EnlaceContacto.js';
import Encabezado from '../Encabezado/Encabezado.js'
import fotoEncabezado from '../../img/costa.jpeg'

const Unidades = () => {
    const [showCarrusel, setShowCarrusel] = useState(false);
    const [selectedImageIndex, setSelectedImageIndex] = useState(null);
    const [selectedImages, setSelectedImages] = useState([]);


    // Arreglos de imágenes específicos para cada unidad
    const unidad1Images = [fotoExterior, fotoHabitacion, living];
    const unidad2Images = [fotoPieza, fotoSala, fotoDucha];
    const unidad3Images = [fotoExterior, living, CostaImagen];
    const unidad4Images = [fotoPieza, fotoHabitacion, fotoSala];

    // Maneja el clic en una imagen, abriendo el carrusel desde esa imagen específica
    const handleImageClick = (unidadImages) => {
        setSelectedImageIndex(0);  // Inicia el carrusel desde la primera imagen
        setShowCarrusel(true);
        setSelectedImages(unidadImages);  // Asignamos el arreglo de imágenes correspondiente a la unidad
    };
    
    return (
        <div className='Unidades'>    
            <Encabezado imageSrc={fotoEncabezado} seccion={"Unidades"}/>
            <div className='presentacionUnidades'>        
                <h2 className='tituloPresentacionUnidades'>Te proponemos 4 opciones para garantizar tu descanso</h2>
                <p className='textoPresentacionUnidades'>
                    Disponemos de 4 Unidades distribuidos en 2 plantas. Esto favorece la circulacion fluida por los espacios comunes y la privacidad de cada unidad.
                    Cada Unidartamento cuenta con una baulera y un módulo de estacionamiento fijo, semicubierto, en el sector posterior del edificio, al que se puede acceder con facilidad.
                    En el frente al sector de cocheras, están las bauleras, con una superficie promedio de xxm2.<br/><br/>
                    Todos los Unidades tienen un desarrollo distinto, pero comparten la cualidad de la amplitud y del confort y la atencion enfocada en una decoracion con producciones artísticas que transmiten calma, paz o alegría,
                    para reforzar las cualidades de Unidades con muchas necesidades cubiertas, donde poder pasarla bien.<br/> 
                </p>
            </div>
            <div className="containerUnidades">
            <div className="item Unid1">
    <div className='fotosUnids' onClick={() => handleImageClick(unidad1Images)}>
        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
        <img src={fotoExterior} alt="Imagen 1" className='fotoUnid'/>
    </div>
    <div className="textoUnidades">
        <h2 className='tituloUnid'>Unidartamento PB1</h2>
            <p className='subtituloUnid'>
                Tiene 2 ambientes y se desarrolla sobre una superficie de xx mts. cuadrados. 
                Es un Unid. externo. Disponibilidad para 3 personas.
            </p>
            <p className='textoUnid'>
                Cuenta con una cocina totalmente equipada; estar-comedor amplio, con una mesa de
                0.80x1.60mts., sillas , sillones, 1 sofá cama de 1 plaza y un
                smart tv 43”. Un espacio de trabajo compuesto por un escritorio, iluminación focalizada y una silla de oficina.
                El dormitorio tiene 1 cama de dos plazas. La habitación conecta por doble circulación
                con el baño ( que tiene ventilación natural) y el estar comedor .<br/>
            </p>
            <img src={aloeFooter} alt="icono flor decorativo" className='aloeFooter'/>
        </div>
    </div>

    <div className="item Unid2">
        <div className='fotosUnids' onClick={() => handleImageClick(unidad2Images)}>
            <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
            <img src={fotoExterior} alt="Imagen 1" className='fotoUnid'/>
        </div>
        <div className="textoUnidades">
            <h2 className='tituloUnid'>Unidartamento PB2</h2>
            <p className='subtituloUnid'>
                Tiene 3 ambientes y 2 baños y se desarrolla en una superficie de 66 mts. cuadrados. Es un
                Unidartamento interno. Disponibilidad para 4 personas.
            </p>
            <p className='textoUnid'>
                Cuenta con una cocina totalmente equipada ; estar-comedor amplio, con una mesa de
                0.8x1.60mts, sillas ,sillones y un smart tv de 43”. Tiene un baño de uso general dividido en dos
                espacios: toilette y baño prop. dicho, con ventilación natural y extractor de aire. 1 habitación con
                dos camas de 1 plaza y un placard grande.1 habitación con una cama de 2 plazas y 2 placares , en
                suite con el otro baño, que también tiene ventilación natural y extractor de aire.<br />
            </p>
            <img src={aloeFooter} alt="icono flor decorativo" className='aloeFooter'/>
        </div>
    </div>

    <div className="item Unid3">
        <div className='fotosUnids' onClick={() => handleImageClick(unidad3Images)}>
            <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
            <img src={fotoExterior} alt="Imagen 1" className='fotoUnid'/>
        </div>
        <div className="textoUnidades">
            <h2 className='tituloUnid'>Unidartamento PA1</h2>
            <p className='subtituloUnid'>
                Tiene 3 ambientes y 2 baños, se desarrolla en dos niveles; ocupa una superficie de 83 mts.
                cuadrados. Es un Unidartamento externo. Disponibilidad para 4 personas.
            </p>
            <p className='textoUnid'>
                La planta baja tiene una cocina totalmente equipada; estar-comedor amplio, con una mesa de
                0.80x1.60mts, sillas , sillones y un smart tv de 43”. Un baño de uso general y el dormitorio
                principal, que es grande, con una cama de 2 plazas, un vestidor con dos placares, que conecta
                con un baño en suite que tiene ventilación exterior. Desde el comedor o desde la habitación se
                tiene acceso a un balcón de 9 mts. cuadrados.<br />
            </p>
            <img src={aloeFooter} alt="icono flor decorativo" className='aloeFooter'/>                    
        </div>
    </div>

    <div className="item Unid4">
        <div className='fotosUnids' onClick={() => handleImageClick(unidad4Images)}>
            <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
            <img src={fotoPieza} alt="Imagen 1" className='fotoUnid'/>
        </div>
        <div className="textoUnidades">
            <h2 className='tituloUnid'>Unidartamento PA2</h2>
            <p className='subtituloUnid'>
                Tiene 3 ambientes y 2 baños, se desarrolla en dos niveles; ocupa una superficie de 66 mts.
                cuadrados. Es un Unidartamento interno. Disponibilidad para 4 personas.
            </p>
            <p className='textoUnid'>
                En la planta baja tiene una cocina totalmente equipada; estar-comedor amplio, con una mesa de
                0.80x1.60mts, sillas , sillones y un smart tv de 43”. Un espacio de trabajo compuesto por un escritorio, iluminación focalizada y una silla de oficina.
                Un baño de uso general con ventilación al
                exterior y un dormitorio con 2 camas de 1 plaza y un placard grande.
                El nivel superior es un altillo de ..x.. mts. donde hay 1 dormitorio con una cama de 2 plazas y un
                placard grande. Conecta a un vestidor y a un baño en suite. El vanitory está integrado al ambiente
                del dormitorio.<br />
            </p>
            <img src={aloeFooter} alt="icono flor decorativo" className='aloeFooter'/>
        </div>
    </div>   

        
    </div>

            {/* Renderiza el carrusel si showCarrusel es true */}
            {showCarrusel && (
    <GaleriaImagenes 
        images={selectedImages}  // Ahora usa el estado con las imágenes seleccionadas
        initialIndex={selectedImageIndex} 
        onClose={() => setShowCarrusel(false)} 
    />
)}


            <EnlaceContacto imageSrc={imagenPlaya} /> 
        </div>
    );
}

export default Unidades;
