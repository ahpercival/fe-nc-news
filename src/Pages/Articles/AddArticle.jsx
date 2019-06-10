import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { getTopics, postNewArticle } from '../../api'
import { navigate, Link } from '@reach/router'

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
        const activeButton = !!this.state.title && !!this.state.body && !!this.state.topic
        return (
            <Container>
                <h3>Post a new article</h3>
                <Form onSubmit={this.addNewArticle}>
                    <Form.Group controlId="exampleForm.ControlSelect1">
                        <Form.Label>Topic</Form.Label>
                        <Form.Text>
                            Select form the list below or add a <Link to='/topic'>new topic here</Link>
                        </Form.Text>
                        <Form.Control onChange={event => { this.updateUserInput('topic', event) }} as="select">
                            <option>Please select topic</option>
                            {this.state.topicSelection.map(topic => {
                                return <option key={`topSel${topic.slug}`}>{topic.slug}</option>
                            })}
                        </Form.Control>
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlInput1">
                        <Form.Label>Title</Form.Label>
                        <Form.Control onChange={event => { this.updateUserInput('title', event) }} type="text" placeholder="Name of your article" />
                    </Form.Group>
                    <Form.Group controlId="exampleForm.ControlTextarea1">
                        <Form.Label>Body</Form.Label>
                        <Form.Control onChange={event => { this.updateUserInput('body', event) }} as="textarea" rows="3" />
                    </Form.Group>
                    <Button type="submit" disabled={!activeButton} >Submit</Button>
                </Form>

            </Container>)
    }

    updateUserInput = (key, event) => {
        this.setState({ [key]: event.target.value });
    };

    addNewArticle = (event) => {
        event.preventDefault()
        const newArticle = { author: this.props.userLoggedIn, title: this.state.title, body: this.state.body, topic: this.state.topic }
        postNewArticle(newArticle).then(article => {
            navigate(`/articles/${article.article_id}`)
        })
        this.setState({ title: '', body: '', topic: '' });
    }

}

export default AddArticle