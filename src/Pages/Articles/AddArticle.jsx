import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { getTopics } from '../../api'

class AddArticle extends Component {
    state = {
        topicSelection: [],
        title: '',
        body: '',
        topic: ''
    }
    componentDidMount() {
        getTopics().then((topicSelection) => {
            this.setState({ topicSelection });
        });
    }
    render() {
        return (
            <Container>
                <h3>Post a new article</h3>
                <Form>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={event => { this.updateUserInput('title', event) }} type="text" placeholder="Name of your article" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Topic</Form.Label>
                        <Form.Control onChange={event => { this.updateUserInput('topic', event) }} as="select">
                            <option>Please select topic</option>
                            {this.state.topicSelection.map(topic => {
                                return <option key={`topSel${topic.slug}`}>{topic.slug}</option>
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Body</Form.Label>
                        <Form.Control onChange={event => { this.updateUserInput('body', event) }} as="textarea" rows="3" />
                    </Form.Group>
                    <Button>Submit</Button>
                </Form>

            </Container>)
    }

    updateUserInput = (key, event) => {
        this.setState({ [key]: event.target.value });
    };

}

export default AddArticle