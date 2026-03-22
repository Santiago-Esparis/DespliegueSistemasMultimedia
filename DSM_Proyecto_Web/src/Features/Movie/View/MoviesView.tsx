import "./MoviesView.css"
import { useEffect, useState } from "react";
import { useMovies } from "../Domain/MovieContext";
import movieService from "../Service/movieService";
import FirebaseMovieRepository from "../Infraestructure/FirebaseMovieRepository";
import MovieCard from "./MovieCard";





export default function MoviesView() {

    const { movies, setMovies } = useMovies();

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("");
    const [minRating, setMinRating] = useState(0);
    const [filteredMovies, setFilteredMovies] = useState(movies);
    
    const categories = [...new Set(movies.flatMap(m => m.categories))].sort();

    useEffect(() => {
        movieService(FirebaseMovieRepository)
            .getAll()
            .then((response) => {

                setMovies(response);

            })
            .catch((err) => console.error(err))
    }, []);

    useEffect(() => {

        let result = [...movies];

        if (search) {
            result = result.filter(m =>
                m.title.toLowerCase().includes(search.toLowerCase())
            );
        }

        if (category) {
            result = result.filter(m =>
                m.categories.includes(category)
            );
        }

        if (minRating > 0) {
            result = result.filter(m =>
                m.rating >= minRating
            );
        }

        setFilteredMovies(result);

    }, [search, category, minRating, movies]);

    const handleReset = () => {
        setSearch("");
        setCategory("");
        setMinRating(0);
    };


    return (

        <div>

            <div className="filter-bar">

                <input
                    type="text"
                    placeholder="Buscar película..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Todas las categorías</option>

                    {categories.map(cat => (
                        <option key={cat} value={cat}>
                            {cat}
                        </option>
                    ))}

                </select>

                <select value={minRating} onChange={(e) => setMinRating(Number(e.target.value))}>
                    <option value={0}>Cualquier rating</option>
                    <option value={2}>+2 ⭐</option>
                    <option value={3}>+3 ⭐</option>
                    <option value={4}>+4 ⭐</option>
                    <option value={4.5}>+4.5 ⭐</option>
                </select>

                <button onClick={handleReset}>
                    Reset
                </button>

            </div>


            <div className="home-grid">

                {filteredMovies
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
        </div>

    )

}


