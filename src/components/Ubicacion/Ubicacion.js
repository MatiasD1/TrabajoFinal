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
                    Puerto Bueno está en el Barrio San Carlos, que es un barrio residencial pegado al campo de golf
                    del Club de Golf Mar del Plata. Es un lugar de fácil acceso, sereno y seguro. Ideal para quienes
                    buscan paz y tranquilidad en sus vacaciones. Está muy cerca de la intensidad de Playa Grande,
                    pero no se ve influido ni por el ruido ni por el tráfico; propiciando un entorno pacífico para
                    relajarse y descansar.<br/><br/>
                    Predominan las casas de no más de dos plantas, con jardines cuidados y sobre lotes grandes; las
                    calles están bien conservadas y limpias.
                    Puerto Bueno está muy próximo a una amplia gama de comodidades y servicios:
                    A 6 cuadras de nuestro complejo de deptos. está el centro comercial de la calle Alem , con una
                    interesante oferta gastronómica. Simultáneamente brinda una estructura de servicios que
                    resuelve el día a día: supermercados, farmacias, verdulerías, panaderías, rotiserías, lavaderos,
                    asistencia médica, gimnasios, etc. . Esto se complementa con los servicios disponibles en el centro
                    comercial y gastronómico del Puerto, donde se incluyen las sucursales de los bancos más
                    importantes, y que dista solo 8 cuadras de nuestra dirección.
                    El Parque Primavesi, a escasas cuatro cuadras, es un área recreativa clásica de Mar del Plata, ideal
                    para disfrutar de actividades al aire libre, hacer ejercicio o simplemente distenderse y disfrutar de
                    la naturaleza.
                    En un radio de una cuadra respecto de nuestra dirección hay tres paradas de transporte púbico.
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
