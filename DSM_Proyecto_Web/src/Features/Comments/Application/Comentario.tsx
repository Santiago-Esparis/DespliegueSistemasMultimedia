import "./Comentario.css";

type ComentarioProps = {
  userid: string;
  comentario: string;
};

export default function Comentario({ userid, comentario }: ComentarioProps) {
  return (
    <li>
      <div className="comentario-user">{userid}</div>
      <div className="comentario-text">{comentario}</div>
    </li>
  );
}