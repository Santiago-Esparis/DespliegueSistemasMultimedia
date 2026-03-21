
import { useAuth } from "../../Authentication/Domain/AuthContext";
import "./LayoutPelicula.css";
import { useFavouriteList } from "../Domain/FavouriteListContext";
import favouriteListService from "../Service/favouriteListService";
import FirebaseFavouriteListRepository from "../Infraestructure/FirebaseFavouriteListRepository";

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
    const { favouriteList, setFavouriteList } = useFavouriteList();

    const isFav = favouriteList?.movieID?.includes(movieID) ?? false;
    
    const showFavouriteButton = !!user;
    const handlerAgregarFavorito = () => {

        if (!user || !favouriteList) return;

        // revisamos por duplicados
        if (favouriteList.movieID.includes(movieID)) return;

        const updateList = { ...favouriteList, movieID: [...favouriteList.movieID, movieID]};

        setFavouriteList(updateList);

        favouriteListService(FirebaseFavouriteListRepository)
        .addFav(user.id, user.idToken, updateList)
        .catch ( (err) => {
            console.log(err)
            setFavouriteList(favouriteList)
        })

    }

    const handlerQuitarFavorito = () => {

        if (!user || !favouriteList) return;

        const updateList = { ...favouriteList, movieID: favouriteList.movieID.filter(id => id !== movieID)};

        setFavouriteList(updateList);

        favouriteListService(FirebaseFavouriteListRepository)
        .remFav(user.id, user.idToken, updateList)
        .catch ( (err) => {
            console.log(err)
            setFavouriteList(favouriteList)
        })

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