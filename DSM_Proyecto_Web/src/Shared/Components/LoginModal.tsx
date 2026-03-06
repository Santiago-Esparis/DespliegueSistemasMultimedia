import { useState } from "react";
import "./LoginModal.css";
import axios from "axios";

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


    const authData = {

      email: email,
      password: password,
      returnSecureToken: true

    }


    axios.post ("https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAgLsZsIw1vmISe-YZGjeyJmVIkBQRH7cw", authData)
    .then( (response) => {

      console.log (response)

    })
    .catch( (error) => console.log("Error de Autentificación: " + error))


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