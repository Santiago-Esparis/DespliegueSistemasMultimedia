import type { Movie } from "./Movie";





export interface MovieRepository {

    getAll: () => Promise<Movie[]>,
    updateMovie: (idToken: string, movie: Movie) => Promise<void>,

}




 