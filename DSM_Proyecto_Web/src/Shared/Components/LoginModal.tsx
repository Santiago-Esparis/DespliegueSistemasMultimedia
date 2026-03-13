import { useState } from "react";
import "./LoginModal.css";
import authenticationService from "../../Features/Authentication/Service/authenticationService";
import FirebaseAuthenticationRepository from "../../Features/Authentication/Infraestructure/FirebaseAuthenticationRepository";
import { useAuth } from "../../Features/Authentication/Domain/AuthContext";
import Button from "react-bootstrap/esm/Button";


type LoginModalProps = {
  isOpen: boolean;
  onClose: () => void;
  setUserLoged: (booleanStatement: boolean) => void;
  mode: 'login' | 'signup';
};

export default function LoginModal({ isOpen, onClose, setUserLoged, mode }: LoginModalProps) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setUser } = useAuth();

  if (!isOpen) return null;


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (mode === 'login') {
      // Lógica login
      authenticationService(FirebaseAuthenticationRepository)
        .logIn(email, password)
        .then((response) => {
          setUserLoged(true);
          setUser(response);
          onClose();
        })
        .catch((err) => console.error(err));
    } else if (mode === 'signup') {
      // Lógica signup
      authenticationService(FirebaseAuthenticationRepository)
        .signUp(email, password)
        .then((response) => {
          setUserLoged(true);
          setUser(response);
          onClose();
        })
        .catch((err) => console.error(err));
    }
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

          <Button type="submit" variant="primary">
            {mode === 'login' ? 'Log In' : 'Sign Up'}
          </Button>

        </form>

        <button className="close-btn" onClick={onClose}>
          ✕
        </button>

      </div>

    </div>
  );
}