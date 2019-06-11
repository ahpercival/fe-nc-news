import React from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { Link } from '@reach/router'
import PageTitle from '../Title/PageTitle'
import Button from '../Buttons/Buttons'
import img from '../../assets/img/img.png'

const HomePage = () => {
    return (
        <Container>
            <Row>
                <Col md={4} className="d-flex">
                    <Card className="w-100 mb-4">
                        <Card.Img variant="top" src={img} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Articles</Card.Title>
                            <Card.Text>
                                Read articles posted by our users or post your own if you are part of the community.
                            </Card.Text>
                            <Button to='/articles' className="mt-auto">Go to Articles</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="d-flex">
                    <Card className="w-100 mb-4">
                        <Card.Img variant="top" src={img} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Topics</Card.Title>
                            <Card.Text>
                                See the topics discussed or create a new topic of discussion.
                            </Card.Text>
                            <Button to='/topic' className="mt-auto">Go to Topics</Button>
                        </Card.Body>
                    </Card>
                </Col>
                <Col md={4} className="d-flex">
                    <Card className="w-100 mb-4">
                        <Card.Img variant="top" src={img} />
                        <Card.Body className="d-flex flex-column">
                            <Card.Title>Users</Card.Title>
                            <Card.Text>
                                See full list of users, our users individual profiles and join our user community.
                         </Card.Text>
                            <Button to='/users' className="mt-auto">Go to Users</Button>
                        </Card.Body>
                    </Card>

                </Col>
            </Row>
        </Container>)
}

export default HomePage