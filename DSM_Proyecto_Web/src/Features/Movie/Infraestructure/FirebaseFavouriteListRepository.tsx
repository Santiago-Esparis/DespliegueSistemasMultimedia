import type { AxiosResponse } from "axios";
import type { FavouriteListRepository } from "../Domain/FavouriteListRepository";
import axios from "axios";
import type { FavouriteList } from "../Domain/FavouriteList";





const FirebaseFavouriteListRepository: FavouriteListRepository = {

    getByID: async (userID: string, idToken: string) => {

        try {

            const response: AxiosResponse = await axios.get("https://proyecto-dsm-26-default-rtdb.europe-west1.firebasedatabase.app/MiLista/" + userID + ".json?auth=" + idToken)

            if (!response.data) {
                return {
                    id: userID,
                    movieID: []
                };
            }

            let ret: FavouriteList = {
                id: userID,
                movieID: response.data.movieID ?? []
            }

            return ret;

        } catch (error) {

            console.log("Error en la base de datos:", error)
            throw error

        }

    },

    addFav: async (userID: string, idToken: string, favList: FavouriteList) => {

        await axios.patch("https://proyecto-dsm-26-default-rtdb.europe-west1.firebasedatabase.app/MiLista/" + userID + ".json?auth=" + idToken,
            {
                movieID: favList.movieID
            });

    },

    remFav: async (userID: string, idToken: string, favList: FavouriteList) => {

        await axios.patch("https://proyecto-dsm-26-default-rtdb.europe-west1.firebasedatabase.app/MiLista/" + userID + ".json?auth=" + idToken,
            {
                movieID: favList.movieID
            });

    },


}

export default FirebaseFavouriteListRepository