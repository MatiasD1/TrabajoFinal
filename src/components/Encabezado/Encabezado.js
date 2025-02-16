import React from 'react';

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
