import { useEffect } from "react";
import { useParams } from "react-router-dom";
import LayoutPelicula from "./LayoutPelicula";
import { useMovies } from "../Domain/MovieContext";
import Comentarios from "../../Comments/View/Comentarios";
import commentService from "../../Comments/Service/commentService";
import { useComments } from "../../Comments/Domain/CommentContext";
import FirebaseCommentRepository from "../../Comments/Infraestructure/FirebaseCommentRepository";



export default function PeliculaPage() {

  const { id } = useParams<{ id: string }>();

  // Manejo de undefined
  if (!id) {
    return <div>Película no encontrada</div>;
  }

  const movieID = id;


  const { movies } = useMovies();
  const { comments, setComments } = useComments();


  useEffect(() => {
    commentService(FirebaseCommentRepository)
      .getByID(movieID)
      .then((response) => {

        setComments(response)

      }).catch((err) => console.error(err));
  }, [movieID])


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
