
import Header from './components/Header';
import Inicio from './pages/Inicio';
import Nosotros from './pages/Nosotros';
import Misionv from './pages/Misionv';
import Categorias from './pages/Categorias'
import Productos from './pages/Productos';
import Testimonios from './pages/Testimonios';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

import './App.css'


export default function App(){
  
  return (
    <>
      <Header/>
      <Inicio/>
      <Nosotros/>
      <Misionv/>
      <Categorias/>
      <Productos/>
      <Testimonios/>
      <ContactForm/>
      <Footer/>
    </>
  )
}
