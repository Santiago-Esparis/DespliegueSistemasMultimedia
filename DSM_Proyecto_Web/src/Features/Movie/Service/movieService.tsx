import type { Movie } from "../Domain/Movie";
import type { MovieRepository } from "../Domain/MovieRepository";



const movieService = (repository: MovieRepository) => {


    return {

        getAll: () => repository.getAll(),
        updateMovie: (idToken: string, movie: Movie) => repository.updateMovie(idToken, movie)

    }


}

export default movieService


 