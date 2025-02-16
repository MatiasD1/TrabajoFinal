import Swiper3 from "../Swiper3/Swiper3"
import cochera from '../../img/icons/cochera.png'
import parrilla from '../../img/icons/parrilla.png' 

const OtrosServicios = () => {
    return (
        <div className='OtrosServicios'>
            <div className='item1'>
                <div className="textoOtrosServicios">
                    <img src={parrilla} className="iconoOtrosServicios" alt="icono parrilla"/>
                    <h3 className='tituloOtrosServicios'>Sala de usos múltiples</h3>
                    <p>
                        Sala de usos múltiples para asados y reuniones familiares, con parrilla, mesada, pileta de acero
                        inox, vajilla, utensillos para el asador, carbón y leña; una mesa y bancos.
                    </p>
                </div>  
                <Swiper3 className='swiper' />
            </div>
            <div className='item2'>
                <div className="textoOtrosServicios">
                    <img src={cochera} className="iconoOtrosServicios" alt="icono cochera"/>
                    <h3 className='tituloOtrosServicios'>Estacionamiento</h3>
                    <p>
                        Texto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto ParrafoTexto Parrafo
                    </p>
                </div>
                <Swiper3 className='swiper' />
            </div>
        </div>
    );
}

export default OtrosServicios;
