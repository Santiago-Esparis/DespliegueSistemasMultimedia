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
                    categories: response.data[key].categories,
                    releaseDate: response.data[key].releaseDate,
                    rating: response.data[key].rating
                })
            }

            return arrayMovies

        } catch (error) {

            console.log("Error en la base de datos:", error)
            throw error

        }

    }


}


export default FirebaseMovieRepository