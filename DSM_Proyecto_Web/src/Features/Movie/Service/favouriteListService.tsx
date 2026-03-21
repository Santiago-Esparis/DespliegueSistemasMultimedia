import type { FavouriteListRepository } from "../Domain/FavouriteListRepository";



const favouriteListService = (repository: FavouriteListRepository) => {


    return {

        getByID: (userID: string, idToken: string) => repository.getByID(userID, idToken) 

    }

}

export default favouriteListService