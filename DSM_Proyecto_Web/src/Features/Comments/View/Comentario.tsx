import { useAuth } from "../../Authentication/Domain/AuthContext";
import type { Comment } from "../Domain/Comment";
import "./Comentario.css";

type ComentarioProps = {
  comment: Comment
};

export default function Comentario({ comment }: ComentarioProps) {


  const { user } = useAuth();

  const isOwner = user?.id === comment.idUser;



  return (
    <li className="comentario">

      {/* FILA SUPERIOR */}
      <div className="comentario-top">

        {/* Izquierda: email + fecha */}
        <div className="comentario-info">
          <span className="comentario-user">
            {comment.userEmail}
          </span>

          <span className="comentario-date">
            {comment.commentDate}
          </span>
        </div>

        {/* Derecha: botones SOLO si es el dueño */}
        {isOwner && (
          <div className="comentario-actions">
            <button>Editar</button>
            <button>Borrar</button>
          </div>
        )}

      </div>

      {/* CAJA DEL COMENTARIO */}
      <div className="comentario-body">
        <p>{comment.comment}</p>
      </div>

    </li>
  );
}