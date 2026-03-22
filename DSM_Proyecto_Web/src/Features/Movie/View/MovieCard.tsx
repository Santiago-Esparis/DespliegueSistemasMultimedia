import "./MovieCard.css";
import { Link } from "react-router-dom";
import StarsRating from "../../Ratings/View/Starsrating";

interface MovieCardProps {
  id: string;
  titulo: string;
  sinopsis: string;
  imagenUrl: string;
  rating?: number;
  etiqueta?: string[];
}

function truncateWords(text: string, maxLength: number) {
  if (text.length <= maxLength) return text;
  const truncated = text.slice(0, maxLength);
  return truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
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
        <p></p>
        <p className="movie-sinopsis">{truncateWords(sinopsis, 100)}</p>
        <StarsRating rating={rating || 0} />
        {etiqueta && <span className="movie-badge">{etiqueta[0]}</span>}
      </div>
    </Link>
  );
}
