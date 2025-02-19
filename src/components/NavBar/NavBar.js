import React, { useState } from 'react';

const NavBar = ({ isVisible }) => {// Recibe la prop del componente App.js dependiendo del scrolling

  const [showMenu, setShowMenu] = useState(false);// Controla la visibilidad del menú hamburguesa

  return (
    <nav className={`NavBar ${isVisible ? 'fixed' : ''}`}>{/* Agrega la clase 'fixed' si 'isVisible' es true */}
      
      {!showMenu && (// Renderiza el logo si 'showMenu' es false
        <>
          <h2 className="tituloNavBar">Puerto Bueno</h2>
          <h3 className="subtituloNavBar">- Mar del Plata -</h3>
        </>
      )}

      {/* Botón de menú hamburguesa que cambia el estado `showMenu` al hacer clic */}
      <button className="hamburger" onClick={() => setShowMenu(!showMenu)}>
        ☰
      </button>

      {/* Menú que se muestra según el valor 'showMenu' */}
      <ul className={`nav justify-content-end ${showMenu ? 'show' : ''}`}>
        <li className="nav-item">
          <a href="/" className="nav-link">Inicio</a>
        </li>
        <li className="nav-item">
          <a href="/unidades" className="nav-link">Unidades</a>
        </li>
        <li className="nav-item">
          <a href="/servicios" className="nav-link">Servicios</a>
        </li>
        <li className="nav-item">
          <a href="/ubicacion" className="nav-link">Ubicación</a>
        </li>
        <li className="nav-item">
          <a href="/contacto" className="nav-link contacto-link">Contacto</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
