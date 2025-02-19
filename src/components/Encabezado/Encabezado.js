import React from 'react';

// Recibe las props y renderiza la imagen junto con el titulo de la página
const Encabezado = ({ imageSrc, seccion }) => { 
    return (
        <div className='encabezado'>
            <img src={imageSrc} className="fotoEncabezado" alt="Encabezado" />
            <div className='tituloEncabezado'>
                <h1>{seccion}</h1>
            </div>
        </div>
    );
}

export default Encabezado;
 
