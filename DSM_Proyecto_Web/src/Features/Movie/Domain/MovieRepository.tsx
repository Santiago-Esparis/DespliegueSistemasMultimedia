import type { Movie } from "./Movie";





export interface MovieRepository {

    getAll: () => Promise<Movie[]>

}




 