import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from '@reach/router'

const HomePage = () => {
    return (
        <Container>
            <h1>Home Page</h1>
            <Row>
                <Col>
                    <Card style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src="https://www.seoclerk.com/pics/399831-1fgnLO1444516150.jpg" />
                        <Card.Body>
                            <Card.Title>Articles</Card.Title>
                            <Card.Text>
                                Read articles posted by our users or post your own if you are part of the community.
                            </Card.Text>
                            <button variant="primary"><Link to='/articles'>Go to Articles</Link></button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src="https://www.eduinreview.com/blog/wp-content/uploads/2016/10/research-paper-topics.png" />
                        <Card.Body>
                            <Card.Title>Topics</Card.Title>
                            <Card.Text>
                                See the topics discussed or create a new topic of discussion.
                            </Card.Text>
                            <button variant="primary"><Link to='/topic'>Go to Topics</Link></button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col>
                    <Card style={{ width: '18rem', height: '22rem' }}>
                        <Card.Img variant="top" src="https://rietveld-ict.nl/wp-content/uploads/2014/01/users.png" />
                        <Card.Body>
                            <Card.Title>Users</Card.Title>
                            <Card.Text>
                                See full list of users, our users individual profiles and join our user community.
                         </Card.Text>
                            <button variant="primary"><Link to='/users'>Go to Users</Link></button>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
            <br /><br /><br />
        </Container>)
}

export default HomePage