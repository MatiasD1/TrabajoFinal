import React from 'react';
import Encabezado from '../Encabezado/Encabezado.js';
import Swiper from '../Swiper/Swiper.js';
import Swiper2 from '../Swiper2/Swiper2.js';
import fotoEncabezado from '../../img/arena.png'; 
import MapaFoto from '../../img/Mapa.png';

const Ubicacion = () => {
    return (
        <div className='ubicacion'>
            <Encabezado imageSrc={fotoEncabezado} seccion={"Ubicación"} />
            <div className='presentacionUbicacion'>
                <p className='fraseUbicacion'>Barrio San Carlos , un lugar que nos invita a
                quedarnos.</p>
                <p className='textoUbicacion'>
                    Estamos ubicados en la bahía de Punta Mogotes,
                    la cual se destaca por su tranquilidad y por
                    su hermosa vista a las mejores playas de la ciudad.
                    <br/><br/>
                    Todo el corredor de playas del sur y Punta Mogotes
                    se encuentra a pocos minutos, así como el centro comercial 
                    y gastronómico de las calles Alem, Güemes y Puerto.
                    <br/><br/>
                    La llegada al hotel desde Ruta 2 por Constitución
                    y siguiendo toda la ruta costera suma una experiencia
                    de contacto con el mar y la arquitectura frente al mar 
                    que auguran el inicio de esta experiencia única.
                </p>
            </div>
            <div className='owlComponenteCarrusel'>
            <Swiper2 className="swiperUbicacion" />
            </div>
            <div className='serviciosCercanos'>
                <h2 className='tituloSwiper'>Poco nos separa de lugares para recorrer y descubrir.</h2>
                <Swiper />
            </div>     
            <div className='mapaUbicacion'>
                <h2 className='tituloMapa'>Mapa</h2>
                <img src={MapaFoto} alt="Mapa"/>
            </div>
        </div>
    );
}

export default Ubicacion;
