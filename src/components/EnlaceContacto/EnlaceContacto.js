import React from 'react';

const EnlaceContacto = ({ imageSrc }) => { //Recibe una imagen como prop 
    
    return (
        <div className='EnlaceContacto'>
            <div className="contenedorEnlaceContacto">
                <h3 className='TituloEnlaceContacto'>Consultá disponibilidad </h3>
                <p className='FraseEnlaceContacto'>
                    Contantanos para recibir información sobre las condiciones de hospedaje, disponibilidad y tarifas.
                    </p>
                <img src={imageSrc} className="fotoEnlaceContacto" alt="Enlace Contacto" />
                <a href="/contacto" className="textoEnlaceContacto">Contacto</a>
            </div>
        </div>
    );
}

export default EnlaceContacto;

