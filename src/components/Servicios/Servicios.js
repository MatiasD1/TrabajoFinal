import Encabezado from '../Encabezado/Encabezado' 
import EnlaceContacto from '../EnlaceContacto/EnlaceContacto'
import imagenPlaya from '../../img/playa.jpg'
import IconosServicios from '../IconosServicios/IconosServicios.js'; 
import fotoMardel from '../../img/fotoMardel.jpg'
import OtrosServicios from '../OtrosServicios/OtrosServicios.js';

const Servicios = () => { 

    return (
        <div className='servicios'>
            <Encabezado imageSrc={fotoMardel} seccion={"Servicios"}/>
            <IconosServicios/>
            <OtrosServicios/>
            <EnlaceContacto imageSrc={imagenPlaya} /> 
        </div>  
    );
}

export default Servicios;

