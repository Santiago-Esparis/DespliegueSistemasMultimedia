
import { useState } from 'react';
import './App.css'
import Footer from './Shared/Layout/Footer'
import Header from './Shared/Layout/Header'

function App() {


  const [selectedLang, setSelectedLang] = useState('es'); // Estado global del idioma

  return (
    <>

      <Header selectedLang={selectedLang} setSelectedLang={setSelectedLang} />

      <p>
        Hello World! {selectedLang}
      </p>


      <Footer></Footer>
    </>
  )
}

export default App
