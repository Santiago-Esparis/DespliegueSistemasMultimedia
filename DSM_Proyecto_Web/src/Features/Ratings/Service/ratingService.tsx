import type { Rating } from "../Domain/Rating";
import type { RatingRepository } from "../Domain/RatingRepository";


const ratingService = (repository: RatingRepository) => {

    return {

        getByID: (userID: string, idToken: string) => repository.getByID(userID, idToken),
        addRating: (userID: string, idToken: string, ratingList: Rating) => repository.addRating(userID, idToken, ratingList),
        remRating: (userID: string, idToken: string, ratingList: Rating) => repository.remRating(userID, idToken, ratingList)

    }

}

export default ratingService