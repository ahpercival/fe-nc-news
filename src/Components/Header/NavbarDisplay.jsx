import React from 'react';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from '@reach/router'

const NavbarDisplay = props => {
    return (
        <Container>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand>AHP News</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link><Link to='/home'>Home</Link></Nav.Link>
                        <NavDropdown title="Topics" id="basic-nav-dropdown">
                            {props.topics.map(topic => {
                                return <NavDropdown.Item key={`droMe${topic.slug}`}><Link to={`/topic/${topic.slug}`}>{topic.slug}</Link></NavDropdown.Item>
                            })}
                        </NavDropdown>
                        <Nav.Link><Link to='/articles'>Articles</Link></Nav.Link>
                        <Nav.Link><Link to='/users'>Users</Link></Nav.Link>
                    </Nav>

                    {!props.userLoggedIn && <Form onSubmit={props.submitUsername} inline>
                        <FormControl onChange={props.updateUserInput} type="text" placeholder="Username" className="mr-sm-2" />
                        <Button disabled={!props.userInput.length} type="submit" variant="outline-success">Login</Button>
                    </Form>}
                    {props.userLoggedIn && <Navbar.Brand inline="true">Hello {props.userLoggedIn}</Navbar.Brand>}
                    {props.userLoggedIn && <Button onClick={props.selectSignOut} inline="true">Sign out</Button>}
                </Navbar.Collapse>
            </Navbar>
        </Container>
    )
}

export default NavbarDisplay