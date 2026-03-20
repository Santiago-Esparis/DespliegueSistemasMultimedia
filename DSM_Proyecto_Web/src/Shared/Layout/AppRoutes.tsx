import { Route, Routes } from "react-router-dom";
import Home from "../../Features/Movie/View/Home";
import PeliculaPage from "../../Features/Movie/View/PeliculasPage";
import MoviesView from "../../Features/Movie/View/MoviesView";
import SeriesView from "../../Features/Movie/View/SeriesView";





export default function AppRoutes() {


    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/peliculas" element={<MoviesView />} />
            <Route path="/series" element={<SeriesView />} />
            <Route path="/pelicula/:id" element={<PeliculaPage />} />
            
        </Routes>

    );

}


