import React, { Component } from 'react';
import { Container, Card, Row, Col } from 'react-bootstrap';
import { getAllUsers } from '../../api'
import { Link } from '@reach/router'
import PostNewUser from './PostNewUser'
import PageTitle from '../../Components/Title/PageTitle'
import Avatar from '../../Components/Images/Avatar'

class UsersIndex extends Component {

    state = { users: [] }

    componentDidMount() {
        getAllUsers().then((users) => {
            this.setState({ users });
        });
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <PageTitle> Our users </PageTitle>
                    </Col>
                </Row>
                {!this.props.userLoggedIn &&
                    <Row>
                        <Col className="mb-4">
                            <PostNewUser />
                        </Col>
                    </Row>
                }

                <Row>
                    {this.state.users.map(user => {
                        return (
                            <Col sm="6" md="3">
                                <Card className="w-100 mb-3">
                                    <Avatar src={user.avatar_url}></Avatar>
                                    <Card.Body>
                                        <Card.Title><Link to={`/users/${user.username}`}>{user.username}</Link></Card.Title>
                                    </Card.Body>
                                </Card>
                            </Col>
                        )
                    })}
                </Row>
            </Container>
        )
    }
}

export default UsersIndex