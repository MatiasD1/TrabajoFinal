@charset "UTF-8";
/*$color1: #fff1d8; //texto claro
$color2: #f5deb3; //fondo
$color3: #f7c686; //elementos importantes
$color4: #d13630; //seccion importante

$color5: #252525; //titulo texto oscuro
$color6: #464646; //texto oscuro 
*/
/*Tamaños de las media queries
@media (max-width: 767px) 
@media (min-width: 768px) and (max-width: 1024px) 
@media (min-width: 1025px) 
*/
@import url(https://fonts.googleapis.com/css?family=Open+Sans:600);
* {
  margin: 0;
}

.App {
  text-align: center;
  background-color: #D9BE6C;
  overflow: hidden;
}

.carrusel {
  background-color: black;
  display: flex;
}

.flecha {
  width: 40px;
  margin: 20px;
}

.carousel-inner img {
  width: 100%;
  height: auto; /* Mantiene la proporción de la imagen */
}

#carouselExampleAutoplaying {
  display: flex;
  flex-direction: column;
  justify-content: flex-end; /* Alinea el contenido en la parte inferior */
  width: 100%;
  max-height: 100vh; /* Ajusta la altura al 100% de la vista */
}

.carrusel .carousel-item {
  position: relative; /* Necesario para posicionar el texto absolutamente dentro del item */
}
.carrusel .carousel-item img {
  opacity: 60%;
}

.textoCarruselInicio {
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  padding: 10px;
  border-radius: 5px;
  font-size: 36px;
  z-index: 99999 !important;
  text-align: center;
  opacity: 0; /* Inicialmente oculto */
  animation: fadeIn 1s ease-in-out forwards; /* Aplica la animación */
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7); /* Sombra del texto */
  font-family: "Urbanist", sans-serif;
}

/* Definir la animación fadeIn */
@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateX(-50%) translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateX(-50%) translateY(0);
  }
}
/* Media Queries para diseño responsive */
/* Teléfono Móvil */
@media (max-width: 767px) {
  .flecha {
    width: 30px;
    margin: 10px;
  }
  .textoCarruselInicio {
    top: 80%; /* Ajusta según sea necesario */
    font-size: 14px;
  }
}
/* Tableta/Escritorio Pequeño */
@media (min-width: 768px) and (max-width: 1199px) {
  .flecha {
    width: 35px;
    margin: 15px;
  }
  .textoCarruselInicio {
    top: 75%; /* Ajusta según sea necesario */
    font-size: 15px;
  }
}
/* Escritorio/Laptop Grande */
@media (min-width: 1200px) {
  .flecha {
    width: 40px;
    margin: 20px;
  }
  .textoCarruselInicio {
    top: 70%; /* Ajusta según sea necesario */
    font-size: 36px;
  }
}
.contacto {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  justify-content: space-between;
  height: auto;
  padding-top: 60px;
  padding-right: 60px;
  background-color: black;
}

.fotoCosta {
  opacity: 56%;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.textoContacto {
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  flex-direction: column;
  text-align: center;
  width: 60%;
  padding: 20px;
}

.textoContacto h3 {
  color: #ffffff;
  font-size: 18px; /* Aumenta el tamaño para mejor legibilidad */
  font-family: "Urbanist", sans-serif; /* Asegúrate de que 'Urbanist' esté cargado */
  font-weight: 400;
  white-space: normal; /* Permite el ajuste del texto */
  letter-spacing: 1.5px;
  word-spacing: 3px;
  line-height: 1.5;
  text-shadow: 3px 3px 10px rgba(0, 0, 0, 0.8); /* Ajusta la sombra para mejor contraste */
  background-color: rgba(0, 0, 0, 0.5); /* Fondo semitransparente para contraste adicional */
  padding: 15px; /* Espaciado adicional para separar el texto del borde */
  border-radius: 5px; /* Bordes redondeados para un efecto más suave */
}

.contact-form {
  margin-top: 20px;
  width: 100%;
  max-width: 400px;
  background-color: rgba(0, 0, 0, 0.6823529412);
  padding: 10px;
  border-radius: 5px;
  font-family: "Urbanist", sans-serif;
  font-weight: 300;
  font-size: 16px;
  z-index: 1;
}

.contact-form h2 {
  color: #ffffff;
  padding-top: 10px;
  padding-bottom: 10px;
  font-family: "Urbanist", sans-serif;
  font-weight: 500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

label {
  display: block;
  margin-bottom: 5px;
  color: #ffffff;
  text-align: start;
  padding-left: 20px;
}

input[type=text], input[type=date], input[type=number], input[type=email] {
  background-color: rgba(0, 0, 0, 0.3490196078);
  color: #ffffff;
  width: 90%;
  padding: 6px;
  margin-bottom: 8px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  box-sizing: border-box;
  height: 30px;
}

textarea {
  background-color: rgba(0, 0, 0, 0.3490196078);
  color: #ffffff;
  width: 90%;
  padding: 6px;
  margin-bottom: 8px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  box-sizing: border-box;
  height: 100px;
}

.fechasContacto {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 90%;
  margin-bottom: 8px;
  margin-left: 19px;
  gap: 20px;
  align-items: center;
}

.fechasContacto .fecha1, .fechasContacto .fecha2 {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.fechasContacto label {
  margin-bottom: 5px;
  color: #ffffff;
  padding-left: 0;
}

.fechasContacto input {
  width: 100%;
  background-color: rgba(0, 0, 0, 0.3490196078);
  color: #ffffff;
  padding: 6px;
  margin-bottom: 8px;
  border: 1px solid #ffffff;
  border-radius: 4px;
  box-sizing: border-box;
  height: 30px;
}

#mensaje {
  resize: none;
}

button[type=submit] {
  color: #ffffff;
  background: #00a29d;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: 0.2s;
}

button[type=submit]:hover {
  color: white;
  background-color: #00ded7;
}

/* Media query para pantallas pequeñas */
@media (max-width: 767px) {
  .contacto {
    flex-direction: column-reverse;
    align-items: center;
    height: auto;
    padding: 2px;
  }
  .textoContacto {
    width: 100%;
    padding: 10px;
    text-align: center;
  }
  .contact-form {
    width: 90%;
    height: 70%;
    margin-top: 10px;
  }
  .fechasContacto .fecha1, .fechasContacto .fecha2 {
    width: 100%;
  }
}
/* Media query para pantallas medianas */
@media (min-width: 768px) and (max-width: 1024px) {
  .contacto {
    flex-direction: row;
    align-items: center;
    height: auto;
    padding: 20px;
  }
  .textoContacto {
    width: 80%;
    padding: 15px;
  }
  .contact-form {
    width: 70%;
    max-width: 400px;
    margin-top: 20px;
  }
  .fechasContacto {
    flex-direction: row;
  }
  .fechasContacto .fecha1, .fechasContacto .fecha2 {
    width: 45%;
  }
}
/* Media query para pantallas grandes */
@media (min-width: 1025px) {
  .contacto {
    flex-direction: row;
    height: 100vh;
    padding: 60px;
  }
  .textoContacto {
    width: 60%;
    padding: 20px;
  }
  .contact-form {
    width: 400px;
    margin-right: 48px;
  }
  .fechasContacto {
    flex-direction: row;
  }
  .fechasContacto .fecha1, .fechasContacto .fecha2 {
    width: 45%;
  }
}
.carrusel2 {
  position: relative;
  width: 100%;
  height: auto;
  overflow: hidden;
}
.carrusel2 .carousel-item1 img {
  height: 450px;
  object-fit: cover;
}

.departamentos {
  width: 100%;
  height: auto;
  position: relative;
  z-index: 1;
  background-color: #D9BE6C; /* Asegúrate de reemplazar con el color correcto */
}

.containerDepartamentos {
  padding: 20px 20px 5px 20px;
  display: flex;
  flex-direction: column;
}

.item {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap; /* Permite que los elementos se ajusten */
  margin-bottom: 0; /* Elimina márgenes entre filas */
  min-height: 350px; /* Mantiene una altura mínima de fila */
}

.fotosDeptos, .textoDepartamentos {
  flex: 1;
}

.fotosDeptos {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  padding: 0; /* Elimina el padding para que las imágenes se toquen */
  height: 100%; /* Ajusta la altura para que sea proporcional */
  overflow: hidden;
  position: relative;
}

.fotoSimbolo {
  display: none;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.1);
  z-index: 1;
  transition: opacity 0.3s, transform 0.3s;
}

.fotoDepto {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;
}

.fotoDepto:hover {
  cursor: pointer;
  opacity: 0.7;
}

.fotosDeptos:hover .fotoSimbolo {
  display: block;
  cursor: pointer;
}

.textoDepartamentos {
  font-family: "Urbanist", sans-serif;
  color: #cdcdcd;
  padding-top: 20px; /* Elimina padding para que se ajuste al contenedor */
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between; /* Asegura que el contenido y el icono estén distribuidos */
  position: relative;
  min-height: 200px; /* Ajusta la altura mínima para asegurar que el icono esté en la parte inferior */
}
.textoDepartamentos h2 {
  color: #f4f4f4;
}
.textoDepartamentos .aloeFooter {
  width: 30px;
  height: auto;
  display: block;
  margin: auto; /* Centra el icono y añade espacio alrededor */
  margin-bottom: 10px;
}

/* Móviles (hasta 767px) */
@media (max-width: 767px) {
  .item {
    flex-direction: column;
    min-height: auto; /* Altura automática para móviles */
  }
  .fotosDeptos {
    width: 100%;
    height: 200px; /* Ajusta la altura para móviles */
  }
  .tituloDepto {
    font-size: 20px; /* Tamaño más pequeño para pantallas pequeñas */
  }
  .subtituloDepto {
    font-size: 16px; /* Tamaño ajustado para pantallas pequeñas */
    padding: 0px 20px;
  }
  .textoDepto {
    font-size: 12px; /* Tamaño ajustado para pantallas pequeñas */
    padding: 0px 20px;
  }
  .aloeFooter {
    width: 20px; /* Tamaño más pequeño para móviles */
    margin: 0px 20px; /* Añade espacio superior e inferior para móviles */
  }
}
/* Tabletas (768px a 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .fotosDeptos {
    height: 100%; /* Asegúrate de que la altura sea 100% de la fila */
  }
  .tituloDepto {
    font-size: 22px; /* Tamaño ajustado para pantallas medianas */
  }
  .subtituloDepto {
    font-size: 18px; /* Tamaño ajustado para pantallas medianas */
    padding: 0px 20px;
  }
  .textoDepto {
    font-size: 14px; /* Tamaño ajustado para pantallas medianas */
    padding: 0px 20px;
  }
  .aloeFooter {
    width: 25px; /* Tamaño ajustado para tabletas */
    margin: 20px auto 20px; /* Añade margen superior e inferior para tabletas */
  }
  .dep2, .dep4 {
    flex-direction: row-reverse;
  }
}
/* Escritorio (1025px y superior) */
@media (min-width: 1025px) {
  .containerDepartamentos {
    padding: 20px;
  }
  .item {
    flex-direction: row;
    min-height: 350px; /* Mantiene una altura mínima para pantallas grandes */
  }
  .fotosDeptos {
    height: 100%; /* Ajusta la altura para pantallas grandes */
  }
  .tituloDepto {
    font-size: 28px; /* Tamaño ajustado para pantallas grandes */
  }
  .subtituloDepto {
    font-size: 22px; /* Tamaño ajustado para pantallas grandes */
    padding: 0px 40px;
  }
  .textoDepto {
    font-size: 18px; /* Tamaño ajustado para pantallas grandes */
    padding: 0px 40px;
  }
  .aloeFooter {
    width: 30px; /* Tamaño ajustado para pantallas grandes */
    margin: 30px auto 30px; /* Añade un margen inferior para pantallas grandes */
  }
  .dep2, .dep4 {
    flex-direction: row-reverse;
  }
}
/* Estilos generales para el contenedor principal */
.encabezado {
  position: relative;
  height: 400px;
  background: linear-gradient(to bottom, #000000 0%, #000000 33%, #333333 100%);
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}

/* Estilos para la imagen */
.fotoEncabezado {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.5;
  z-index: 2;
}

/* Estilos para el contenedor del título */
.tituloEncabezado {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #FFFFFF; /* Sustituye $color1 con el color deseado */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
  z-index: 3;
}

/* Estilos para el título */
.tituloEncabezado h1 {
  font-family: "Urbanist", sans-serif;
  font-weight: 400;
  font-size: 70px; /* Tamaño de fuente predeterminado para escritorio */
  color: #FFFFFF; /* Sustituye $color1 con el color deseado */
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin: 0;
  text-align: center;
}

/* Media Queries para diseño responsive */
/* Móviles (hasta 767px) */
@media (max-width: 767px) {
  .encabezado {
    height: 200px;
  }
  .tituloEncabezado {
    padding: 10px 20px;
    border: 1px solid #FFFFFF;
  }
  .tituloEncabezado h1 {
    font-size: 30px; /* Tamaño ajustado para pantallas pequeñas */
  }
}
/* Tabletas y portátiles pequeños (768px a 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .encabezado {
    height: 300px;
  }
  .tituloEncabezado {
    padding: 15px 30px;
    border: 2px solid #FFFFFF;
  }
  .tituloEncabezado h1 {
    font-size: 50px; /* Tamaño ajustado para pantallas medianas */
  }
}
/* Escritorio (1025px y superior) */
@media (min-width: 1025px) {
  .encabezado {
    height: 400px;
  }
  .tituloEncabezado {
    padding: 20px 40px;
    border: 2px solid #FFFFFF;
  }
  .tituloEncabezado h1 {
    font-size: 70px; /* Tamaño de fuente predeterminado para pantallas grandes */
  }
}
.EnlaceContacto {
  position: relative;
  text-align: center;
  background-color: black;
}

.contenedorEnlaceContacto {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.TituloEnlaceContacto {
  font-family: "Urbanist";
  font-style: 400;
  position: absolute;
  top: 20%;
  color: #EEEEEE;
  font-size: 46px;
  z-index: 1;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.FraseEnlaceContacto {
  font-family: "Urbanist", sans-serif;
  font-style: 300;
  position: absolute;
  color: #cdcdcd;
  top: 36%;
  font-size: 25px;
  z-index: 1;
  padding: 0px 20px;
}

.fotoEnlaceContacto {
  opacity: 50%;
  display: block;
  width: 100%; /* La imagen ocupará todo el ancho del contenedor */
  height: 500px; /* Ajusta la altura según sea necesario */
  object-fit: cover; /* Mantiene la relación de aspecto y recorta la imagen si es necesario */
}

.textoEnlaceContacto {
  position: absolute;
  top: 72%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #EEEEEE; /* Cambia el color del texto si es necesario */
  font-size: 4.3rem; /* Ajusta el tamaño del texto según sea necesario */
  font-family: "Urbanist", sans-serif;
  font-style: 500;
  background: rgba(0, 0, 0, 0.3); /* Fondo semitransparente para mejorar la legibilidad */
  padding: 0px 25px 18px 25px; /* Espaciado interno para el texto */
  border: 2px solid #EEEEEE;
  text-decoration: none;
  transition: 0.3s;
}

.textoEnlaceContacto:hover {
  color: rgb(211, 211, 211);
  border: 2px solid #00c1bb;
  background: rgba(0, 0, 0, 0.6);
  cursor: pointer;
}

/* Media Queries para diseño responsive */
/* Teléfono Móvil */
@media (max-width: 767px) {
  .TituloEnlaceContacto {
    font-size: 24px;
    top: 15%;
  }
  .FraseEnlaceContacto {
    font-size: 16px;
    top: 30%;
  }
  .fotoEnlaceContacto {
    height: 300px;
  }
  .textoEnlaceContacto {
    font-size: 2.5rem;
    padding: 10px 15px;
    top: 72%;
  }
}
/* Tableta/Escritorio Pequeño */
@media (min-width: 768px) and (max-width: 1199px) {
  .TituloEnlaceContacto {
    font-size: 32px;
    top: 18%;
  }
  .FraseEnlaceContacto {
    font-size: 20px;
    top: 32%;
  }
  .fotoEnlaceContacto {
    height: 400px;
  }
  .textoEnlaceContacto {
    font-size: 3rem;
    padding: 15px 20px;
    top: 65%;
  }
}
/* Escritorio/Laptop Grande */
@media (min-width: 1200px) {
  .TituloEnlaceContacto {
    font-size: 46px;
    top: 20%;
  }
  .FraseEnlaceContacto {
    font-size: 25px;
    top: 36%;
  }
  .fotoEnlaceContacto {
    height: 500px;
  }
  .textoEnlaceContacto {
    font-size: 4.3rem;
    padding: 18px 25px;
    top: 72%;
  }
}
footer {
  padding-top: 20px;
  width: 100%;
  background-color: #D9BE6C;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  align-items: start;
  justify-content: center;
  margin: 0;
}

.columnaFooter {
  display: flex;
  flex-direction: column;
  font-family: "Khula", sans-serif;
}
.columnaFooter h3 {
  margin-bottom: 10px;
  font-size: 25px;
  color: #EEEEEE;
  font-family: "Urbanist", sans-serif;
  font-weight: 500;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.columnaFooter p {
  font-family: "Urbanist", sans-serif;
  font-weight: 400;
  font-size: 14px;
  max-width: 150px;
  margin: auto;
  color: #EEEEEE;
  text-decoration: none;
}

.accesoNav {
  color: #EEEEEE;
  text-decoration: none;
  transition: text-shadow 0.3s ease;
}
.accesoNav:hover {
  text-shadow: 2px 2px 5px #EEEEEE;
}

.logosRedes {
  display: flex;
  gap: 50px;
  margin: 20px auto; /* Ajustar para que no cause desbordamiento */
  max-width: 300px; /* Limitar el ancho máximo para evitar desbordamiento */
}

.logoRed img {
  width: 50px;
  height: 50px;
}

.footer-bottom {
  grid-column: 1/-1;
  text-align: center;
  margin-top: 20px;
}

.footer-line {
  width: 90%;
  height: 1px;
  background-color: #00c1bb;
  margin: 0 auto;
}

.copyright {
  margin-top: 10px;
  color: #EEEEEE;
  font-size: 14px;
  font-family: "Urbanist", sans-serif;
  font-weight: 300;
}

/* Estilos responsivos */
/* Móviles (hasta 767px) */
@media (max-width: 767px) {
  footer {
    height: auto; /* Ajustar para contenido dinámico */
    padding-top: 20px;
    grid-template-columns: 1fr; /* Cambiar a una sola columna en pantallas más pequeñas */
    text-align: center; /* Centrar contenido */
  }
  .accesoNav {
    display: none;
  }
  .columnaFooter h3, .columnaFooter p {
    display: none; /* Ocultar títulos y párrafos en pantallas pequeñas */
  }
  .logosRedes {
    display: flex;
    flex-wrap: wrap; /* Permite que los íconos se envuelvan si no hay suficiente espacio */
    justify-content: center; /* Centra los íconos horizontalmente */
    margin: 0px auto; /* Ajustar margen */
    gap: 20px; /* Espacio entre los íconos */
  }
  .logoRed img {
    width: 40px; /* Ajustar tamaño de los íconos */
    height: 40px; /* Ajustar tamaño de los íconos */
    margin: 0; /* Eliminar márgenes adicionales */
    padding: 0px;
  }
}
/* Tabletas (768px a 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  footer {
    padding-top: 20px;
  }
  .columnaFooter h3 {
    font-size: 20px; /* Tamaño reducido para pantallas medianas */
  }
  .columnaFooter p {
    font-size: 12px; /* Tamaño reducido para pantallas medianas */
    max-width: 200px; /* Ampliar ancho máximo para pantallas medianas */
  }
  .logosRedes {
    max-width: 250px; /* Ajustar ancho máximo en pantallas medianas */
  }
  .logoRed img {
    width: 45px; /* Ajustar tamaño de los íconos */
    height: 45px; /* Ajustar tamaño de los íconos */
  }
}
/* Escritorio (1025px y superior) */
@media (min-width: 1025px) {
  footer {
    padding-top: 20px;
    grid-template-columns: 1fr 1fr 1fr; /* Tres columnas en pantallas grandes */
  }
  .columnaFooter h3 {
    font-size: 25px; /* Tamaño normal para pantallas grandes */
  }
  .columnaFooter p {
    font-size: 14px; /* Tamaño normal para pantallas grandes */
    max-width: 150px; /* Ancho máximo normal para pantallas grandes */
  }
  .logosRedes {
    max-width: 300px; /* Ancho máximo normal en pantallas grandes */
  }
  .logoRed img {
    width: 50px; /* Tamaño normal de los íconos */
    height: 50px; /* Tamaño normal de los íconos */
  }
}
.frase {
  width: 100%;
  height: auto;
  overflow: hidden;
  padding-top: 60px;
}

.fotoFrase {
  width: 100%;
  opacity: 60%;
  height: auto;
}

.galeria-content {
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: rgb(0, 0, 0);
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  z-index: 1500;
}

/* Establece las propiedades para los contenedores de las diapositivas */
.galeria-slides {
  display: flex;
  overflow-x: hidden;
  scroll-snap-type: x mandatory;
}

/* Establece las propiedades para las imágenes dentro de las diapositivas */
.galeria-slide img {
  width: 100%;
  height: auto;
  max-height: 90vh;
  object-fit: cover;
}

/* Establece las propiedades para el botón de diapositiva anterior y siguiente */
.prev-btn, .next-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: none;
  border: none;
  cursor: pointer;
  color: #fff1d8;
  font-size: 24px;
  padding: 20px;
}

.prev-btn {
  left: 0;
}

.next-btn {
  right: 0;
}

/* Establece las propiedades para los puntos de navegación entre las diapositivas */
.galeria-dots {
  display: flex;
  justify-content: center;
  margin-top: 10px;
}

.galeria-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 1200;
}

.dot {
  width: 10px;
  height: 10px;
  background-color: #000000;
  border-radius: 50%;
  margin: 0 5px;
  cursor: pointer;
}

.dot.active {
  background-color: #EEEEEE;
}

/* Estilos responsivos */
/* Móviles (hasta 767px) */
@media (max-width: 767px) {
  .galeria-content {
    margin-top: 20px;
    max-width: 95%; /* Aumentado a 95% para llenar más la pantalla en móviles */
    max-height: 95%; /* Aumentado a 95% para ocupar más espacio vertical */
  }
  .galeria-slide img {
    max-height: calc(70vh - 120px); /* Ajusta la altura de la imagen con el padding */
    width: auto; /* Ajusta la imagen para que se adapte al contenedor */
    height: 100%;
    object-fit: contain; /* Asegura que la imagen se ajuste dentro del contenedor */
  }
  .prev-btn, .next-btn {
    font-size: 24px; /* Ajuste del tamaño de los botones para mejor visibilidad */
    padding: 15px;
  }
}
/* Tabletas (768px a 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .galeria-content {
    max-width: 90%; /* Aumentado a 90% para tabletas */
    max-height: 90%; /* Aumentado a 90% para tabletas */
    margin-top: 30px;
  }
  .galeria-slide img {
    max-height: calc(75vh - 20px); /* Ajusta la altura de la imagen con el padding */
    width: auto; /* Ajusta la imagen para que se adapte al contenedor */
    height: 100%;
    object-fit: contain; /* Asegura que la imagen se ajuste dentro del contenedor */
  }
  .prev-btn, .next-btn {
    font-size: 24px; /* Ajuste del tamaño de los botones para mejor visibilidad */
    padding: 18px;
  }
}
/* Escritorio (1025px y superior) */
@media (min-width: 1025px) {
  .galeria-content {
    max-width: 90%; /* Ancho máximo del 90% para escritorio */
    max-height: 90%; /* Altura máxima del 90% para escritorio */
  }
  .galeria-slide img {
    max-height: 90vh; /* Ajusta la altura máxima de la imagen para escritorio */
  }
  .prev-btn, .next-btn {
    font-size: 24px; /* Tamaño de los botones para pantallas grandes */
    padding: 20px;
  }
}
.galeriaInicio {
  margin: auto;
  text-align: center;
  color: #EEEEEE;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  padding-bottom: 20px; /* Asegúrate de que este valor sea el adecuado */
  background-color: #D9BE6C;
}

/* Estilos generales para el grid */
.grid-row {
  display: grid;
  margin-bottom: 0; /* Elimina margen inferior si es necesario */
}

.fotosDeptosInicio {
  position: relative;
  overflow: hidden;
  transition: 0.3s;
  padding: 3px; /* Ajusta según sea necesario */
}

.fotoSimboloInicio {
  display: none;
  position: absolute;
  width: 15%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) scale(0.1);
  z-index: 1;
  transition: opacity 0.3s, transform 0.3s;
}

.fotoDeptoInicio {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s;
}

.fotoDeptoInicio:hover {
  cursor: pointer;
  opacity: 0.5;
}

.fotosDeptosInicio:hover .fotoSimboloInicio {
  display: block;
  transform: translate(-50%, -50%) scale(1);
  opacity: 1;
}

/* Estilos para el overlay y el contenedor del carrusel */
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.carrusel-container {
  position: relative;
  z-index: 1001;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
  max-width: 90%;
  max-height: 90%;
  overflow: auto;
}

/* Móviles (hasta 767px) */
@media (max-width: 767px) {
  .grid-row {
    grid-template-columns: repeat(4, 1fr); /* Dos columnas en móviles */
  }
  .fotosDeptosInicio {
    height: 100px; /* Altura ajustada para pantallas pequeñas */
  }
}
/* Tabletas (768px a 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .grid-row {
    grid-template-columns: repeat(4, 1fr); /* Dos columnas en tabletas */
  }
  .fotosDeptosInicio {
    height: 200px; /* Altura ajustada para tabletas */
  }
}
/* Escritorio (1025px y superior) */
@media (min-width: 1025px) {
  .grid-row {
    grid-template-columns: repeat(4, 1fr); /* Cuatro columnas en escritorios */
  }
  .fotosDeptosInicio {
    height: 270px; /* Altura ajustada para escritorios */
  }
}
.iconosServicios {
  position: relative;
  background-color: black;
  overflow: hidden;
  padding-bottom: 20px;
}
.iconosServicios h1 {
  position: relative;
  font-family: "Urbanist", sans-serif;
  font-weight: 500;
  color: #EEEEEE;
  padding-top: 40px;
  padding-bottom: 10px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 2;
  text-align: center;
  font-size: 50px;
}
.iconosServicios .textoIconosServicios {
  position: relative;
  font-family: "Urbanist", sans-serif;
  font-weight: 400;
  color: #f4f4f4;
  padding-bottom: 25px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 20;
  text-align: center;
  font-size: 1.6em;
  line-height: normal;
  letter-spacing: 0.5mm;
}
.iconosServicios .serviciosFondo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
  opacity: 0.8;
  min-width: 100%;
  min-height: 100%;
}
.iconosServicios .iconos {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Ajusta el número de columnas automáticamente */
  gap: 5px;
  color: #EEEEEE;
  font-family: "Urbanist", sans-serif;
  font-weight: 400;
  font-size: 1.2rem;
  transition: 0.5s;
  text-align: center;
}
@media (max-width: 389px) {
  .iconosServicios .iconos {
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr)); /* Ajusta a una columna o más según el ancho */
    font-size: 0.7rem;
  }
}
@media (min-width: 390px) and (max-width: 785px) {
  .iconosServicios .iconos {
    grid-template-columns: repeat(auto-fit, minmax(120px, 1fr)); /* Ajusta a columnas según el ancho */
    font-size: 0.7rem;
  }
}
@media (min-width: 786px) and (max-width: 1024px) {
  .iconosServicios .iconos {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); /* Ajusta a columnas según el ancho */
    font-size: 1rem;
  }
}
@media (min-width: 1025px) {
  .iconosServicios .iconos {
    grid-template-columns: repeat(5, minmax(150px, 1fr)); /* Mantiene cinco columnas para pantallas grandes */
    font-size: 1.2rem;
  }
}
.iconosServicios .icono {
  text-align: center;
  width: 100%;
  height: auto;
  transition: transform 0.3s;
  z-index: 1;
}
.iconosServicios .icono img {
  width: 100%; /* Ajusta el tamaño de los íconos al contenedor */
  max-width: 50px; /* Tamaño máximo para pantallas grandes */
  height: auto;
}
.iconosServicios .icono:hover {
  transform: scale(1.1);
}
.iconosServicios .icono p {
  padding-top: 5px;
  white-space: nowrap;
  transition: transform 0.3s;
}

/* Añadir estos estilos para asegurar que .Inicio ocupe el 100% del ancho y no cause desbordamiento */
.Inicio {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.tituloInicio {
  color: #EEEEEE;
  padding-top: 40px;
  font-size: 30px;
}

.textoInicio {
  font-size: 20px;
  color: #f4f4f4;
  margin: 0px 120px;
  padding: 10px 20px 60px 20px;
}

.carrusel,
.galeria-container,
.EnlaceContacto {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* Ajustar el estilo de las imágenes del carrusel */
.carousel-item img {
  width: 100%;
  height: auto;
}

.Mapa {
  /*display: flex;
  justify-content: center;
  Esto se maneja desde el contenedor en Ubicacion
  */
  padding-top: 50px;
  height: 500px;
  width: 70%;
  background-color: #00c1bb;
}

/* Estilos para el botón de hamburguesa */
.hamburger {
  display: none;
  font-size: 30px;
  background: none;
  border: none;
  color: #f4f4f4;
  cursor: pointer;
  position: absolute;
  right: 20px;
  top: 20px;
  z-index: 1200;
}

/* Media queries para la responsividad */
/* Móviles (hasta 767px) */
@media (max-width: 849px) {
  .hamburger {
    display: block;
  }
  .nav {
    display: none;
    flex-direction: column;
    width: 100%;
    background-color: rgb(0, 0, 0) !important;
    position: absolute;
    top: 140px; /* Ajustado para que los links aparezcan más abajo del título */
    left: 0;
    z-index: 1000;
  }
  .nav.show {
    display: flex;
    padding: 0 !important;
    width: 100% !important;
  }
  .nav-item {
    text-align: center;
    margin: 0px;
  }
  .NavBar {
    flex-direction: column;
    align-items: flex-start; /* Alinea los elementos en la parte superior izquierda */
    padding: 42px 0;
    width: 100%;
  }
  .NavBar h2, .NavBar h3 {
    position: static;
    text-align: left;
    margin: 10px;
    word-wrap: break-word; /* Permite que el texto se ajuste a pantallas pequeñas */
  }
  .NavBar h2 {
    font-size: 18px; /* Tamaño más pequeño para pantallas pequeñas */
  }
  .NavBar h3 {
    font-size: 14px; /* Tamaño más pequeño para pantallas pequeñas */
  }
  .nav-link {
    padding: 10px 0;
    color: #f4f4f4 !important;
    font-size: 18px;
    text-shadow: none;
    border-bottom: none;
  }
  .nav-link:hover {
    color: #00c1bb !important;
    transition: color 0.3s ease;
  }
}
/* Tabletas (768px a 1024px) */
@media (min-width: 850px) and (max-width: 1200) {
  .hamburger {
    display: none; /* Ocultar el botón de hamburguesa en tabletas */
  }
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: relative;
    top: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgb(0, 0, 0) !important;
  }
  .nav-item {
    margin: 0;
    text-align: center;
  }
  .NavBar {
    flex-direction: row;
    align-items: center;
    padding: 0;
    width: 100%;
  }
  .NavBar h2, .NavBar h3 {
    position: static;
    text-align: center;
    margin: 0;
    font-size: 20px; /* Tamaño ajustado para tabletas */
  }
  .NavBar h2 {
    font-size: 22px;
  }
  .NavBar h3 {
    font-size: 18px;
  }
  .nav-link {
    padding: 15px;
    font-size: 18px; /* Ajuste para tamaño de fuente en tabletas */
  }
  .nav-link:hover {
    color: #00c1bb !important;
    transition: color 0.3s ease;
  }
}
/* Escritorio (1025px y superior) */
@media (min-width: 1201px) {
  .hamburger {
    display: none; /* Ocultar el botón de hamburguesa en escritorios */
  }
  .nav {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    background-image: linear-gradient(to bottom, rgba(61, 61, 61, 0.5), transparent);
    position: relative;
    top: 0;
    width: 100%;
    z-index: 1000;
  }
  .nav-item {
    margin: 0;
    text-align: center;
  }
  .NavBar {
    flex-direction: row;
    align-items: center;
    padding: 0;
    width: 100%;
  }
  .NavBar h2, .NavBar h3 {
    position: static;
    text-align: center;
    margin: 0;
    font-size: 24px; /* Tamaño ajustado para pantallas grandes */
  }
  .NavBar h2 {
    font-size: 24px;
  }
  .NavBar h3 {
    font-size: 20px;
  }
  .nav-link {
    padding: 17px 20px;
    font-size: 20px; /* Tamaño de fuente ajustado para escritorios */
  }
  .nav-link:hover {
    color: #00c1bb !important;
    transition: color 0.5s ease, border-bottom-color 0.5s ease;
  }
}
.nav-link {
  color: #f4f4f4 !important;
  margin-top: 1rem;
  border-bottom: 2px solid transparent;
  padding: 17px 20px;
  font-size: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  font-family: "Urbanist", sans-serif;
}
.nav-link:hover {
  color: #00c1bb !important;
  border-bottom-color: rgb(255, 255, 255);
  transition: color 0.5s ease, border-bottom-color 0.5s ease;
  text-shadow: 2px 2px 4px rgba(245, 240, 240, 0.26);
}

.nav {
  position: absolute;
  top: 0;
  width: 100%;
  z-index: 1000;
  padding-right: 30px;
  box-sizing: border-box; /* Asegura que el padding no afecte el ancho total */
}

.NavBar {
  display: flex;
  align-items: flex-start; /* Alinea los elementos en la esquina superior izquierda */
  width: 100%; /* Asegura que ocupe el 100% del ancho */
  position: relative; /* Para que los elementos se posicionen relativamente dentro del navbar */
}
.NavBar h2 {
  font-size: 24px; /* Tamaño ajustado para pantallas grandes */
  position: absolute;
  top: 20px;
  left: 20px;
  font-family: "Urbanist", sans-serif;
  font-weight: 400;
  color: #EEEEEE;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1600;
}
.NavBar h3 {
  position: absolute;
  top: 50px;
  left: 20px;
  font-size: 16px; /* Tamaño ajustado para pantallas grandes */
  font-family: "Urbanist", sans-serif;
  font-weight: 400;
  color: #00c1bb;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  z-index: 1600;
}
.NavBar .fixed .nav {
  background-color: rgb(0, 0, 0), 0.5 !important;
}

.fixed {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 500;
}
.fixed .nav {
  background-color: rgba(0, 0, 0, 0.5);
  background-image: linear-gradient(to bottom, rgba(61, 61, 61, 0.5), transparent) !important;
}

.nav.show + .NavBar h2,
.nav.show + .NavBar h3 {
  display: none;
}

/* Asegúrate de que el body y el html ocupen el 100% del ancho */
html, body {
  width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.OtrosServicios {
  display: grid;
  grid-template-columns: 1fr 1fr; /* Dos columnas de igual ancho */
  grid-template-rows: auto auto; /* Dos filas ajustadas al contenido */
  gap: 20px; /* Espacio entre los elementos (ajusta según sea necesario) */
  padding: 20px;
}

.item1 {
  display: flex;
  align-items: center; /* Centra verticalmente */
  justify-content: flex-start; /* Alinea al inicio de la columna */
  grid-column: 1/3; /* Ocupa dos columnas en la primera fila */
}

.item2 {
  display: flex;
  align-items: center; /* Centra verticalmente */
  justify-content: flex-end; /* Alinea al final de la columna */
  grid-column: 1/3; /* Ocupa dos columnas en la segunda fila */
}

.textoOtrosServicios h3 {
  color: #EEEEEE;
}
.textoOtrosServicios p {
  color: #f4f4f4;
}

/* Ajusta el estilo del swiper si es necesario */
.swiper {
  width: 100%; /* Asegúrate de que el swiper ocupe el ancho completo */
}

/* Móviles (hasta 767px) */
@media (max-width: 767px) {
  .OtrosServicios {
    grid-template-columns: 1fr; /* Una columna en móviles */
    grid-template-rows: auto auto; /* Dos filas ajustadas al contenido */
    flex-direction: column;
    justify-content: center;
  }
  .item1 {
    flex-direction: column; /* Coloca el swiper y el texto en fila */
  }
  .item2 {
    flex-direction: column; /* Coloca el texto y el swiper en fila */
  }
}
/* Tabletas (768px a 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .OtrosServicios {
    grid-template-columns: 1fr 1fr; /* Dos columnas en tabletas */
    grid-template-rows: auto auto; /* Dos filas ajustadas al contenido */
  }
  .item1 {
    flex-direction: column; /* Coloca el swiper y el texto en fila */
  }
  .item2 {
    flex-direction: column; /* Coloca el texto y el swiper en fila */
  }
  .textoOtrosServicios {
    display: flex;
    flex-direction: column;
  }
  .tituloOtrosServicios {
    width: auto; /* Ajusta el ancho del texto */
  }
}
/* Escritorio (1025px y superior) */
@media (min-width: 1025px) {
  .OtrosServicios {
    grid-template-columns: 1fr 1fr; /* Dos columnas en escritorios */
    grid-template-rows: auto auto; /* Dos filas ajustadas al contenido */
  }
  .item1 {
    flex-direction: row; /* Coloca el swiper y el texto en fila */
  }
  .item2 {
    flex-direction: row-reverse; /* Coloca el texto y el swiper en fila */
  }
}
@keyframes fadeIn {
  from {
    opacity: 0; /* Opacidad inicial */
  }
  to {
    opacity: 1; /* Opacidad final */
  }
}
.textAnimation1 {
  position: absolute;
  width: 450px;
  left: 50%;
  margin-left: -290px;
  height: 40px;
  top: 70%;
  margin-top: -20px;
  color: #EEEEEE;
  font-family: "Urbanist", sans-serif;
  font-weight: 500;
  font-size: 50px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  white-space: nowrap; /* Previene el salto de línea */
  opacity: 0; /* Comienza con opacidad 0 para el efecto de fade in */
  animation: fadeIn 1s ease forwards; /* Animación de fade in */
}

.textAnimation1 p {
  display: inline-block;
  vertical-align: top;
  margin: 0;
}

.word {
  position: absolute;
  width: 220px;
  opacity: 0;
  transition: opacity 0.5s;
  color: #fcd07f;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  left: 295px;
  white-space: pre; /* Mantiene los espacios en blanco tal como están */
}

.word.active {
  opacity: 1;
}

.letter {
  display: inline-block;
  position: relative;
  transform: translateZ(25px);
  transform-origin: 50% 50% 25px;
}

.letter.out {
  transform: rotateX(90deg);
  transition: transform 0.32s cubic-bezier(0.55, 0.055, 0.675, 0.19);
}

.letter.behind {
  transform: rotateX(-90deg);
}

.letter.in {
  transform: rotateX(0deg);
  transition: transform 0.38s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.subtituloTextAnimation {
  font-family: "Urbanist", sans-serif;
  font-weight: 300;
  position: absolute;
  color: #EEEEEE;
  display: flex;
  top: 65px;
  left: 200px;
  font-size: 30px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.ubicacion {
  min-height: calc(100vh - 200px); /* Calcula la altura mínima de la ubicación para que el footer quede al final de la página para solucionar el problema de que el footer quedaba en el medio */
  width: 100%;
  background-color: #D9BE6C;
  display: flex;
  flex-direction: column; /* Asegura que los elementos internos se apilen verticalmente */
}

.carruselUbicacion {
  height: auto;
  background-size: cover;
  background-position: center;
}
.carruselUbicacion .carousel {
  padding-top: 150px;
  padding-left: 70px;
  padding-right: 70px;
  padding-bottom: 70px;
}

.presentacionUbicacion {
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 10px;
}
@media (min-width: 768px) {
  .presentacionUbicacion {
    grid-template-columns: 1fr 1fr; /* Dos columnas iguales en pantallas medianas y grandes */
    grid-template-areas: "tituloUbicacion fraseUbicacion" "textoUbicacion textoUbicacion";
    padding: 10px 40px;
    gap: 20px;
  }
}
@media (min-width: 1025px) {
  .presentacionUbicacion {
    padding: 10px;
  }
}

.fraseUbicacion {
  grid-area: fraseUbicacion;
  font-size: 1.6rem;
  color: #EEEEEE;
}

.textoUbicacion {
  grid-area: textoUbicacion;
  color: #f4f4f4;
}

.serviciosCercanos {
  height: auto;
  background-color: #D9BE6C;
}
.serviciosCercanos h2 {
  color: #EEEEEE;
  font-family: "Urbanist";
  font-weight: 500;
  font-size: 30px;
  padding-top: 20px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.mapaUbicacion {
  height: auto;
  padding: 20px;
  color: #EEEEEE;
  background-color: #D9BE6C;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
.mapaUbicacion img {
  padding: 20px;
  width: 90%;
}

.tituloMapa {
  user-select: none;
}

.swiper-container1 {
  padding: 20px;
  margin: 20px auto;
  position: relative;
}
.swiper-container1 .swiper-slide {
  position: relative;
  display: block;
}
.swiper-container1 .swiper-slide img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.swiper-container1 .swiper-slide .textoSlides {
  position: absolute;
  margin: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 10px;
  background-color: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: 25px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.705);
  text-align: center;
  box-sizing: border-box;
}
@media (max-width: 570px) {
  .swiper-container1 .swiper-slide img {
    height: 200px;
  }
  .swiper-container1 .textoSlides {
    font-size: 12px !important;
  }
}
@media (min-width: 571px) and (max-width: 767px) {
  .swiper-container1 .swiper-slide img {
    height: 200px;
  }
  .swiper-container1 .textoSlides {
    font-size: 16px !important;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .swiper-container1 .swiper-slide img {
    height: 300px;
  }
  .swiper-container1 .textoSlides {
    font-size: 20px !important;
  }
}
@media (min-width: 1025px) {
  .swiper-container1 .swiper-slide img {
    height: 400px;
  }
  .swiper-container1 .textoSlides {
    font-size: 25px !important;
  }
}

.bordeSwiper2 {
  padding: 20px; /* Espacio entre el borde y el contenido del carrusel */
  margin: auto; /* Ajusta según sea necesario */
  max-width: 1000px; /* Ajusta según sea necesario para incluir padding y tamaño del carrusel */
  position: relative;
}

.swiper-container2 {
  max-width: 800px;
  margin: auto;
  position: relative;
  border: solid 2px white;
  padding: 10px;
}
.swiper-container2 .slide-image {
  width: 100%;
  height: 500px;
  object-fit: cover;
}
.swiper-container2 .swiper-button-custom {
  position: absolute;
  top: 50%;
  width: 40px;
  height: 40px;
  cursor: pointer;
  transform: translateY(-50%);
  z-index: 10;
  transition: opacity 0.15s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  color: #EEEEEE;
  text-align: center;
  background: 0 0;
  border: 0;
  opacity: 0.5;
}
.swiper-container2 .swiper-button-custom:hover {
  opacity: 100;
}
.swiper-container2 .swiper-button-prev-custom {
  left: 10px;
}
.swiper-container2 .swiper-button-next-custom {
  right: 10px;
}

.carousel-control-next,
.carousel-control-prev {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 15%;
  padding: 0;
  color: #EEEEEE;
  text-align: center;
  background: 0 0;
  border: 0;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}

/* Responsive Styles */
/* Para pantallas pequeñas (max-width: 767px) */
@media (max-width: 767px) {
  .swiper-container2 {
    max-width: 100%;
    padding: 5px; /* Reducir el padding */
  }
  .swiper-container2 .slide-image {
    height: 250px; /* Reducir la altura de las imágenes */
  }
  .swiper-container2 .swiper-button-custom {
    width: 30px;
    height: 30px;
  }
}
/* Para pantallas medianas (768px - 1024px) */
@media (min-width: 768px) and (max-width: 1024px) {
  .swiper-container2 {
    max-width: 600px;
    padding: 8px;
  }
  .swiper-container2 .slide-image {
    height: 400px;
  }
  .swiper-container2 .swiper-button-custom {
    width: 35px;
    height: 35px;
  }
}
/* Para pantallas grandes (min-width: 1025px) */
@media (min-width: 1025px) {
  .swiper-container2 {
    max-width: 800px;
    padding: 10px;
  }
  .swiper-container2 .slide-image {
    height: 500px;
  }
  .swiper-container2 .swiper-button-custom {
    width: 40px;
    height: 40px;
  }
}
.swiper-container {
  width: 60%;
  margin: auto;
  position: relative;
  border: solid 2px white;
  padding: 10px;
}
.swiper-container .swiper-slide {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
.swiper-container .slide-image {
  width: 100%;
  height: auto;
  object-fit: cover;
}
.swiper-container .swiper-button-custom {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 3vw;
  height: 3vw;
  z-index: 10;
  cursor: pointer;
}
.swiper-container .swiper-button-custom img {
  width: 100%;
  height: 100%;
}
.swiper-container .swiper-button-custom.swiper-button-prev-custom {
  left: 10px;
}
.swiper-container .swiper-button-custom.swiper-button-next-custom {
  right: 10px;
}
.swiper-container .swiper-pagination {
  bottom: 10px;
}
.swiper-container .swiper-pagination .swiper-pagination-bullet {
  background-color: #00c1bb;
  opacity: 0.5;
  transition: opacity 0.15s ease;
}
.swiper-container .swiper-pagination .swiper-pagination-bullet:hover {
  opacity: 1;
}
.swiper-container .swiper-pagination .swiper-pagination-bullet-active {
  opacity: 1;
}

@media (max-width: 767px) {
  .swiper-container {
    width: 90%;
    padding: 5px;
  }
  .swiper-button-custom {
    width: 8vw;
    height: 8vw;
    justify-content: space-between;
  }
}
@media (min-width: 768px) and (max-width: 1024px) {
  .swiper-container {
    width: 80%;
    padding: 8px;
  }
  .swiper-button-custom {
    width: 5vw;
    height: 5vw;
    justify-content: space-between;
  }
}
@media (min-width: 1025px) {
  .swiper-container {
    width: 60%;
    padding: 10px;
  }
  .swiper-button-custom {
    width: 3vw;
    height: 3vw;
    justify-content: space-between;
  }
}

/*# sourceMappingURL=s.map */
