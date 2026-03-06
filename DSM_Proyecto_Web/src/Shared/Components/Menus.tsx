import { useEffect, useRef, useState } from "react";
import { useLocation } from "react-router-dom";
import Menu from "./Menu";
import "./Menus.css";

type MenuItem = {
  title: string;
  url: string;
};

type MenusProps = {
  menus: MenuItem[];
};

export default function Menus({ menus }: MenusProps) {

  const containerRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const [style, setStyle] = useState({
    left: 0,
    width: 0
  });

  useEffect(() => {

    const active = containerRef.current?.querySelector(".menu-link.active") as HTMLElement;

    if (active) {
      setStyle({
        left: active.offsetLeft,
        width: active.offsetWidth
      });
    }

  }, [location]);

  return (
    <div className="menus" ref={containerRef}>

      {menus.map((menu, i) => (
        <Menu key={i} title={menu.title} url={menu.url} />
      ))}

      <span
        className="menu-indicator"
        style={{
          left: style.left,
          width: style.width
        }}
      />

    </div>
  );
}