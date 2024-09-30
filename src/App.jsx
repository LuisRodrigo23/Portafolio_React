import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import React, { useEffect } from 'react';
import HomePage from './page/HomePage';
import Proyectos from './components/Proyects/Proyectos';
import SobreMi from './components/SobreMi/SobreMi';
import Contact from './components/Contact/Contact';

// Componente para controlar el scroll
const ScrollToTop = () => {
  const { pathname } = useLocation(); // Hook de React Router para obtener la ruta actual

  useEffect(() => {
    window.scrollTo(0, 0); // Cada vez que cambia la ruta, se desplaza hacia arriba
  }, [pathname]); // Se ejecuta cada vez que `pathname` cambia

  return null;
};

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Se coloca el componente aquí para que funcione en todas las rutas */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/proyects" element={<Proyectos />} />
        <Route path="/sobreMi" element={<SobreMi />} />
        <Route path="/contactame" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
