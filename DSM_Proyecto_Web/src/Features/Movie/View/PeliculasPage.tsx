import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LayoutPelicula from "./LayoutPelicula";
import { useMovies } from "../Domain/MovieContext";
import Comentarios from "../../Comments/View/Comentarios";
import commentService from "../../Comments/Service/commentService";
import { useComments } from "../../Comments/Domain/CommentContext";
import FirebaseCommentRepository from "../../Comments/Infraestructure/FirebaseCommentRepository";
import { useAuth } from "../../Authentication/Domain/AuthContext";
import { useFavouriteList } from "../Domain/FavouriteListContext";
import favouriteListService from "../Service/favouriteListService";
import FirebaseFavouriteListRepository from "../Infraestructure/FirebaseFavouriteListRepository";



export default function PeliculaPage() {

  const { user } = useAuth();
  const { movies } = useMovies();
  const { comments, setComments } = useComments();
  const { setFavouriteList } = useFavouriteList();


  const { id } = useParams<{ id: string }>();

  // Manejo de undefined
  if (!id) {
    return <div>Película no encontrada</div>;
  }

  const movieID = id;

  
  useEffect(() => {
    commentService(FirebaseCommentRepository)
      .getByID(movieID)
      .then((response) => {

        setComments(response)

      }).catch((err) => console.error(err));
  }, [movieID])

  useEffect(() => {

    if (!user) return;

    favouriteListService(FirebaseFavouriteListRepository)
      .getByID(user.id, user.idToken)
      .then((response) => {

        setFavouriteList(response);

      })
      .catch((err) => console.error(err))

  }, [user, user?.idToken, movies, setFavouriteList]);



  return (
    <>

      <LayoutPelicula
        movieID={movieID}
        titulo={movies[Number(movieID)].title}
        imagenUrl={movies[Number(movieID)].url}
        generos={movies[Number(movieID)].categories}
        rating={movies[Number(movieID)].rating}
        votos={movies[Number(movieID)].ratingVotes}
        sinopsis={movies[Number(movieID)].description}
      />

      <Comentarios
        comentarios={comments ?? []}  // Si comments = null --> array vacio
      />
    </>
  );

}
