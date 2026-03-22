import type { AxiosResponse } from "axios";
import type { RatingRepository } from "../Domain/RatingRepository";
import axios from "axios";
import type { Rating } from "../Domain/Rating";





const FirebaseRatingRepository: RatingRepository = {


    getByID: async (userID: string, idToken: string) => {


        try {

            const response: AxiosResponse = await axios.get("https://proyecto-dsm-26-default-rtdb.europe-west1.firebasedatabase.app/RatingList/" + userID + ".json?auth=" + idToken)

            if (!response.data) {
                return {
                    id: userID,
                    movieID: [],
                    ratingValue: []
                };
            }

            let ret: Rating = {
                id: userID,
                movieID: response.data.movieID ?? [],
                ratingValue: response.data.ratingValue ?? []
            }

            return ret;

        } catch (error) {

            console.log("Error en la base de datos:", error)
            throw error

        }


    },


    addRating: async (userID: string, idToken: string, ratingList: Rating) => {

        await axios.patch("https://proyecto-dsm-26-default-rtdb.europe-west1.firebasedatabase.app/RatingList/" + userID + ".json?auth=" + idToken,
            {
                movieID: ratingList.movieID,
                ratingValue: ratingList.ratingValue,
            });

    },


    remRating: async (userID: string, idToken: string, ratingList: Rating) => { 

        await axios.patch("https://proyecto-dsm-26-default-rtdb.europe-west1.firebasedatabase.app/RatingList/" + userID + ".json?auth=" + idToken,
            {
                movieID: ratingList.movieID,
                ratingValue: ratingList.ratingValue,
            });

    },
}

export default FirebaseRatingRepository