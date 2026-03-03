import "./MovieCard.css";
import { Link } from "react-router-dom";

interface MovieCardProps {
  id: number;
  titulo: string;
  imagenUrl: string;
  etiqueta?: string;
}

export default function MovieCard({
  id,
  titulo,
  imagenUrl,
  etiqueta,
}: MovieCardProps) {
  return (
    <Link to={`/pelicula/${id}`} className="movie-card">
      <img src={imagenUrl} alt={titulo} />

      <div className="movie-overlay">
        <h5>{titulo}</h5>
        {etiqueta && <span className="movie-badge">{etiqueta}</span>}
      </div>
    </Link>
  );
}