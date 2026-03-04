import { useState } from "react";
import "./LoginModal.css";

type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log("Login:", email, password);

    onClose();
  };

  return (
    <div className="login-overlay">

      <div className="login-modal">

        <h2>Iniciar sesión</h2>

        <form onSubmit={handleSubmit}>

          <input
            type="email"
            placeholder="Correo electrónico"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">
            Login
          </button>

        </form>

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

      </div>

    </div>
  );
}