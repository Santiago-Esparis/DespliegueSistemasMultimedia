import { useState } from "react";
import "./LoginModal.css";
import authenticationService from "../../Features/Authentication/Service/authenticationService";
import FirebaseAuthenticationRepository from "../../Features/Authentication/Infraestructure/FirebaseAuthenticationRepository";
import type { User } from "../../Features/Authentication/Domain/User";

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



    authenticationService(FirebaseAuthenticationRepository).logIn(email, password)
    .then( (response: User) => {

        console.log ("Hello World" + response)

        console.log (response)
      
    })

    
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