import { createContext, useState } from "react";
import type { Movie } from "./Movie"





type MovieContextType = {
    movie: Movie | null;
    setMovie: (movie: Movie | null) => void;
};


const MovieContext = createContext<MovieContextType | undefined>(undefined);

export function MovieProvider({ children }: { children: React.ReactNode }) {

    const [movie, setMovie] = useState< Movie | null>(null);

    return (
        <MovieContext.Provider value={{ movie, setMovie }}>
            {children}
        </MovieContext.Provider>
    )
}