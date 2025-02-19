import Swiper3 from "../Swiper3/Swiper3";
import pileta1 from "../../img/pileta1.jpg";
import pileta2 from "../../img/pileta2.jpg";
import pileta3 from "../../img/pileta3.jpg";
import gym1 from "../../img/gym1.jpg";
import gym2 from "../../img/gym2.jpg";
import gym3 from "../../img/gym3.jpg";

const OtrosServicios = () => {
    return (
        <div className='OtrosServicios'>
            <div className='item1'>
                <div className="textoOtrosServicios">
                    <h3 className='tituloOtrosServicios'>Piscina cubierta y descubierta</h3>
                    <p>
                        Nuestras exclusivas piscinas, tanto cubierta como al aire libre,
                        están diseñadas para que disfrutes en cualquier época del año. 
                        La piscina cubierta, climatizada y rodeada de un ambiente elegante, 
                        te brinda un espacio de relajación absoluta, ideal para desconectarte 
                        sin importar el clima. Por otro lado, la piscina al aire libre te 
                        invita a sumergirte bajo el sol, con cómodas reposeras y una vista 
                        inigualable que transforma cada momento en una experiencia única.
                    </p>
                </div>  
                <Swiper3 className='swiper' images={[pileta1, pileta2, pileta3]} />
            </div>
            <div className='item2'>
                <div className="textoOtrosServicios">
                    <h3 className='tituloOtrosServicios'>Gimnasio completo</h3>
                    <p>
                        Nuestro gimnasio de última generación está diseñado para que
                        mantengas tu rutina de bienestar incluso durante tu estadía. 
                        Equipado con máquinas de entrenamiento de alta gama, pesas y 
                        zonas de ejercicio funcional, ofrece un espacio ideal tanto 
                        para sesiones intensas como para entrenamientos relajados. 
                        Además, grandes ventanales con vistas panorámicas crean un ambiente 
                        motivador, permitiéndote ejercitarte mientras disfrutas del paisaje.
                    </p>
                </div>
                <Swiper3 className='swiper' images={[gym1, gym3, gym2]} />
            </div>
        </div>
    );
}

export default OtrosServicios;



