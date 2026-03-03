import './App.css'
import LayoutPelicula from './Shared/Layout/LayoutPelicula';
import Header from './Shared/Layout/Header';
import Footer from './Shared/Layout/Footer';
import { useState } from 'react';

function App() {


  const [selectedLang, setSelectedLang] = useState('es'); // Estado global del idioma

  return (
    <>
      <Header selectedLang={selectedLang} setSelectedLang={setSelectedLang} />
      <LayoutPelicula
        titulo="Kizoku Tensei"
        imagenUrl="https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540"
        generos={["Anime", "Aventura", "Fantasia"]}
        rating={4.1}
        votos={249}
        sinopsis="Noah, el niño más fuerte del mundo..."
      />
      <Footer />
    </>

  )
}

export default App
