import MovieCard from "../Components/MovieCard";
import "./Home.css";

export default function Home() {

  /*  AQUI SE SACAN LAS PELICULAS DE LA DB*/
  const peliculas = [
    {
      id: 1,
      titulo: "Baki-dou",
      imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540",
      etiqueta: "OVA",
    },
    { id: 2, titulo: "Otra", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },
    { id: 3, titulo: "Otra", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },
    { id: 4, titulo: "Otra", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },
    { id: 5, titulo: "Otra", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },
    { id: 6, titulo: "Otra", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },
    { id: 7, titulo: "Otra", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },
    { id: 8, titulo: "Otra", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },
    { id: 9, titulo: "Otra", imagenUrl: "https://bocdn.ecotree.green/blog/0001/01/ad46dbb447cd0e9a6aeecd64cc2bd332b0cbcb79.jpeg?d=960x540" },

  ];

  return (
    <div className="home-grid">
      {peliculas.map((p) => (
        <MovieCard key={p.id} {...p} />
      ))}
    </div>
  );
}