import logo from './logo.svg';
import './App.css';
import Header from './componentes/plantilla/Header';
import MisionVisionValores from './componentes/plantilla/MisionVisionValores';
import Footer from './componentes/plantilla/Footer';
import Servicios from './componentes/plantilla/Servicios';
import Testimonios from './componentes/plantilla/Testimonios';
import Contacto from './componentes/plantilla/Contacto';
import Proyectos from './componentes/plantilla/Proyectos';
import Modal from './componentes/plantilla/Modal';
import React from 'react';

function App() {
  return (
    <React.StrictMode>
      <Header />
      <MisionVisionValores/>
      <Servicios />
      <Proyectos />
      <Testimonios />
      <Contacto />
      <Modal />
      <Footer />
    </React.StrictMode>
  );
}

export default App;
