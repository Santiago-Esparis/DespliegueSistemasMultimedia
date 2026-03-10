import "./LayoutPelicula.css";

type LayoutPeliculaProps = {
    titulo: string;
    imagenUrl: string;
    generos: string[];
    rating: number;
    votos: number;
    sinopsis: string;
};

export default function LayoutPelicula({
    titulo,
    imagenUrl,
    generos,
    rating,
    votos,
    sinopsis,
}: LayoutPeliculaProps) {
    return (
        <div className="pelicula-container">

            <div className="pelicula-header">

                <div className="poster-container">
                    <img src={imagenUrl} alt={titulo} />
                </div>

                <div className="pelicula-info">
                    <h1>{titulo}</h1>

                    <div className="peliculas-genero-block">
                        {generos.map((genero, index) => (
                            <span key={index} className="pelicula-genero">
                                {genero}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="pelicula-rating">
                    <div className="rating-number">{rating}</div>
                    <div className="rating-votos">{votos} votos</div>
                </div>

            </div>

            {/* SINOPSIS */}
            <div className="pelicula-sinopsis">
                <h2>Sinopsis</h2>
                <p>{sinopsis}</p>
            </div>

        </div>
    );
}