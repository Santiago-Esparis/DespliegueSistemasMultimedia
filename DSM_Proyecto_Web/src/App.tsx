import './App.css'
import Header from './Shared/Layout/Header';
import Footer from './Shared/Layout/Footer';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Shared/pages/Home';
import PeliculaPage from './Shared/pages/PeliculasPage';

function App() {

  const [selectedLang, setSelectedLang] = useState('es');

  return (
    <>
      <Header selectedLang={selectedLang} setSelectedLang={setSelectedLang} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/pelicula/:id" element={<PeliculaPage />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App