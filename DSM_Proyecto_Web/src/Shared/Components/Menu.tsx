import { Link } from "react-router-dom";
type Menu = {
    title: string;  
    url: string;
};

export default function Menu({ title, url }: Menu) {
    return (
        <div className="Menu">
            <Link to={url}><button>
                {title}
            </button></Link>
        </div>
    );
}