import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import App from "./App";

// Función para agregar fuentes
const addLinkToHead = (href, rel = 'stylesheet', crossOrigin) => {
  const link = document.createElement('link');
  link.href = href;
  link.rel = rel;
  if (crossOrigin) {
    link.crossOrigin = crossOrigin;
  }
  document.head.appendChild(link);
};

// Fuentes
addLinkToHead('https://fonts.googleapis.com', 'preconnect');
addLinkToHead('https://fonts.gstatic.com', 'preconnect', 'true');
addLinkToHead('https://fonts.googleapis.com/css2?family=Urbanist:wght@100;200;300;400;500;600;700;800;900&display=swap');
addLinkToHead('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@400..700&display=swap');
addLinkToHead('https://fonts.googleapis.com/css2?family=Libre+Baskerville:ital,wght@0,400;0,700;1,400&display=swap');
addLinkToHead('https://fonts.googleapis.com/css2?family=Khula:wght@300;400;600;700;800&display=swap');
addLinkToHead('https://fonts.googleapis.com/css2?family=Imprima&family=Khula:wght@300;400;600;700;800&display=swap');
addLinkToHead('https://fonts.googleapis.com/css2?family=Kalam:wght@300;400;700&display=swap');
addLinkToHead('https://fonts.googleapis.com/css2?family=Libre+Franklin:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet');

// Renderiza la aplicación de React
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

