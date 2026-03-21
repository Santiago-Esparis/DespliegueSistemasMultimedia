import type { AxiosResponse } from "axios";
import type { CommentRepository } from "../Domain/CommentRepository";
import type { Comment } from "../Domain/Comment";
import axios from "axios";






const FirebaseCommentRepository: CommentRepository = {


    getAll: async () => {

        try {

            const response: AxiosResponse = await axios.get("https://proyecto-dsm-26-default-rtdb.europe-west1.firebasedatabase.app/Comentarios.json")

            let arrayComment: Comment[] = []

            for (let key in response.data) {

                arrayComment.push({
                    id: key,
                    idMovie: response.data[key].idMovie,
                    idUser: response.data[key].idUser,
                    userEmail: response.data[key].userEmail,
                    commentDate: response.data[key].commentDate,
                    comment: response.data[key].comment
                })

            }

            return arrayComment

        } catch (error) {

            console.log("Error en la base de datos:", error)
            throw error

        }

    },

    getByID: async (movieID: string) => {

        try {

            const response: AxiosResponse = await axios.get('https://proyecto-dsm-26-default-rtdb.europe-west1.firebasedatabase.app/Comentarios.json?orderBy="idMovie"&equalTo="' + movieID + '"')

            const comments: Comment[] = [];

            for (let key in response.data) {

                comments.push({

                    id: key,

                    idMovie: response.data[key].idMovie,
                    idUser: response.data[key].idUser,
                    userEmail: response.data[key].userEmail,
                    
                    commentDate: response.data[key].commentDate,
                    comment: response.data[key].comment

                });

            }


            return comments;

        } catch (error) {

            console.log("Error en la base de datos:", error)
            throw error

        }

    },

    save: async (comment: Comment, idToken: string) => {

        await axios.post("https://proyecto-dsm-26-default-rtdb.europe-west1.firebasedatabase.app/Comentarios.json?auth=" + idToken + "", comment)

    }

}


export default FirebaseCommentRepository