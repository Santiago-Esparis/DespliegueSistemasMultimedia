import "./Comentarios.css";
import Comentario from "../Components/Comentario";

type ComentariosProps = {
    comentarios: {
        userid: string;
        comentario: string;
    }[];
};

export default function Comentarios({ comentarios }: ComentariosProps) {
    return (
        <div className="comentarios-container">
            <h2>Comentarios</h2>
            <ul>
                {comentarios.map((c, index) => (
                    <Comentario
                        key={index}
                        userid={c.userid}
                        comentario={c.comentario}
                    />
                ))}
            </ul>
        </div>
    );
}