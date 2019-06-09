import React from 'react';
import { Container, Button, Card, Accordion, Form } from 'react-bootstrap';

const NewUserForm = props => {
    const { username, name, avatar_url } = props
    const activeButton = !!username && !!name && !!avatar_url
    return (
        <Container>
            <Accordion>
                <Card>
                    <Card.Header>
                        <Accordion.Toggle as={Button} variant="link" eventKey="0">
                            Join our community
            </Accordion.Toggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                        <Card.Body>
                            <Form onSubmit={props.addNewUser}>
                                <Form.Group>
                                    <Form.Label>Username</Form.Label>
                                    <Form.Control onChange={event => { props.updateUserInput('username', event) }} type="text" placeholder="Enter username" />
                                    <Form.Text className="text-muted">
                                        As a user you can post articles, comments and votes
                            </Form.Text>
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control onChange={event => { props.updateUserInput('name', event) }} type="text" placeholder="Enter full name" />
                                </Form.Group>
                                <Form.Group>
                                    <Form.Label>Profile Picture</Form.Label>
                                    <Form.Control onChange={event => { props.updateUserInput('avatar_url', event) }} type="url" placeholder="Enter image URL" />
                                </Form.Group>
                                <Button disabled={!activeButton} variant="primary" type="submit">
                                    Submit
                                 </Button>
                            </Form>
                        </Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Container>
    )

}

export default NewUserForm