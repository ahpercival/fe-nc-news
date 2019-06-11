import React, { Component } from 'react';
import { Container, Form, Button, Row, Col, Card } from 'react-bootstrap';
import { getTopics, postNewTopic } from '../../api'
import { Link, navigate } from '@reach/router'

class TopicIndex extends Component {
    state = { topics: [], slug: '', description: '' }

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
        window.scrollTo(0, 0);
    }

    render() {
        const activeButton = !!this.state.slug && !!this.state.description
        return (
            <Container>
                <h1>Topics</h1>

                <Row>
                    {this.state.topics.map(topic => {
                        return (
                            <Col sm="6" md="3">
                                <Card className="w-100 mb-3">
                                    <Card.Body>
                                        <Card.Title><Link to={`/topic/${topic.slug}`}>{topic.slug}</Link></Card.Title>
                                        <p>{topic.description}</p>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
                {this.props.userLoggedIn && <div>
                    <h2>Add New Topic</h2>
                    <Form onSubmit={this.addNewTopic}>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Topic</Form.Label>
                            <Form.Control onChange={event => { this.updateUserInput('slug', event) }} type="text" placeholder="Enter Topic" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Description</Form.Label>
                            <Form.Control onChange={event => { this.updateUserInput('description', event) }} type="text" placeholder="Description of Topic" />
                        </Form.Group>
                        <Button disabled={!activeButton} variant="primary" type="submit">
                            Submit
                     </Button>
                    </Form>
                </div>}
            </Container>
        )
    }

    updateUserInput = (topicInfo, event) => {
        this.setState({ [topicInfo]: event.target.value });
    };


    addNewTopic = (event) => {
        event.preventDefault()
        const newTopic = { slug: this.state.slug, description: this.state.description }
        postNewTopic(newTopic)
            .then(topic => {
                navigate(`/topic/${topic.slug}`)
            })
        this.setState({ slug: '', description: '' });
    }

}

export default TopicIndex