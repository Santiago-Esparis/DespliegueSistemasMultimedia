
import "./Home.css";
import { useEffect } from "react";
import MovieCard from "../Application/MovieCard";
import { useMovies } from "../Domain/MovieContext";
import movieService from "../Service/movieService";
import FirebaseMovieRepository from "../Infraestructure/FirebaseMovieRepository";



export default function Home() {

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
      {movies.map((movie) => (

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
  );

}