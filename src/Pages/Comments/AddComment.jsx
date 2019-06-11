import React, { Component } from 'react';
import { Container, Accordion, Card, Button, Form } from 'react-bootstrap'
import { postNewComment } from '../../api'

class AddComment extends Component {
    state = { comment: '' }
    render() {
        const activeButton = !!this.state.comment 
        return (
            <Container>
                <Accordion >
                    <Card>
                        <Card.Header>
                            <Accordion.Toggle as={Button} variant="link" eventKey="0">
                                Add A Comment
                            </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                            <Form ref="form" onSubmit={this.resetForm}>
                                <Form.Group controlId="formBasicPassword">
                                    <Form.Control onChange={this.updateUserInput} as="textarea" rows="3" placeholder="Add Comment" />
                                </Form.Group>
                                <Button disabled={!activeButton} variant="primary" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </Container>
        )
    }

    updateUserInput = event => {
        this.setState({ comment: event.target.value });
    };

    resetForm = event => {
        event.preventDefault()
        postNewComment(this.props.article_id, {
            username: this.props.userLoggedIn,
            body: this.state.comment
        }).then(postedComment => {
            this.props.showNewComment(postedComment)
        })
        this.setState({ comment: '' })
        this.refs.form.reset();
    }
}

export default AddComment