import "./Comentarios.css";
import Comentario from "./Comentario";
import type { Comment } from "../Domain/Comment";

type ComentariosProps = {
    comentarios: Comment[];
};

export default function Comentarios({ comentarios }: ComentariosProps) {
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

            )

            }

        </div>


    );
}
