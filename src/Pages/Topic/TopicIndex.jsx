import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
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
    }

    render() {
        const activeButton = !!this.state.slug && !!this.state.description
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