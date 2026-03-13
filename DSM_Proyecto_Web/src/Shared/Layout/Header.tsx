import { Container, Row, Col, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import "./Header.css";
import Menus from "../Components/Menus";
import { useState } from "react";
import LoginModal from "../Components/LoginModal";
import { useAuth } from "../../Features/Authentication/Domain/AuthContext";

interface HeaderProps {
    selectedLang: string;
    setSelectedLang: (lang: string) => void;

    userLoged: boolean;
    setUserLoged: (booleanStatement: boolean) => void;

}

const Header = ({ selectedLang, setSelectedLang, userLoged, setUserLoged }: HeaderProps) => {

    const [showAuthModal, setShowAuthModal] = useState(false);
    const [authMode, setAuthMode] = useState<'login' | 'signup'>('login');

    const { user, setUser } = useAuth();


    // Definimos el menú según si el usuario está logueado
    const menuItems = [
        { title: "Home", url: "/" },
        { title: "Películas", url: "/peliculas" },
        { title: "Series", url: "/series" },
        ...(userLoged ? [{ title: "Mi Lista", url: "/mi-lista" }] : []), // Solo si hay usuario
    ];

    return (
        <header className="header">
            <Container fluid>
                <Row className="align-items-stretch">

                    {/* Logo */}
                    <Col md={3}>
                        <div className="header-box">
                            Logo
                        </div>
                    </Col>

                    {/* Título */}
                    <Col md={6}>
                        <div className="header-box">
                            <h2 className="m-0">Título</h2>
                        </div>
                    </Col>

                    {/* Idiomas + Login */}
                    <Col md={3}>

                        <div className="lang-container">
                            <ButtonGroup>
                                <Button
                                    variant={selectedLang === 'es' ? 'secondary' : 'outline-secondary'}
                                    size="sm"
                                    onClick={() => setSelectedLang('es')}
                                >
                                    <img src="/Images/Idiomas/espana.png" width="24" alt="Español" />
                                </Button>

                                <Button
                                    variant={selectedLang === 'fr' ? 'secondary' : 'outline-secondary'}
                                    size="sm"
                                    onClick={() => setSelectedLang('fr')}
                                >
                                    <img src="/Images/Idiomas/francia.png" width="24" alt="Francés" />
                                </Button>

                                <Button
                                    variant={selectedLang === 'en' ? 'secondary' : 'outline-secondary'}
                                    size="sm"
                                    onClick={() => setSelectedLang('en')}
                                >
                                    <img src="/Images/Idiomas/reino-unido.png" width="24" alt="Inglés" />
                                </Button>
                            </ButtonGroup>
                        </div>


                        <Row className="mt-2">
                            <div className="d-flex gap-2 justify-content-center">

                                {!userLoged ? (

                                    <>
                                        <Button
                                            variant="primary"
                                            onClick={() => {
                                                setAuthMode('login');
                                                setShowAuthModal(true);
                                            }}
                                        >
                                            Log In
                                        </Button>

                                        <Button
                                            variant="outline-primary"
                                            onClick={() => {
                                                setAuthMode('signup');
                                                setShowAuthModal(true);
                                            }}
                                        >
                                            Sign Up
                                        </Button>

                                        <LoginModal
                                            isOpen={showAuthModal}
                                            mode={authMode}
                                            onClose={() => setShowAuthModal(false)}
                                            setUserLoged={setUserLoged}
                                        />
                                    </>

                                ) : (

                                    <Dropdown>
                                        <Dropdown.Toggle variant="success">
                                            Bienvenido {user?.email}
                                        </Dropdown.Toggle>

                                        <Dropdown.Menu>

                                            <Dropdown.Item>
                                                Preferencias
                                            </Dropdown.Item>

                                            <Dropdown.Divider />

                                            <Dropdown.Item
                                                className="text-danger"
                                                onClick={() => {
                                                    setUserLoged(false);
                                                    setUser(null);
                                                }}
                                            >
                                                Logout
                                            </Dropdown.Item>

                                        </Dropdown.Menu>
                                    </Dropdown>

                                )}

                            </div>
                        </Row>




                    </Col>
                </Row>
            </Container>

            {/* Menú dinámico */}
            <Menus menus={menuItems} />



        </header>

    );
};

export default Header;