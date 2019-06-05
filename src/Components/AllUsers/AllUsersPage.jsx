import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import { getAllUsers } from '../../api'
import { Link } from '@reach/router'

class AllUsersPage extends Component {

    state = { users: [] }

    componentDidMount() {
        getAllUsers().then((users) => {
            this.setState({ users });
        });
    }
    render() {
        return <Container>
            <h1> Our users </h1>
            <ul>
                {this.state.users.map(user => {
                    return <li>
                        <Link to={`/users/${user.username}`}>{user.username}</Link>
                    </li>
                })}
            </ul>

        </Container>
    }
}

export default AllUsersPage