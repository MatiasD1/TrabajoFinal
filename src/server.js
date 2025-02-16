const express = require('express'); // Importa el framework Express para crear el servidor
const nodemailer = require('nodemailer'); // Importa Nodemailer para enviar correos electrónicos
const bodyParser = require('body-parser'); // Importa Body-parser para manejar datos del formulario
const cors = require('cors'); // Importa CORS para permitir solicitudes de otros dominios

const app = express(); // Crea una instancia de Express
const PORT = process.env.PORT || 5000; // Define el puerto en el que se ejecutará el servidor

// Middleware
app.use(cors()); // Habilita CORS para todas las solicitudes
app.use(bodyParser.json()); // Permite recibir datos en formato JSON
app.use(bodyParser.urlencoded({ extended: true })); // Permite recibir datos en formato URL-encoded

// Nodemailer transporter
const transporter = nodemailer.createTransport({
    service: 'gmail', // Define el servicio de correo electrónico (puede ser Gmail, Outlook, etc.)
    auth: {
        user: 'tuemail@gmail.com', // Reemplaza con tu email
        pass: 'tucontraseña'       // Reemplaza con tu contraseña
    }
});

// Ruta para manejar el envío del formulario
app.post('/send', (req, res) => {
    const { nombre, fechaEntrada, fechaSalida, cantidadPersonas, email, mensaje } = req.body; // Extrae los datos del formulario del cuerpo de la solicitud

    const mailOptions = {
        from: email, // Correo del remitente (el usuario que llenó el formulario)
        to: 'tuemail@gmail.com, otroemail@gmail.com', // Correos de los destinatarios separados por comas
        subject: 'Nueva Reserva', // Asunto del correo
        text: `
            Nombre Completo: ${nombre}
            Fecha de Entrada: ${fechaEntrada}
            Fecha de Salida: ${fechaSalida}
            Cantidad de Personas: ${cantidadPersonas}
            Email: ${email}
            Mensaje: ${mensaje}
        ` // Cuerpo del correo con los datos de la reserva
    };

    transporter.sendMail(mailOptions, (error, info) => { // Envía el correo usando Nodemailer
        if (error) { // Maneja cualquier error al enviar el correo
            console.log(error); // Imprime el error en la consola
            res.status(500).send('Error al enviar el correo'); // Envía una respuesta de error al cliente
        } else {
            console.log('Correo enviado: ' + info.response); // Imprime la respuesta de Nodemailer en la consola
            res.status(200).send('Correo enviado con éxito'); // Envía una respuesta de éxito al cliente
        }
    });
});

// Inicia el servidor y escucha en el puerto definido
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`); // Imprime un mensaje indicando que el servidor está en funcionamiento
});
