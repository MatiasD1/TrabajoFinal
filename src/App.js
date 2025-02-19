import './CSS/styles.css'; // Estilos globales de la aplicación
import React, { useEffect, useState } from 'react'; 
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// Importa los componentes de las páginas y del navbar
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import Unidades from './components/Unidades/Unidades';
import Servicios from './components/Servicios/Servicios'
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Ubicacion from './components/Ubicacion/Ubicacion';
import Personalizar from './components/Personalizar/Personalizar';

function App() {
  // Controla la visibilidad del navbar
  const [isVisible, setIsVisible] = useState(false);

  // Para cambiar la visibilidad del sctroll a partir de cierta posicion
  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const triggerPoint = 80; 

      if (scrollTop > triggerPoint) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    // Event listener para el desplazamiento 
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router> {/* Configura el enrutamiento de la aplicación */}
      <div className="App">
        {/* NavBar en todas las páginas con la visibilidad como prop*/}
        <NavBar isVisible={isVisible} />
        <Routes> {/* Rutas dentro de la aplicación */}
          <Route path="/" element={<Inicio />} />
          <Route path="/unidades" element={<Unidades />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/personalizar/:reservaId" element={<Personalizar />} />
        </Routes>
        <Footer />  {/*Footer en todas las páginas con la visibilidad como prop*/}
      </div>
    </Router>
  );
}

export default App;

