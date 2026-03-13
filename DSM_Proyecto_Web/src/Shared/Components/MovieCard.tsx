import "./MovieCard.css";
import { Link } from "react-router-dom";
import StarsRating from "./Starsrating";

interface MovieCardProps {
  id: number;
  titulo: string;
  sinopsis: string;
  imagenUrl: string;
  rating?: number;
  etiqueta?: string;
}

export default function MovieCard({
  id,
  titulo,
  sinopsis,
  imagenUrl,
  rating,
  etiqueta,
}: MovieCardProps) {
  return (
    <Link to={`/pelicula/${id}`} className="movie-card">
      <img src={imagenUrl} alt={titulo} />

      <div className="movie-overlay">
        <h4>{titulo}</h4>
        <p className="movie-sinopsis">{sinopsis}</p>
        <StarsRating rating={rating || 0}  />
        {etiqueta && <span className="movie-badge">{etiqueta}</span>}
      </div>
    </Link>
  );
}