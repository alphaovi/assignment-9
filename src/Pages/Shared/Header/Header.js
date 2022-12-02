import React from 'react';
import {Container, Nav, Navbar } from 'react-bootstrap';
import logo from "../../../images/Group 33141-1.png"
import "./Header.css"

const Header = () => {
    return (
        <div className="fixed-top">
            <Navbar bg="dark" variant="dark">
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
            </Navbar>
        </div>
    );
};

export default Header;