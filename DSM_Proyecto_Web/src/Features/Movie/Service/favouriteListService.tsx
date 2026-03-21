import type { FavouriteList } from "../Domain/FavouriteList";
import type { FavouriteListRepository } from "../Domain/FavouriteListRepository";



const favouriteListService = (repository: FavouriteListRepository) => {


    return {

        getByID: (userID: string, idToken: string) => repository.getByID(userID, idToken),
        addFav: (userID: string, idToken: string, favList: FavouriteList) => repository.addFav(userID, idToken, favList),
        remFav: (userID: string, idToken: string, favList: FavouriteList) => repository.remFav(userID, idToken, favList)

    }

}

export default favouriteListService