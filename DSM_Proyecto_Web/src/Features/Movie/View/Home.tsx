
import "./Home.css";
import { useEffect, useState } from "react";
import MovieCard from "./MovieCard";
import { useMovies } from "../Domain/MovieContext";
import movieService from "../Service/movieService";
import FirebaseMovieRepository from "../Infraestructure/FirebaseMovieRepository";
import { useFavouriteList } from "../Domain/FavouriteListContext";
import favouriteListService from "../Service/favouriteListService";
import FirebaseFavouriteListRepository from "../Infraestructure/FirebaseFavouriteListRepository";
import { useAuth } from "../../Authentication/Domain/AuthContext";



export default function Home() {

  const { user } = useAuth();
  const { movies, setMovies } = useMovies();
  const { setFavouriteList } = useFavouriteList();



  useEffect(() => {
    movieService(FirebaseMovieRepository)
      .getAll()
      .then((response) => {

        setMovies(response);

      })
      .catch((err) => console.error(err))
  }, []);

  useEffect(() => {

    if (!user) return;

    favouriteListService(FirebaseFavouriteListRepository)
      .getByID(user.id, user.idToken)
      .then((response) => {

        setFavouriteList(response);

      })
      .catch((err) => console.error(err))

  }, [user, user?.idToken, movies, setFavouriteList]);



  const categories = [...new Set(movies.flatMap(m => m.categories))].sort();
  const [filteredMovies, setFilteredMovies] = useState(movies);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [minRating, setMinRating] = useState(0);

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
        {filteredMovies.map((movie) => (

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


  );

} 