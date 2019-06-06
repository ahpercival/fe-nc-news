import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class AddArticle extends Component {
    state = {}
    componentDidMount() {

    }
    render() {
        return (
            <Container>
                <h3>Add Article Form</h3>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" placeholder="Name of your article" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Topic</Form.Label>
                        <Form.Control as="select">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Body</Form.Label>
                        <Form.Control as="textarea" rows="3" />
                    </Form.Group>
                    <Button>Submit</Button>
                </Form>

            </Container>)
    }

    //onSubmit ==== event.preventDefault()

}

export default AddArticle