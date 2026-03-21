import { createContext, useContext, useState } from "react";
import type { FavouriteList } from "./FavouriteList"




type FavouriteListContextType = {

    favouriteList: FavouriteList | null;
    setFavouriteList: (favouriteList: FavouriteList) => void;

}

const FavouriteListContext = createContext<FavouriteListContextType | undefined>(undefined);

export function FavouriteListProvider({ children }: { children: React.ReactNode }) {

    const [favouriteList, setFavouriteList] = useState<FavouriteList | null>(null);

    return (
        <FavouriteListContext.Provider value={{ favouriteList, setFavouriteList }}>
            {children}
        </FavouriteListContext.Provider>
    );

}

export function useFavouriteList() {
    const context = useContext(FavouriteListContext);

    if (!context) {
        throw new Error("useMovies debe usarse dentro de MovieProvider");
    }

    return context;
}