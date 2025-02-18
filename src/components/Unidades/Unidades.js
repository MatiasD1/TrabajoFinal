import React, { useState } from 'react';
import GaleriaImagenes from '../GaleriaImagenes/GaleriaImagenes.js';
import hab1a from "../../img/hab1a.jpg"; 
import hab1b from "../../img/hab1b.jpeg";
import hab1c from "../../img/hab1c.jpeg";
import hab2a from "../../img/hab2a.jpg"; 
import hab2b from "../../img/hab2b.jpeg";
import hab2c from "../../img/hab2c.jpeg";
import hab3a from "../../img/hab3a.jpg"; 
import hab3b from "../../img/hab3b.jpeg";
import hab3c from "../../img/hab3c.jpeg";
import hab4a from "../../img/hab4a.jpg"; 
import hab4b from "../../img/hab4b.jpg";
import hab4c from "../../img/hab4c.jpg";
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
    const unidad1Images = [hab1a, hab1b, hab1c];
    const unidad2Images = [hab2a, hab2b, hab2c];
    const unidad3Images = [hab3a, hab3b, hab3c];
    const unidad4Images = [hab4a, hab4b, hab4c];

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
                <h2 className='tituloPresentacionUnidades'>
                    Habitaciones & Suites: Confort y Elegancia Frente al Mar
                </h2>
                <p className='textoPresentacionUnidades'>
                    Descubra un refugio de lujo diseñado para su descanso. Nuestras habitaciones y suites combinan confort, diseño sofisticado y vistas incomparables al mar. Ya sea que busque una estancia acogedora o una experiencia exclusiva, cada detalle ha sido pensado para brindarle el máximo bienestar. Elija la opción que mejor se adapte a su estilo y disfrute de una estadía inolvidable.
                </p>
            </div>
            <div className="containerUnidades">
            <div className="item Unid1">
    <div className='fotosUnids' onClick={() => handleImageClick(unidad1Images)}>
        <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
        <img src={hab1a} alt="Imagen 1" className='fotoUnid'/>
    </div>
    <div className="textoUnidades">
        <h2 className='tituloUnid'>Doble Superior</h2>
            <p className='textoUnid'>
                Una combinación perfecta de confort y funcionalidad, disponible en formato matrimonial o twin para adaptarse a sus necesidades. Pensada para garantizar una estadía placentera, esta habitación cuenta con mobiliario elegante, un baño moderno y detalles cuidadosamente seleccionados para su descanso. Además, si viaja en familia o en grupo, tiene la posibilidad de conectar dos habitaciones, brindando mayor comodidad e independencia sin perder la cercanía con sus seres queridos.
            </p>
            <img src={aloeFooter} alt="icono flor decorativo" className='aloeFooter'/>
        </div>
    </div>

    <div className="item Unid2">
        <div className='fotosUnids' onClick={() => handleImageClick(unidad2Images)}>
            <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
            <img src={hab2a} alt="Imagen 1" className='fotoUnid'/>
        </div>
        <div className="textoUnidades">
            <h2 className='tituloUnid'>Doble Lujo</h2>
           
            <p className='textoUnid'>
                Con todas las comodidades de la Doble Superior, pero con el valor agregado de una vista privilegiada al mar. Despiértese cada mañana con la brisa oceánica y disfrute de un amanecer inolvidable desde la tranquilidad de su habitación. Diseñada para quienes buscan una experiencia más exclusiva, esta opción combina elegancia, confort y la posibilidad de contemplar las mejores visuales de la costa marplatense sin salir de su espacio privado.
            </p>
            <img src={aloeFooter} alt="icono flor decorativo" className='aloeFooter'/>
        </div>
    </div>

    <div className="item Unid3">
        <div className='fotosUnids' onClick={() => handleImageClick(unidad3Images)}>
            <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
            <img src={hab3a} alt="Imagen 1" className='fotoUnid'/>
        </div>
        <div className="textoUnidades">
            <h2 className='tituloUnid'>Suite Superior</h2>
           
            <p className='textoUnid'>
                Un espacio amplio y sofisticado de 40 m², pensado para quienes desean mayor confort durante su estadía. La Suite Superior cuenta con un baño en suite de diseño moderno, un área de estar con sillón y escritorio, y grandes ventanales que enmarcan vistas panorámicas del mar y la playa. Cada detalle ha sido seleccionado para ofrecer una experiencia de lujo relajado, combinando amplitud, privacidad y una atmósfera serena para su descanso.
            </p>
            <img src={aloeFooter} alt="icono flor decorativo" className='aloeFooter'/>                    
        </div>
    </div>

    <div className="item Unid4">
        <div className='fotosUnids' onClick={() => handleImageClick(unidad4Images)}>
            <img src={simboloMas} alt="Simbolo Mas" className='fotoSimbolo'/>
            <img src={hab4a} alt="Imagen 1" className='fotoUnid'/>
        </div>
        <div className="textoUnidades">
            <h2 className='tituloUnid'>Suite Presidencial</h2>
            
            <p className='textoUnid'>
                La máxima expresión del confort y la exclusividad. Esta lujosa suite cuenta con un balcón privado completamente vidriado y un solárium donde podrá relajarse disfrutando de la mejor vista del mar. Su diseño incluye un amplio living para momentos de descanso o reuniones privadas, una cocina equipada con desayunador y una habitación espaciosa con baño en suite, dotado de las máximas comodidades. Además, un elegante escritorio le permite disponer de un espacio de trabajo en caso de ser necesario. Cada rincón de la Suite Presidencial ha sido diseñado para brindar una experiencia única de lujo y sofisticación. 
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
