import { Container, Row, Col, Button, ButtonGroup, Dropdown } from "react-bootstrap";
import "./Header.css";
import Menus from "../Components/Menus";
import { useState } from "react";
import LoginModal from "../../Features/Authentication/Application/LoginModal";
import { useAuth } from "../../Features/Authentication/Domain/AuthContext";
import movieService from "../../Features/Movie/Service/movieService";
import FirebaseMovieRepository from "../../Features/Movie/Infraestructure/FirebaseMovieRepository";
import commentService from "../../Features/Comments/Service/commentService";
import FirebaseCommentRepository from "../../Features/Comments/Infraestructure/FirebaseCommentRepository";

import { useMovies } from "../../Features/Movie/Domain/MovieContext";
import type { Comment } from "../../Features/Comments/Domain/Comment";


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
    const { setMovies } = useMovies();

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




            <Button
                variant="outline-primary"
                onClick={() => {
                    movieService(FirebaseMovieRepository)
                        .getAll()
                        .then((response) => {
                            console.log(response);

                            setMovies(response);
                        })
                        .catch((err) => console.error(err));
                }}
            >
                Get All Movies
            </Button>

            <Button
                variant="outline-primary"
                onClick={() => {
                    commentService(FirebaseCommentRepository).getAll().then((response) => {
                        console.log(response)
                    }).catch((err) => console.error(err));
                }}
            >
                Get All Comments
            </Button>

            <Button
                variant="outline-primary"
                onClick={() => {

                    commentService(FirebaseCommentRepository).getByID("1").then((response) => {
                        console.log(response)
                    }).catch((err) => console.error(err));

                }}
            >
                Get Filtered Comments by movieID
            </Button>

            <Button
                variant="outline-primary"
                onClick={() => {

                    let newComment: Comment = {
                    
                        idMovie: "6",
                        idUser: "ji7eKK8Vj3bjWYqk8z9DnbjeGku2", // id del admin@admin.es

                        commentDate: "15/05/2025",
                        comment: "Buen anime, gracias por subirlo"
                    }

                    let idToken = "eyJhbGciOiJSUzI1NiIsImtpZCI6IjczMmNhOTY3MTNiMWRkMTcyMzg1MDg0Y2U5ZjQzODFhZDAwY2VjZTQiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3NlY3VyZXRva2VuLmdvb2dsZS5jb20vcHJveWVjdG8tZHNtLTI2IiwiYXVkIjoicHJveWVjdG8tZHNtLTI2IiwiYXV0aF90aW1lIjoxNzczNzc4NjU2LCJ1c2VyX2lkIjoicW45c2JqUlVzb1pEMDRjSjg5QklNbXA1cVFXMiIsInN1YiI6InFuOXNialJVc29aRDA0Y0o4OUJJTW1wNXFRVzIiLCJpYXQiOjE3NzM3Nzg2NTYsImV4cCI6MTc3Mzc4MjI1NiwiZW1haWwiOiJhZG1pbkBhZG1pbi5lcyIsImVtYWlsX3ZlcmlmaWVkIjpmYWxzZSwiZmlyZWJhc2UiOnsiaWRlbnRpdGllcyI6eyJlbWFpbCI6WyJhZG1pbkBhZG1pbi5lcyJdfSwic2lnbl9pbl9wcm92aWRlciI6InBhc3N3b3JkIn19.V2knj22DvaTiCkQf5jt5mdMWXu3z9ODWkaexWW5jo6AO_s6eGgPYJvddv9M-_IdRnmQgb254_x4tTA4y_DQVWxPoywpTKvdt3BAmTkXXfmG0EEM2dkLwLHdVcm1TDXINo-Z0xxILZvApeLKitmFMyD4Xn1qOH5GRPiSumb_9syVt-Q_RaPAbarEOQUrTJRKG8agSIDuAPPr-v2hJ0MWwNywTub2mOhhiYkrNxGTvX2gvsxpnG1yeQo0pi4HsCP_bBn0JxL62WqWAVjrDfAxRwNU2HHfOAVEQX_R8MTW27HxY41fbnNfVaUkBLjV6AhaRl1L4DtTHrb_Mq_95vCr_1A"

                    commentService(FirebaseCommentRepository).save(newComment, idToken).then(() => {
                    }).catch((err) => console.error(err));

                    commentService(FirebaseCommentRepository).getByID("1").then((response) => {
                        console.log(response)
                    }).catch((err) => console.error(err));

                }}
            >
                Post Comment (Hardcodded)
            </Button>


        </header>

    );
};

export default Header;