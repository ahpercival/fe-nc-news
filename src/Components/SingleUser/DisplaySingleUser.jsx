import React from 'react';
import { Container } from 'react-bootstrap';

const DisplaySingleUser = props => {
    const { singleUser } = props
    return (<Container>
        <h1>User Profile</h1>
        <img src={singleUser.avatar_url} />
        <h3>Username: {singleUser.username}</h3>
        <h3>Name: {singleUser.name}</h3>
    </Container>)
}

export default DisplaySingleUser