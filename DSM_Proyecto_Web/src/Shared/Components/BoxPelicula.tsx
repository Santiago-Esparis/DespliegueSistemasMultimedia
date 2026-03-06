import "./BoxPelicula.css";

type BoxProps = {
  title: string;
  width?: string;
  height?: string;
};

export default function BoxPelicula({ title, width = "200px", height = "150px" }: BoxProps) {
  return (
    <div
      className="boxPelicula"
      style={{ width, height }}
    >
      <h2>{title}</h2>
    </div>
  );
}