import './CSS/styles.css';//Con esta linea agarraron todos los scss
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import Inicio from './components/Inicio/Inicio';
import Unidades from './components/Unidades/Unidades';
import Servicios from './components/Servicios/Servicios'
import Contacto from './components/Contacto/Contacto';
import Footer from './components/Footer/Footer';
import Ubicacion from './components/Ubicacion/Ubicacion';
import Personalizar from './components/Personalizar/Personalizar';

function App() {
  const [isVisible, setIsVisible] = useState(false);

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

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <NavBar isVisible={isVisible} />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/unidades" element={<Unidades />} />
          <Route path="/servicios" element={<Servicios />} />
          <Route path="/ubicacion" element={<Ubicacion />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="/personalizar/:reservaId" element={<Personalizar />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
