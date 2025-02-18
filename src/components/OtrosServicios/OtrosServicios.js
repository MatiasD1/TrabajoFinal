import Swiper3 from "../Swiper3/Swiper3";
import cochera from '../../img/icons/cochera.png';
import parrilla from '../../img/icons/parrilla.png';

import pileta1 from "../../img/pileta1.jpg";
import pileta2 from "../../img/pileta2.jpg";
import pileta3 from "../../img/pileta3.jpg";


const OtrosServicios = () => {
    return (
        <div className='OtrosServicios'>
            <div className='item1'>
                <div className="textoOtrosServicios">
                    <img src={parrilla} className="iconoOtrosServicios" alt="icono parrilla"/>
                    <h3 className='tituloOtrosServicios'>Sala de usos múltiples</h3>
                    <p>
                        Sala de usos múltiples para asados y reuniones familiares, con parrilla, mesada, pileta de acero
                        inox, vajilla, utensilios para el asador, carbón y leña; una mesa y bancos.
                    </p>
                </div>  
                <Swiper3 className='swiper' images={[pileta1, pileta2, pileta3]} />
            </div>
            <div className='item2'>
                <div className="textoOtrosServicios">
                    <img src={cochera} className="iconoOtrosServicios" alt="icono cochera"/>
                    <h3 className='tituloOtrosServicios'>Estacionamiento</h3>
                    <p>
                        Espacio techado para vehículos, con acceso controlado y seguridad 24/7.
                    </p>
                </div>
                <Swiper3 className='swiper' images={[pileta1, pileta2, pileta3]} />
            </div>
        </div>
    );
}

export default OtrosServicios;
