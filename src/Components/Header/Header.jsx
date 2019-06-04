import React, { Component } from 'react';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { getTopics, getUserbyUsername } from '../../api'

class Header extends Component {
    state = { userInput: '', topics: [] }

    componentDidMount() {
        getTopics().then((topics) => {
            this.setState({ topics });
        });
    }

    render() {
        return (
            <Container>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="/home">AHP News</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="/home">Home</Nav.Link>
                            <NavDropdown title="Topics" id="basic-nav-dropdown">
                                <NavDropdown.Item href="#action/3.1">Topics #1</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.2">Topics #2</NavDropdown.Item>
                                <NavDropdown.Item href="#action/3.3">Topics #3</NavDropdown.Item>
                            </NavDropdown>
                            <Nav.Link href="/articles">Articles</Nav.Link>
                            <Nav.Link href="/users">Users</Nav.Link>
                        </Nav>
                        <Form onSubmit={this.submitUsername} inline>
                            <FormControl onChange={this.updateUserInput} type="text" placeholder="Username" className="mr-sm-2" />
                            <Button type="submit" variant="outline-success">Login</Button>
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        )
    }

    updateUserInput = event => {
        this.setState({ userInput: event.target.value });
    };
    
    submitUsername = event => {
        event.preventDefault()
        getUserbyUsername(this.state.userInput).then(user=>{
            this.props.loginUser(user)
        })
        
    }

}

export default Header

