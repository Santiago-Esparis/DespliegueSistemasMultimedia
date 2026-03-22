import { Route, Routes } from "react-router-dom";
import Home from "../../Features/Movie/View/Home";
import PeliculaPage from "../../Features/Movie/View/PeliculasPage";
import MoviesView from "../../Features/Movie/View/MoviesView";
import SeriesView from "../../Features/Movie/View/SeriesView";
import MiListaView from "../../Features/Movie/View/MiListaView";
import DisclaimerPage from "../StaticPages/DisclaimerPage";
import ContactPage from "../StaticPages/ContactPage";





export default function AppRoutes() {


    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/peliculas" element={<MoviesView />} />
            <Route path="/pelicula/:id" element={<PeliculaPage />} />
            <Route path="/series" element={<SeriesView />} />
            <Route path="/mi-lista" element={<MiListaView />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/disclaimer" element={<DisclaimerPage />} />

        </Routes>

    );

}


