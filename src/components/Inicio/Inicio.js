import Carrusel from '../Carrusel/Carrusel';
import EnlaceContacto from '../EnlaceContacto/EnlaceContacto';
import imagenPlaya from '../../img/playa2.jpg'
import GaleriaInicio from '../GaleriaInicio/GaleriaInicio'; 

const Inicio = () => {
    
    return (
        <div className='Inicio'>
            <Carrusel/>            
            <div className='presentacionInicio'>
                <h3 className='tituloInicio'>Puerto Bueno</h3>
                <p className='textoInicio'>
                    Descubre una experiencia incomparable en nuestro hotel, donde el confort y la sofisticación
                    se combinan para ofrecerte una estadía única. Ubicado en un entorno privilegiado con vistas 
                    panorámicas al mar, nuestro hotel cuenta con habitaciones elegantes y espacios diseñados 
                    para el descanso absoluto. Disfruta de nuestra piscina climatizada, relájate en el spa o 
                    mantente activo en nuestro gimnasio de última generación.
                    <br/><br/>
                    Cada habitación ha sido concebida para brindar el máximo bienestar, con opciones que se 
                    adaptan a diferentes necesidades y preferencias. Desde suites con terrazas privadas hasta 
                    habitaciones con vistas imponentes, cada espacio está pensado para hacer de tu estadía un 
                    momento inolvidable. Para que tu experiencia sea aún más especial, te ofrecemos la posibilidad
                    de personalizar tu habitación según tus gustos y necesidades. Desde detalles en la decoración 
                    hasta elementos diseñados para tu comodidad, cada elección está pensada para que disfrutes 
                    al máximo de tu estancia.
                </p> 
            </div>
            <GaleriaInicio/>       
            <EnlaceContacto imageSrc={imagenPlaya} />
        </div>  
    );
}

export default Inicio;


