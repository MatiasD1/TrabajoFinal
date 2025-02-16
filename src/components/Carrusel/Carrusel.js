import React, { useEffect } from 'react';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Importar Bootstrap JS para el carrusel
import fotoPieza from "../../img/fotoPieza.jpg";
import fotoExterior from "../../img/fotoExterior.jpg";
import fotoSala from "../../img/fotoSala.jpg";
import flechaDer from "../../img/icons/flechaDer.png";
import flechaIzq from "../../img/icons/flechaIzq.png";

const Carrusel = () => {

    useEffect(() => {
        const handleSlide = () => {
            const activeText = document.querySelector('.carousel-item.active .textoCarruselInicio');
            if (activeText) {
                activeText.style.opacity = 0;
                setTimeout(() => {
                    activeText.style.animation = 'none'; // Resetea la animación
                    void activeText.offsetWidth; // Fuerza el reflujo para reiniciar la animación
                    activeText.style.animation = 'fadeIn 1s ease-in-out forwards'; // Aplica la animación
                }, 10);
            }
        };

        const carouselElement = document.getElementById('carouselExampleAutoplaying');
        carouselElement.addEventListener('slide.bs.carousel', handleSlide);

        return () => {
            carouselElement.removeEventListener('slide.bs.carousel', handleSlide);
        };
    }, []);

    return (
        <div className='carrusel'>
            <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel" data-bs-interval="4000">
                <div className="carousel-inner carrusel">
                    <div className="carousel-item active">
                        <img src={fotoExterior} className="d-block w-100" alt="Foto del exterior" />
                        <p className='textoCarruselInicio'>Tu refugio cerca del mar donde conectar con el bienestar</p>
                    </div>
                    <div className="carousel-item">
                        <img src={fotoPieza} className="d-block w-100" alt="Foto de la pieza" />
                        <p className='textoCarruselInicio'>Vivir las vacaciones que merecés</p>
                    </div>
                    <div className="carousel-item">
                        <img src={fotoSala} className="d-block w-100" alt="Foto de la sala" />
                        <p className='textoCarruselInicio'>Encontrar paz y privacidad</p>
                    </div>
                </div>
                {/*Compartir momentos memorables*/}
                {/*Volver renovado*/}
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                    <img src={flechaIzq} alt="Anterior" className="flecha" />
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                    <img src={flechaDer} alt="Siguiente" className="flecha" />
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
}

export default Carrusel;
