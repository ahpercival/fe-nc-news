import React from 'react';
import { Row, Col } from 'react-bootstrap';

const DisplaySingleUser = props => {
    const { singleUser } = props
    return (
        <div>
            <Row>
                <Col>
                    <img src={singleUser.avatar_url} alt={`${singleUser.username}`} />
                    <h3>Username: {singleUser.username}</h3>
                    <h3>Name: {singleUser.name}</h3>
                </Col>
            </Row>

        </div>
    )
}

export default DisplaySingleUser