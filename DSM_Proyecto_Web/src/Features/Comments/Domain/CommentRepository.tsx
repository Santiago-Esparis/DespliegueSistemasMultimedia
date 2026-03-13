import type { Comment } from "./Comment";





export interface CommentRepository {

    getAll: () => Promise<Comment[]>

}