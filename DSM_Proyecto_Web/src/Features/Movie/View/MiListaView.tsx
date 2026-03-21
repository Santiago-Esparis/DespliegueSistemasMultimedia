import { useEffect } from "react";
import { useMovies } from "../Domain/MovieContext";
import movieService from "../Service/movieService";
import FirebaseMovieRepository from "../Infraestructure/FirebaseMovieRepository";
import favouriteListService from "../Service/favouriteListService";
import FirebaseFavouriteListRepository from "../Infraestructure/FirebaseFavouriteListRepository";
import { useAuth } from "../../Authentication/Domain/AuthContext";
import MovieCard from "./MovieCard";
import { useFavouriteList } from "../Domain/FavouriteListContext";



export default function MiListaView() {

    const { user } = useAuth();


    const { movies, setMovies } = useMovies();
    const { favouriteList, setFavouriteList } = useFavouriteList();


    useEffect(() => {
        movieService(FirebaseMovieRepository)
            .getAll()
            .then((response) => {

                setMovies(response);

            })
            .catch((err) => console.error(err))
    }, [setMovies]);

    useEffect(() => {

        if (!user) return;

        favouriteListService(FirebaseFavouriteListRepository)
            .getByID(user.id, user.idToken)
            .then((response) => {

                setFavouriteList(response);

            })
            .catch((err) => console.error(err))

    }, [user, user?.idToken, movies, setFavouriteList]);

    // Filtrar solo favoritos
    const favoritosFiltrados = movies.filter(movie => favouriteList?.movieID?.includes(movie.id) ?? false);

    return (

        <div className="home-grid">

            {favoritosFiltrados.map(movie => (
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