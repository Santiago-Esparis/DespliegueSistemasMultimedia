import "./MoviesView.css"
import { useEffect } from "react";
import { useMovies } from "../Domain/MovieContext";
import movieService from "../Service/movieService";
import FirebaseMovieRepository from "../Infraestructure/FirebaseMovieRepository";
import MovieCard from "./MovieCard";





export default function MoviesView() {

    const { movies, setMovies } = useMovies();

    useEffect(() => {
        movieService(FirebaseMovieRepository)
            .getAll()
            .then((response) => {

                setMovies(response);

            })
            .catch((err) => console.error(err))
    }, []);



    return (

        <div className="home-grid">

            {movies
                .filter((movie) => movie.categories.includes("Pelicula"))
                .map((movie) => (

                    <MovieCard
                        key={movie.id}
                        id={movie.id}
                        titulo={movie.title}
                        sinopsis={movie.description}
                        imagenUrl={movie.url}
                        rating={movie.rating}
                        etiqueta={movie.categories}
                    />

                ))}

        </div>

    )

}


