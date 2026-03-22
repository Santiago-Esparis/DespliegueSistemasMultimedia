import { createContext, useContext, useState } from "react";
import type { Rating } from "./Rating"




type RatingContext = {

    ratingList: Rating | null;
    setRatingList: ( ratingList: Rating ) => void;

}


const RatingContext = createContext<RatingContext | undefined>(undefined);


export function RatingProvider ({ children }: { children: React.ReactNode }) {

    const [ratingList, setRatingList] = useState<Rating | null>(null);

    return (
        <RatingContext.Provider value={{ ratingList, setRatingList }}>
            {children}
        </RatingContext.Provider>
    );

}

export function useRating () {

    const context = useContext(RatingContext);

    if (!context) {
        throw new Error ("useRating debe usarse dentro de RatingProvider")
    }

    return context;
}