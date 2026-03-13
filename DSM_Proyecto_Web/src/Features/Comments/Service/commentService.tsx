import type { CommentRepository } from "../Domain/CommentRepository";



const commentService = (repository: CommentRepository) => {


    return {

        getAll: () => repository.getAll()

    }
}

export default commentService