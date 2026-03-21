import type { MovieRepository } from "../Domain/MovieRepository";



const movieService = (repository: MovieRepository) => {


    return {

        getAll: () => repository.getAll()

    }


}

export default movieService


 