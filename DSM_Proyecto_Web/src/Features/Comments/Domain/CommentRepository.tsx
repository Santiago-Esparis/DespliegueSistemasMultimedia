import type { Comment } from "./Comment";





export interface CommentRepository {

    getAll: () => Promise<Comment[]>,
    getByID: (movieID: string) => Promise<Comment[]>,
    save: (comment: Comment, idToken: string) => Promise<void>

}