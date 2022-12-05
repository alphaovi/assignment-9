import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import logo from "../../../images/Group 33141-1.png"
import "./Header.css"

const Header = () => {
    const [user] = useAuthState(auth);
    
    const handleSignOut = () => {
        signOut(auth);
    }
    return (
        <div className="fixed-top">
            {/* <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home"><img src={logo} height="30" alt="" /></Navbar.Brand>
                    <Nav className="me-right">
                        <Nav.Link href="home">Home</Nav.Link>
                        <Nav.Link href="description">Description</Nav.Link>
                        <Nav.Link href="blog">Blog</Nav.Link>
                        <Nav.Link href="contact">Contact</Nav.Link>
                        <Nav.Link href="login">Login</Nav.Link>
                        
                    </Nav>
                </Container>
            </Navbar> */}

            <Navbar collapseOnSelect expand="lg" sticky="top" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={logo} alt="" height="30" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            <Nav.Link as={Link} to="description">Description</Nav.Link>
                            <NavDropdown title="Blog" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="blog">Blog</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">
                                    Another action
                                </NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action/3.4">
                                    Separated link
                                </NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="about">About</Nav.Link>
                            {
                                user ?
                                    <button onClick={handleSignOut} className="btn btn-primary">Sign Out <small>{user.email}</small> </button>
                                    :
                                    <Nav.Link as={Link} to="login">
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;