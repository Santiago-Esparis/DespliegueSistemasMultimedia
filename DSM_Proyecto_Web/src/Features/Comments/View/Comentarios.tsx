import "./Comentarios.css";
import Comentario from "./Comentario";
import type { Comment } from "../Domain/Comment";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../Authentication/Domain/AuthContext";
import commentService from "../Service/commentService";
import FirebaseCommentRepository from "../Infraestructure/FirebaseCommentRepository";
import { useParams } from "react-router-dom";

type ComentariosProps = {
    comentarios: Comment[];
};

export default function Comentarios({ comentarios }: ComentariosProps) {

    const [showForm, setShowForm] = useState(false);
    const [text, setText] = useState("");

    const { id } = useParams<{ id: string }>();
    const { user } = useAuth();

    // Manejo de undefined
    if (!id) {
        return <div>Película no encontrada</div>;
    }

    const movieID = id;

    // Si el usuario se deslogea, cerramos el formulario
    useEffect(() => {
        if (!user) {
            setShowForm(false)
        }
    }, [user])



    const handleSubmit = (e: React.FormEvent) => {

        if (!user) {
            console.error("Usuario no logeado. No se puede enviar comentarios")
            return;
        }

        e.preventDefault();

        let newComment: Comment = {

            idMovie: movieID,
            idUser: user.id,

            commentDate: new Date().toDateString(),
            comment: text,
            userEmail: user.email

        }

        commentService(FirebaseCommentRepository)
            .save(newComment, user.idToken)
            .then(() => {
            }).catch((err) => console.error(err));


        setText("");
        setShowForm(false);

    };

    return (
        <div className="comentarios-container">

            <h2> Comentarios </h2>

            {comentarios.length === 0 ? (

                <p> Aún no hay comentarios. </p>

            ) : (

                <ul>

                    {comentarios.map((comentario) => (

                        <Comentario
                            key={comentario.id ?? `${comentario.idUser}-${comentario.commentDate}`}
                            comment={comentario}
                        />

                    ))}

                </ul>

            )}

            {user ? (
                <button
                    className="btn-toggle"
                    onClick={() => setShowForm(!showForm)}
                >
                    {showForm ? "Cancelar" : "Añadir Comentario"}
                </button>
            ) : (
                <p>Inicia sesión para añadir comentarios.</p>
            )}


            {showForm && (

                <form onSubmit={handleSubmit}>
                    <textarea
                        className="comentario-textarea"
                        value={text}
                        onChange={(e) => setText(e.target.value)}
                        placeholder="Escribe tu comentario..."
                    />

                    <button
                        type="submit"
                        className="btn-submit"
                        disabled={!text.trim()}
                    >
                        Enviar
                    </button>
                </form>
            )}



        </div>


    );
}
