import { NavLink } from "react-router-dom";
import "./Menu.css";

type MenuProps = {
  title: string;
  url: string;
};

export default function Menu({ title, url }: MenuProps) {
  return (
    <NavLink
      to={url}
      className={({ isActive }) =>
        isActive ? "menu-link active" : "menu-link"
      }
    >
      {title}
    </NavLink>
  );
}