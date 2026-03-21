import type { FavouriteList } from "./FavouriteList";


export interface FavouriteListRepository {

    getByID: (userID: string, idToken: string) => Promise<FavouriteList>,
    addFav: (userID: string, idToken: string, favList: FavouriteList) => Promise<void>,
    remFav: (userID: string, idToken: string, favList: FavouriteList) => Promise<void>

}

