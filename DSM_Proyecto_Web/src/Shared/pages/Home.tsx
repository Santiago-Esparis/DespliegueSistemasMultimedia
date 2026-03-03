import { Link } from "react-router-dom";

export default function Home() {

  const peliculas = [
    { id: 1, titulo: "Kizoku Tensei" },
    { id: 2, titulo: "Otra Pelicula" }
  ];

  return (
    <div>
      {peliculas.map(p => (
        <div key={p.id}>
          <Link to={`/pelicula/${p.id}`}>
            {p.titulo}
          </Link>
        </div>
      ))}
    </div>
  );
}