import LayoutPelicula from "../Layout/LayoutPelicula";
import Comentarios from "../Layout/Comentarios";

export default function PeliculaPage() {

  const pelicula = {
    titulo: "Kizoku Tensei",
    imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540",
    generos: ["Anime", "Aventura", "Fantasia"],
    rating: 4.1,
    votos: 249,
    sinopsis: "Noah, el niño más fuerte del mundo..."
  };

  const comentarios = [
    {
      userid: "Juan",
      comentario: "Muy buena película, la animación me sorprendió bastante."
    },
    {
      userid: "Ana",
      comentario: "La historia es interesante aunque el ritmo podría ser mejor."
    },
    {
      userid: "Pedro",
      comentario: "Los personajes están muy bien desarrollados, me gustó mucho."
    },
    {
      userid: "Laura",
      comentario: "El opening es increíble, definitivamente veré más episodios."
    }
  ];

  return (
    <>
      <LayoutPelicula {...pelicula} />
      <Comentarios comentarios={comentarios} />
    </>
  );

}