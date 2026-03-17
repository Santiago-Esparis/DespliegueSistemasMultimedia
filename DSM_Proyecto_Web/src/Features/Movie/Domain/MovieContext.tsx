import { createContext, useContext, useState } from "react";
import type { Movie } from "./Movie"




type MovieContextType = {
    movies: Movie[];
    setMovies: (movies: Movie[]) => void;
};

const MovieContext = createContext<MovieContextType | undefined>(undefined);

export function MovieProvider({ children }: { children: React.ReactNode }) {

    const [movies, setMovies] = useState<Movie[]>([]);

    return (
        <MovieContext.Provider value={{ movies, setMovies }}>
            {children}
        </MovieContext.Provider>
    );
}

export function useMovies() {
    const context = useContext(MovieContext);

    if (!context) {
        throw new Error("useMovies debe usarse dentro de MovieProvider");
    }

    return context;
}
