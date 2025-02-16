import React, { useState } from "react";
import { db } from "../../firebaseConfig";
import { collection, addDoc, getDocs, query, where } from "firebase/firestore";
import { useNavigate } from "react-router-dom";

const Contacto = () => {
    const [formData, setFormData] = useState({
        nombre: "",
        fechaEntrada: "",
        fechaSalida: "",
        cantidadPersonas: "",
        email: "",
        mensaje: ""
    });

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            // Verificar si el email ya está registrado
            const q = query(collection(db, "contactos"), where("email", "==", formData.email));
            const querySnapshot = await getDocs(q);

            if (!querySnapshot.empty) {
                alert("Ya existe una reserva con este correo.");
                setLoading(false);
                return;
            }

            // Si no existe, registrar la nueva reserva
            const docRef = await addDoc(collection(db, "contactos"), formData);
            alert("Formulario enviado con éxito");
            setFormData({ nombre: "", fechaEntrada: "", fechaSalida: "", cantidadPersonas: "", email: "", mensaje: "" });
            navigate(`/personalizar/${docRef.id}`);
        } catch (error) {
            console.error("Error al enviar el formulario:", error);
            alert("Hubo un error al enviar el formulario");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="contacto">
            <div className="contact-form">
                <h2>Contacto</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Nombre Completo" name="nombre" value={formData.nombre} onChange={handleChange} required />
                    <div className="fechasContacto">
                        <input type="date" name="fechaEntrada" value={formData.fechaEntrada} onChange={handleChange} required />
                        <input type="date" name="fechaSalida" value={formData.fechaSalida} onChange={handleChange} required />
                    </div>
                    <input type="number" placeholder="Cantidad de Personas" name="cantidadPersonas" value={formData.cantidadPersonas} onChange={handleChange} required />
                    <input type="email" placeholder="Email" name="email" value={formData.email} onChange={handleChange} required />
                    <textarea placeholder="Mensaje" name="mensaje" value={formData.mensaje} onChange={handleChange}></textarea>
                    
                    {loading && <p>Cargando...</p>}
                    
                    <button type="submit" disabled={loading}>
                        {loading ? "Enviando..." : "Enviar"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contacto;
