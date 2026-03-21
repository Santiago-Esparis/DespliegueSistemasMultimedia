import type { FavouriteList } from "./FavouriteList";


export interface FavouriteListRepository {

    getByID: (userID: string, idToken: string) => Promise<FavouriteList>

}