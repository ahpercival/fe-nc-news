import React, { Component } from 'react';
import { Container, Alert } from 'react-bootstrap';

class WrongUsername extends Component {
    state = {
        show: true,
    };

    render() {
        const handleDismiss = () => {
            this.setState({ show: false })
        };
        if (this.state.show) {
            return (
                <Container>
                    <Alert variant="danger" onClick={this.props.selectSignOut} onClose={handleDismiss} dismissible>
                        <Alert.Heading>Incorrect Username</Alert.Heading>
                    </Alert>
                </Container>
            );
        }
    }
}



export default WrongUsername