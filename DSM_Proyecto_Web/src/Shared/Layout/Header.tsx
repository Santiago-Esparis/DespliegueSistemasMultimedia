
import { Container, Row, Col, Button, ButtonGroup } from "react-bootstrap";



interface HeaderProps {
  selectedLang: string;
  setSelectedLang: (lang: string) => void;
}

const Header = ({ selectedLang, setSelectedLang }: HeaderProps) => {

    return (
        <header className="border-bottom">
            <Container fluid className="py-3">
                {/* FILA PRINCIPAL */}
                <Row className="align-items-stretch">
                    {/* Logo */}
                    <Col md={3}>
                        <div className="border rounded h-100 d-flex align-items-center justify-content-center">
                            Logo
                        </div>
                    </Col>

                    {/* Título */}
                    <Col md={6}>
                        <div className="border rounded h-100 d-flex align-items-center justify-content-center">
                            <h2 className="m-0">Título</h2>
                        </div>
                    </Col>

                    {/* Idiomas + Login */}
                    <Col md={3}>
                        {/* Idiomas */}
                        <div className="mb-2 text-center">
                            <ButtonGroup>
                                <Button
                                    variant={selectedLang === 'es' ? 'secondary' : 'outline-secondary'}
                                    size="sm"
                                    onClick={() => setSelectedLang('es')}
                                >
                                    <img src="./Images/Idiomas/espana.png" width="24" alt="Español" />
                                </Button>
                                <Button
                                    variant={selectedLang === 'fr' ? 'secondary' : 'outline-secondary'}
                                    size="sm"
                                    onClick={() => setSelectedLang('fr')}
                                >
                                    <img src="./Images/Idiomas/francia.png" width="24" alt="Francés" />
                                </Button>
                                <Button
                                    variant={selectedLang === 'en' ? 'secondary' : 'outline-secondary'}
                                    size="sm"
                                    onClick={() => setSelectedLang('en')}
                                >
                                    <img src="./Images/Idiomas/reino-unido.png" width="24" alt="Inglés" />
                                </Button>
                            </ButtonGroup>
                        </div>

                        {/* Buscador o Login */}
                        <Button variant="primary">
                            Login
                        </Button>
                    </Col>
                </Row>
            </Container>
        </header>
    );
};

export default Header;