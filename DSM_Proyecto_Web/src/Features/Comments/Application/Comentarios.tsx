import "./Comentarios.css";
import Comentario from "./Comentario";
import type { Comment } from "../Domain/Comment";

type ComentariosProps = {
    comentarios: Comment[];
};

export default function Comentarios({ comentarios }: ComentariosProps) {
    return (
        <div className="comentarios-container">
            <h2>Comentarios</h2>
            <ul>
                {comentarios.map((c) => (
                    <Comentario
                        key={c.id}
                        userid={c.idUser}
                        comentario={c.comment}
                    />
                ))}
            </ul>
        </div>
    );
}