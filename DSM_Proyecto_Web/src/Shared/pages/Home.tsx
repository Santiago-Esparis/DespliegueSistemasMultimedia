import MovieCard from "../Components/MovieCard";
import "./Home.css";

export default function Home() {

  /*  AQUI SE SACAN LAS PELICULAS DE LA DB*/
  const peliculas = [
    {
      id: 1,
      titulo: "Baki-dou",
      imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540",
      sinopsis: "Baki Hanma, el luchador más fuerte del mundo, se enfrenta a un nuevo desafío: su padre, Yujiro Hanma, ha sido secuestrado por una organización misteriosa. Para rescatarlo, Baki debe enfrentarse a los miembros de esta organización, cada uno con habilidades únicas y letales. A medida que avanza en su misión, Baki descubre secretos ocultos sobre su familia y su propio poder.",
      etiqueta: "OVA",
    },
    { id: 2, titulo: "Otra", sinopsis: "Sinopsis de la película 2", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },
    { id: 3, titulo: "Otra", sinopsis: "Sinopsis de la película 3", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },
    { id: 4, titulo: "Otra", sinopsis: "Sinopsis de la película 4", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },
    { id: 5, titulo: "Otra", sinopsis: "Sinopsis de la película 5", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },
    { id: 6, titulo: "Otra", sinopsis: "Sinopsis de la película 6", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },
    { id: 7, titulo: "Otra", sinopsis: "Sinopsis de la película 7", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },
    { id: 8, titulo: "Otra", sinopsis: "Sinopsis de la película 8", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },
    { id: 9, titulo: "Otra", sinopsis:"Sinopsis de la película 9", imagenUrl:"https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },

  ];

  return (
    <div className="home-grid">
      {peliculas.map((p) => (
        <MovieCard key={p.id} {...p} />
      ))}
    </div>
  );
}