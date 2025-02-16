import Carrusel from '../Carrusel/Carrusel';
import EnlaceContacto from '../EnlaceContacto/EnlaceContacto';
import imagenPlaya from '../../img/playa2.jpg'
import GaleriaInicio from '../GaleriaInicio/GaleriaInicio'; 

const Inicio = () => {
    
    return (
        <div className='Inicio'>
            <Carrusel/>            
            <div className='presentacionInicio'>
               {/* <h2 className='fraseInicio'>Una frase aleatoria para rellenar,<br/> el espacio del contenedor de inicio.</h2>*/}
                <h3 className='tituloInicio'>Puerto Bueno</h3>
                <p className='textoInicio'>
                Somos un complejo de departamentos para alquiler temporario, diseñados
                para el descanso reparador de las familias, parejas o amigos, durante alguna escapada de un fin de
                semana largo o en un período de vacaciones más prolongado.<br/><br/>
                Se encuentra a pocas cuadras de Playa Grande, uno de los balnearios más lindos de la ciudad, a
                donde se puede llegar caminando y disfrutar de un hermoso día de arena, sol y mar, con buen
                ambiente y servicios excelentes.
                Está muy próximo a los centros comerciales, de negocios, y de eventos de carácter académico o
                profesional, como el Hotel Sheraton o el Costa Galana, teniendo valor estratégico para quienes
                viajan por trabajo o por la participación en algún congreso.,
                Después de la playa, del trabajo o del estudio, la ubicación privilegiada del complejo, facilita un
                acceso rápido a los principales centros gastronómicos y de esparcimiento de la ciudad.<br/><br/>
                Nos complace alojar a familias que participan en competencias deportivas, o en cualquier otro
                evento cultural, porque los motivos para venir a Mar del Plata son innumerables.
                Recibimos huéspedes todo el año.
                Quienes imaginamos y realizamos este proyecto, y sus colaboradores, atendemos cada día, los
                detalles que van a permitirte una estadía placentera.
                </p> 
            </div>
            <GaleriaInicio/>       
            <EnlaceContacto imageSrc={imagenPlaya} />
        </div>  
    );
}

export default Inicio;
