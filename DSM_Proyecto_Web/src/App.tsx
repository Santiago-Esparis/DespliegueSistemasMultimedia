import './App.css'
import Header from './Shared/Layout/Header';
import Footer from './Shared/Layout/Footer';
import { useEffect, useState } from 'react';

import { AuthProvider } from './Features/Authentication/Domain/AuthContext';
import { MovieProvider, useMovies } from './Features/Movie/Domain/MovieContext';
import { CommentProvider } from './Features/Comments/Domain/CommentContext';
import { FavouriteListProvider } from './Features/Movie/Domain/FavouriteListContext';
import AppRoutes from './Shared/Layout/AppRoutes';
import movieService from './Features/Movie/Service/movieService';
import FirebaseMovieRepository from './Features/Movie/Infraestructure/FirebaseMovieRepository';


function AppContent() {

  const [selectedLang, setSelectedLang] = useState('es');
  const [userLoged, setUserLoged] = useState(false);

  // Petición y Carga de Peliculas por defecto
  const { setMovies } = useMovies();

  useEffect(() => {
    movieService(FirebaseMovieRepository)
      .getAll()
      .then((response) => {

        setMovies(response);

      })
      .catch((err) => console.error(err))
  }, []);


  return (
    <>

      <Header selectedLang={selectedLang} setSelectedLang={setSelectedLang} userLoged={userLoged} setUserLoged={setUserLoged} />

      <AppRoutes />

      <Footer />

    </>
  )
}

function App() {

  return (
    <AuthProvider>
      <MovieProvider>
        <CommentProvider>
          <FavouriteListProvider>
            <AppContent />
          </FavouriteListProvider>
        </CommentProvider>
      </MovieProvider>
    </AuthProvider>
  )
}


export default App