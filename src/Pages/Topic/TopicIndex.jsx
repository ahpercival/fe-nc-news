import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { getTopics } from '../../api'
import { Link } from '@reach/router'

class TopicIndex extends Component {
    state = { topics: [] }

    getAllTopics = () => {
        return getTopics()
            .then((topics) => {
                this.setState({
                    topics: topics
                });
            });
    }

    componentDidMount() {
        this.getAllTopics()
    }

    render() {
        return (
            <Container>
                <h1>Topics</h1>
                <ul>
                    {this.state.topics.map(topic => {
                        return (<li>
                            <h4><Link to={`/topic/${topic.slug}`}>{topic.slug}</Link></h4>
                            <p>{topic.description}</p>
                        </li>)
                    })}
                </ul>
                <h2>Add New Topic</h2>
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Topic</Form.Label>
                        <Form.Control type="text" placeholder="Enter Topic" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Description</Form.Label>
                        <Form.Control type="text" placeholder="Description of Topic" />
                    </Form.Group>
                    <Button disabled={true} variant="primary" type="submit">
                        Submit
                     </Button>
                </Form>
                <br />
            </Container>
        )
    }
}

export default TopicIndex