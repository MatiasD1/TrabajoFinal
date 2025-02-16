import React from 'react';
import facebookLogo from '../../img/icons/facebook.png';
import xLogo from '../../img/icons/x.png';
import instagramLogo from '../../img/icons/instagramLogo.svg';

function Footer() {
    return (
        <footer>
            <div className='columnaFooter'>
                <h3>Puerto Bueno</h3>
                <p>Tu refugio cerca del mar donde conectar con el bienestar.</p>
            </div>
            <div className='columnaFooter'>
                <h3>Accesos Rápidos</h3>
                <a className="accesoNav" href="/">Inicio</a>
                <a className="accesoNav" href="/Departamentos">Departamentos</a>
                <a className="accesoNav" href="/Servicios">Servicios</a>
                <a className="accesoNav" href="/Ubicacion">Ubicacion</a>
                <a className="accesoNav" href="/Contacto">Contacto</a>
            </div>
            <div className='columnaFooter'>
                <h3>Redes Sociales</h3>
                <div className="logosRedes">
                    <a href="https://www.facebook.com" target="_blank" className="logoRed" id="logoFB">
                        <img src={facebookLogo} alt="Facebook"/>
                    </a>
                    <a href="https://www.x.com" target="_blank" className="logoRed">
                        <img src={xLogo} alt="X"/>
                    </a>
                    <a href="https://www.instagram.com" target="_blank" className="logoRed">
                        <img src={instagramLogo} alt="Instagram"/>
                    </a>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="footer-line"></div>
                <p className="copyright">Desarrollo - Matías Durand &copy; 2024</p>
            </div>
        </footer>
    );
}

export default Footer;
