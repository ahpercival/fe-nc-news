import React, { Component } from 'react';
import { Container, Button, Card, Accordion, Form } from 'react-bootstrap';
import { getAllUsers } from '../../api'
import { Link } from '@reach/router'

class UsersIndex extends Component {

    state = { users: [] }

    componentDidMount() {
        getAllUsers().then((users) => {
            this.setState({ users });
        });
    }
    render() {
        return <Container>
            <h1> Our users </h1>
            <ul>
                {this.state.users.map(user => {
                    return <li>
                        <Link to={`/users/${user.username}`}>{user.username}</Link>
                    </li>
                })}
            </ul>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Join our community
                </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control type="text" placeholder="Enter username" />
                                    <Form.Text className="text-muted">
                                        As a user you can post articles, comments and votes
                                </Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control type="text" placeholder="Enter full name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Profile Picture</Form.Label>
                                    <Form.Control type="url" placeholder="Enter image URL" />
                                </Form.Group>
                                <Button variant="primary" type="submit">
                                    Submit
                                     </Button>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>

                </Card>
            </Accordion>
        </Container>
    }
}

export default UsersIndex