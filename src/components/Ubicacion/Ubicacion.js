import React from 'react';
import Encabezado from '../Encabezado/Encabezado.js';
import Swiper from '../Swiper/Swiper.js';
import Swiper2 from '../Swiper2/Swiper2.js';
import fotoEncabezado from '../../img/SanCarlos.jpg'; 
import MapaFoto from '../../img/Mapa.png';

const Ubicacion = () => {
    return (
        <div className='ubicacion'>
            <Encabezado imageSrc={fotoEncabezado} seccion={"Ubicación"} />
            <div className='presentacionUbicacion'>
                <p className='fraseUbicacion'>
                    San Carlos: Encanto y Tranquilidad en Mar del Plata
                </p>
                <p className='textoUbicacion'>
                    El barrio San Carlos, en Mar del Plata, es una ubicación privilegiada
                    que combina tranquilidad, belleza natural y proximidad a los principales
                    atractivos de la ciudad. Sus calles arboladas y su entorno sereno crean 
                    el escenario ideal para una estadía placentera, lejos del bullicio pero 
                    con fácil acceso a playas, comercios y paseos emblemáticos.
                    Ubicado en una de las zonas más pintorescas de la ciudad, San Carlos
                    se distingue por su arquitectura encantadora y su atmósfera residencial. 
                    A pocos minutos del mar, ofrece vistas inigualables y la posibilidad de 
                    disfrutar de caminatas relajantes por sus alrededores. Además, cuenta 
                    con una variada oferta gastronómica y espacios culturales que enriquecen 
                    la experiencia de quienes lo visitan.
                    Desde aquí, es sencillo acceder a puntos clave de Mar del Plata,
                    como el Faro, la costa de Punta Mogotes y el centro comercial Güemes. 
                    Su ubicación estratégica lo convierte en un lugar ideal para quienes 
                    buscan comodidad, exclusividad y el encanto de un barrio tradicional 
                    con todos los servicios necesarios para una estadía inolvidable.
                </p>
            </div>
            <div className='owlComponenteCarrusel'>
            <Swiper2 className="swiperUbicacion" />
            </div>
            <div className='serviciosCercanos'>
                <h2 className='tituloSwiper'>Explora los Mejores Puntos de Interés</h2>
                <Swiper />
            </div>     
            <div className='mapaUbicacion'>
                <h2 className='tituloMapa'>Dónde encontrarnos</h2>
                <img src={MapaFoto} alt="Mapa"/>
            </div>
        </div>
    );
}

export default Ubicacion;
