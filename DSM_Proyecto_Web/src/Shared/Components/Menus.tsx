import Menu from "./Menu";

type Menus = {
    title: string[];  
    url: string[];
};



export default function Menus({ title, url }: Menus) {
    return (
        <div className="menus">
            {title.map((t, i) => (
                <Menu key={i} title={t} url={url[i]}></Menu>
            ))}
        </div>
    );
}