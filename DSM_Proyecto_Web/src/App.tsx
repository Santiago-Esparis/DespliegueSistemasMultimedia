import './App.css'
import Header from './Shared/Layout/Header';
import Footer from './Shared/Layout/Footer';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Shared/pages/Home';
import PeliculaPage from './Shared/pages/PeliculasPage';


import { AuthProvider } from './Features/Authentication/Domain/AuthContext';


function AppContent() {

  const [selectedLang, setSelectedLang] = useState('es');
  const [userLoged, setUserLoged] = useState(false)

  //const {user} = useAuth();

  return (
    <>

        <Header selectedLang={selectedLang} setSelectedLang={setSelectedLang} userLoged={userLoged} setUserLoged={setUserLoged} />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pelicula/:id" element={<PeliculaPage />} />
        </Routes>

        <Footer />

    </>
  )
}

function App() {

  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  )
}


export default App