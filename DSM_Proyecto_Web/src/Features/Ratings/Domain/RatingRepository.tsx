import type { Rating } from "./Rating";



export interface RatingRepository {

    getByID: (userID: string, idToken: string) => Promise<Rating>,
    addRating: (userID: string, idToken: string, ratingList: Rating) => Promise<void>,
    remRating: (userID: string, idToken: string, ratingList: Rating) => Promise<void>

}