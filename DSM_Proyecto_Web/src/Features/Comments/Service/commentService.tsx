import type { Comment } from "../Domain/Comment";
import type { CommentRepository } from "../Domain/CommentRepository";



const commentService = (repository: CommentRepository) => {


    return {

        getAll: () => repository.getAll(),
        getByID: (movieID: string) => repository.getByID(movieID),
        save: (comment: Comment, idToken: string) => repository.save(comment, idToken),
        modifyByID: (comment: Comment, idToken: string) => repository.modifyByID(comment, idToken),
        deleteComment: (comment: Comment, idToken: string) => repository.deleteComment(comment, idToken)

    }
}
 
export default commentService