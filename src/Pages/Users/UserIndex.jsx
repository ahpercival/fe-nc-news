import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { getAllUsers } from '../../api'
import { Link } from '@reach/router'
import PostNewUser from './PostNewUser'

class UsersIndex extends Component {

    state = { users: [] }

    componentDidMount() {
        getAllUsers().then((users) => {
            this.setState({ users });
        });
    }
    render() {
        return <Container>
            <h1> Our users </h1>
            <PostNewUser />
            <br />
            <ul>
                {this.state.users.map(user => {
                    return <li key={`UN${user.username}`}>
                        <Link to={`/users/${user.username}`}>{user.username}</Link>
                    </li>
                })}
            </ul>
        </Container>
    }
}

export default UsersIndex