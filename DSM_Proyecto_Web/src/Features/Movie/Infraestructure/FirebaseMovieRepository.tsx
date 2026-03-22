import type { AxiosResponse } from "axios";
import type { MovieRepository } from "../Domain/MovieRepository";
import type { Movie } from "../Domain/Movie";
import axios from "axios";



const FirebaseMovieRepository: MovieRepository = {
 
    getAll: async () => {
 
        try {

            const response: AxiosResponse = await axios.get("https://proyecto-dsm-26-default-rtdb.europe-west1.firebasedatabase.app/Peliculas.json")

            let arrayMovies: Movie[] = []

            for (let key in response.data) {
                arrayMovies.push({
                    id: key,
                    title: response.data[key].title,
                    director: response.data[key].director,
                    description: response.data[key].description,
                    categories: response.data[key].categories,
                    releaseDate: response.data[key].releaseDate,
                    rating: response.data[key].rating,
                    ratingVotes: response.data[key].ratingVotes,
                    url: response.data[key].url
                })
            }

            return arrayMovies

        } catch (error) {

            console.log("Error en la base de datos:", error)
            throw error

        }

    },

    updateMovie: async (idToken: string, movie: Movie) => {

        await axios.patch("https://proyecto-dsm-26-default-rtdb.europe-west1.firebasedatabase.app/Peliculas/" + movie.id + ".json?auth=" + idToken,
            {
                rating: movie.rating,
                ratingVotes: movie.ratingVotes,
            });

    },



}


export default FirebaseMovieRepository