import './App.css'
import Header from './Shared/Layout/Header';
import Footer from './Shared/Layout/Footer';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './Shared/pages/Home';
import PeliculaPage from './Shared/pages/PeliculasPage';

import { AuthProvider } from './Features/Authentication/Domain/AuthContext';
import { MovieProvider, useMovies } from './Features/Movie/Domain/MovieContext';
import { Button } from 'react-bootstrap';


function AppContent() {

  const [selectedLang, setSelectedLang] = useState('es');
  const [userLoged, setUserLoged] = useState(false);

  const { movies } = useMovies();


  //const {user} = useAuth();

  return (
    <>

      <Header selectedLang={selectedLang} setSelectedLang={setSelectedLang} userLoged={userLoged} setUserLoged={setUserLoged} />


      <Button
        variant="outline-primary"
        onClick={() => {
              console.log(movies);
        }}
      >
        Help -- Click en Get All Movies y traes la base de datos a App.tsx
      </Button>

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
      <MovieProvider>
        <AppContent />
      </MovieProvider>
    </AuthProvider>
  )
}


export default App