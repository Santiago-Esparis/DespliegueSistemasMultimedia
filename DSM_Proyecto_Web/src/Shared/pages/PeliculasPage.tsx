import { useParams } from "react-router-dom";
import LayoutPelicula from "../Layout/LayoutPelicula";

export default function PeliculaPage() {

  //const { id } = useParams();

  // Simulación de datos (luego esto vendrá de backend)
  const pelicula = {
    titulo: "Kizoku Tensei",
    imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540",
    generos: ["Anime", "Aventura", "Fantasia"],
    rating: 4.1,
    votos: 249,
    sinopsis: "Noah, el niño más fuerte del mundo..."
  };

  return <LayoutPelicula {...pelicula} />;
}