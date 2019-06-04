import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';

const Header = () => {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">AHP News</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <NavDropdown title="Topics" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Topics #1</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Topics #2</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Topics #3</NavDropdown.Item>
                        </NavDropdown>
                        <Nav.Link href="#link">Aricles</Nav.Link>
                        <Nav.Link href="#link">Users</Nav.Link>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Username" className="mr-sm-2" />
                        <Button type="submit" variant="outline-success">Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )

    //check user exists => make request => user/username => 
}

export default Header