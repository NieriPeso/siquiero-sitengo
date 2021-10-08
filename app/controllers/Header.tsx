import * as React from 'react'
import { Link } from 'react-router-dom';
import {
    Navbar,
    Nav,
    Container,
    Form,
    FormControl,
    Button,
    NavDropdown,
    Image,
} from 'react-bootstrap';

const Header: React.FC = () => {

    return (
        <header id="header" role="banner">
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container className="bg-primary rounded">
                    <Navbar.Brand as={Link} to="inicio">
                        <Image src={require('../assets/images/favicon2.png')} width="48" height="38" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll" className="justify-content-between" role="navigation">
                        <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '350px' }} navbarScroll>
                            <Nav.Link href="#siquiero"><strong>SiQuiero</strong></Nav.Link>
                            <Nav.Link href="#sitengo"><strong>SiTengo</strong></Nav.Link>
                            <NavDropdown title="Aprende" id="aprende-dropdown">
                                <NavDropdown.Item href="#preguntas-frecuentes">Preguntas frecuentes</NavDropdown.Item>
                                <NavDropdown.Item href="#blog">Blog</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#sobre-el-proyecto">Sobre el proyecto</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>

                        <Nav className="mr-auto my-2 my-lg-0" style={{ maxHeight: '100px' }} navbarScroll>
                            <Nav.Link href="registro"><strong>Registrate</strong></Nav.Link>
                            <Nav.Link href="login"><strong>Iniciar sesión</strong></Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    )
}

export default Header;