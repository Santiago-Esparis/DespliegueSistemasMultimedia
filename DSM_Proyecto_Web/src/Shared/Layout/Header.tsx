import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";
import "./Header.css";
import Menus from "../Components/menus";

interface HeaderProps {
    selectedLang: string;
    setSelectedLang: (lang: string) => void;
}

const Header = ({ selectedLang, setSelectedLang }: HeaderProps) => {

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

                        <Button variant="primary" className="login-button">
                            Login
                        </Button>

                    </Col>

                </Row>
            </Container>
            <Menus title={["Home", "About", "Contact"]} url={["/", "/about", "/contact"]}></Menus>
        </header>

    );
};

export default Header;