import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { doc, setDoc, getDoc } from "firebase/firestore";
import { useParams, useNavigate } from "react-router-dom";
import img1a from "../../img/opciones/img1a.jpg";
import img1b from "../../img/opciones/img1b.jpg";
import img1c from "../../img/opciones/img1c.jpg";
import img2a from "../../img/opciones/img2a.jpg";
import img2b from "../../img/opciones/img2b.jpg";
import img2c from "../../img/opciones/img2c.jpg";
import img3a from "../../img/opciones/img3a.jpg";
import img3b from "../../img/opciones/img3b.jpg";
import img3c from "../../img/opciones/img3c.jpg";
import img4a from "../../img/opciones/img4a.jpg";
import img4b from "../../img/opciones/img4b.jpg";
import img4c from "../../img/opciones/img4c.jpg";
import img5a from "../../img/opciones/img5a.jpg";
import img5b from "../../img/opciones/img5b.jpg";
import img5c from "../../img/opciones/img5c.jpg";

// Títulos de cada fila
const titulos = [
    "Decoración de la Habitación",
    "Bebidas del Minibar",
    "Decoración de la Sala",
    "Tu Silla ideal",
    "Decoración del Living",
];

// Arreglo de imágenes organizadas en filas de opciones
const opciones = [
    [img1a, img1b, img1c],
    [img4a, img4b, img4c],
    [img2a, img2b, img2c],
    [img5a, img5b, img5c],
    [img3a, img3b, img3c],
];

const Personalizar = () => {
    const { reservaId } = useParams(); // Obtener el ID de la reserva desde la URL
    const navigate = useNavigate(); // Hook para la navegación
    const [email, setEmail] = useState(null); // Estado para almacenar el email asociado a la reserva
    const [selecciones, setSelecciones] = useState(Array(opciones.length).fill(null)); // Estado para almacenar las selecciones de imágenes
    const [loading, setLoading] = useState(false); // Estado para indicar si se está procesando la solicitud 

    // Obtiene la reserva y su email desde Firebase al montar el componente
    useEffect(() => {
        const fetchReserva = async () => {
            try {
                const docRef = doc(db, "contactos", reservaId); // Referencia al documento en Firebase
                const docSnap = await getDoc(docRef); // Obtiene los datos del documento

                if (docSnap.exists()) {
                    setEmail(docSnap.data().email); // Guarda el email si la reserva existe
                } else {
                    alert("Reserva no encontrada"); // Muestra un mensaje si la reserva no existe
                    navigate("/"); // Redirige al usuario a la página de inicio
                }
            } catch (error) {
                console.error("Error al obtener la reserva:", error);
                navigate("/"); // Redirige en caso de error
            }
        };

        fetchReserva();
    }, [reservaId, navigate]);

    // Maneja la selección de imágenes para que se pueda seleccionar una imagen por fila 
    const handleSelect = (filaIndex, imagen) => {
        const nuevasSelecciones = [...selecciones];
        nuevasSelecciones[filaIndex] = imagen;
        setSelecciones(nuevasSelecciones);
    };

    // Envía las selecciones a Firebase
    const handleSubmit = async () => {
        if (selecciones.includes(null)) {
            alert("Por favor, selecciona una imagen por fila.");
            return;
        }
    
        setLoading(true); // Activa el estado de carga
        try {
            const docRef = doc(db, "contactos", reservaId);
            await setDoc(docRef, { selecciones }, { merge: true }); // Guarda las selecciones sin sobrescribir otros datos
    
            alert("Selecciones guardadas con éxito");
            navigate("/"); // Redirigir al inicio
        } catch (error) {
            console.error("Error al guardar selecciones:", error);
            alert("Error al guardar selecciones");
        } finally {
            setLoading(false); // Desactiva el estado de carga
        }
    };

    return (
        <div className="personalizar">
            <h2>Personaliza tu habitación</h2>
            {/* Genera las filas de imágenes para que el usuario seleccione */}
            {opciones.map((fila, filaIndex) => (
                <div key={filaIndex} className="fila">
                    <h3 className="tituloFila">{titulos[filaIndex]}</h3>
                    <div className="imagenes">
                        {fila.map((imagen, imgIndex) => (
                            <img
                                key={imgIndex}
                                src={imagen}
                                alt={`Opción ${filaIndex + 1}-${imgIndex + 1}`}
                                className={selecciones[filaIndex] === imagen ? "seleccionada" : ""}
                                onClick={() => handleSelect(filaIndex, imagen)}
                            />
                        ))}
                    </div>
                </div>
            ))}

            {/* Botón para guardar la selección */}
            <button className="botonGuardar" onClick={handleSubmit} disabled={loading || !email}>
                {loading ? "Guardando..." : "Guardar Selección"}
            </button>
        </div>
    );
};

export default Personalizar;


