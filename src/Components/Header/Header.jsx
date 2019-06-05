import React, { Component } from 'react';
import { Container, Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { getTopics, getUserbyUsername } from '../../api'

class Header extends Component {
    state = { userInput: '', correctUsername: null, topics: [] }

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
                                {this.state.topics.map(topic => {
                                    return <NavDropdown.Item key={`droMe${topic.slug}`} href={`/articles?topic=${topic.slug}`}>{topic.slug}</NavDropdown.Item>
                                })}
                            </NavDropdown>
                            <Nav.Link href="/articles">Articles</Nav.Link>
                            <Nav.Link href="/users">Users</Nav.Link>
                        </Nav>
                        {!this.props.userLoggedIn && <Form onSubmit={this.submitUsername} inline>
                            <FormControl onChange={this.updateUserInput} type="text" placeholder="Username" className="mr-sm-2" />
                            <Button disabled={!this.state.userInput.length} type="submit" variant="outline-success">Login</Button>
                        </Form>}
                        {this.props.userLoggedIn && <Button onClick={this.selectSignOut} inline="true">Sign Out</Button>}
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
        getUserbyUsername(this.state.userInput).then(user => {
            this.setState({ correctUsername: true })
            this.props.loginUser(user)
        }).catch(error => {
            error && this.setState({ correctUsername: false })
        })
    }
    
    selectSignOut = event => {
        event.preventDefault()
        this.props.logoutUser()
        this.setState({ userInput: '', correctUsername: true })
    }
}

export default Header

