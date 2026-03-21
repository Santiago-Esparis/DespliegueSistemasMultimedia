
import { useAuth } from "../../Authentication/Domain/AuthContext";
import "./LayoutPelicula.css";
import { useFavouriteList } from "../Domain/FavouriteListContext";

type LayoutPeliculaProps = {
    movieID: string;
    titulo: string;
    imagenUrl: string;
    generos: string[];
    rating: number;
    votos: number;
    sinopsis: string;
};

export default function LayoutPelicula({
    movieID,
    titulo,
    imagenUrl,
    generos,
    rating,
    votos,
    sinopsis,
}: LayoutPeliculaProps) {


    const { user } = useAuth();
    const { favouriteList } = useFavouriteList();

    const isFav = favouriteList?.movieID.includes(movieID) ?? false;
    
    const showFavouriteButton = !!user;
    const handlerAgregarFavorito = () => {

        if (!user) return;

        console.log("Agregar a favoritos: ", titulo, " usuario: ", user.email)

    }

    const handlerQuitarFavorito = () => {

        if (!user) return;

        console.log("Quitar de favoritos: ", titulo, " usuario: ", user.email)

    }


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

                {showFavouriteButton && (
                    isFav ? (
                        <button className="btn-favorito quitar" onClick={handlerQuitarFavorito}>
                            ❌ Quitar de favoritos
                        </button>
                    ) : (
                        <button className="btn-favorito" onClick={handlerAgregarFavorito}>
                            ❤️ Añadir a favoritos
                        </button>
                    )
                )}
            </div>

            {/* SINOPSIS */}
            <div className="pelicula-sinopsis">
                <h2>Sinopsis</h2>
                <p>{sinopsis}</p>
            </div>

        </div>
    );
}