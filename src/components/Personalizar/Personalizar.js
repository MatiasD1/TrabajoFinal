import React, { useState, useEffect } from "react";
import { db } from "../../firebaseConfig";
import { collection, doc, setDoc, getDoc } from "firebase/firestore";
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

const opciones = [
    [img1a, img1b, img1c],
    [img2a, img2b, img2c],
    [img3a, img3b, img3c],
];

const Personalizar = () => {
    const { reservaId } = useParams(); // Obtener el ID de la reserva desde la URL
    const navigate = useNavigate();
    const [email, setEmail] = useState(null);
    const [selecciones, setSelecciones] = useState(Array(opciones.length).fill(null));
    const [loading, setLoading] = useState(false);

    // Obtener el email asociado a la reserva
    useEffect(() => {
        const fetchReserva = async () => {
            try {
                const docRef = doc(db, "contactos", reservaId);
                const docSnap = await getDoc(docRef);

                if (docSnap.exists()) {
                    setEmail(docSnap.data().email);
                } else {
                    alert("Reserva no encontrada");
                    navigate("/");
                }
            } catch (error) {
                console.error("Error al obtener la reserva:", error);
                navigate("/");
            }
        };

        fetchReserva();
    }, [reservaId, navigate]);

    const handleSelect = (filaIndex, imagen) => {
        const nuevasSelecciones = [...selecciones];
        nuevasSelecciones[filaIndex] = imagen;
        setSelecciones(nuevasSelecciones);
    };

    const handleSubmit = async () => {
        if (selecciones.includes(null)) {
            alert("Por favor, selecciona una imagen por fila.");
            return;
        }
    
        setLoading(true);
        try {
            const docRef = doc(db, "contactos", reservaId);
            await setDoc(docRef, { selecciones }, { merge: true }); // Agrega selecciones sin sobrescribir otros datos
    
            alert("Selecciones guardadas con éxito");
            navigate("/"); // Redirigir al inicio
        } catch (error) {
            console.error("Error al guardar selecciones:", error);
            alert("Error al guardar selecciones");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="personalizar">
            <h2>Selecciona tus imágenes</h2>
            {opciones.map((fila, filaIndex) => (
                <div key={filaIndex} className="fila">
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
            ))}
            <button className="botonGuardar" onClick={handleSubmit} disabled={loading || !email}>
                {loading ? "Guardando..." : "Guardar Selección"}
            </button>
        </div>
    );
};

export default Personalizar;
