import { useState } from "react";
import { useAuth } from "../../Authentication/Domain/AuthContext";
import type { Comment } from "../Domain/Comment";
import FirebaseCommentRepository from "../Infraestructure/FirebaseCommentRepository";
import commentService from "../Service/commentService";
import "./Comentario.css";

type ComentarioProps = {
  comment: Comment
};

export default function Comentario({ comment }: ComentarioProps) {


  const { user } = useAuth();
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(comment.comment)

  const isOwner = user?.id === comment.idUser;


  const handleDelete = () => {

    if (!user || !comment.id) {
      console.error("No se puede borrar el comentario.")
      return;
    }

    const confirmDelete = window.confirm("¿Seguro que quiere borrar el comentario?")
    if (!confirmDelete) return;

    commentService(FirebaseCommentRepository)
      .deleteComment(comment, user.idToken)
      .then(() => { })
      .catch()

  }

  const handleEditStart = () => {
    setIsEditing(true);
  }

  const handleCancel = () => {
    setIsEditing(false);
    setEditedText(comment.comment)
  }

  const handleModify = () => {

    if (!user || !comment.id) {
      console.error("No se puede borrar el comentario.")
      return;
    }

    comment.comment = editedText

    commentService(FirebaseCommentRepository)
      .modifyByID(comment, user.idToken)
      .then(() => { })
      .catch((error) => {
        console.error("Error al editar:", error);
      })

    setIsEditing(false)

  }



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
            <button onClick={handleEditStart}>Editar</button>
            <button onClick={handleDelete}> Borrar </button>
          </div>
        )}

      </div>

      {/* CAJA DEL COMENTARIO */}
      <div className="comentario-body">

        {isEditing ? (
          <>
            <textarea
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              className="comentario-textarea"
            />

            <div className="comentario-edit-actions">
              <button onClick={handleModify} disabled={!editedText.trim()}>
                Guardar
              </button>
              <button onClick={handleCancel}>
                Cancelar
              </button>
            </div>
          </>
        ) : (
          <p>{comment.comment}</p>
        )}

      </div>

    </li>
  );
}