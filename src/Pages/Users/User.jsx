import React, { Component } from 'react';
import { getUserbyUsername } from '../../api'
import DisplaySingleUser from '../../Components/Users/DisplaySingleUser'
import ArticleIndex from '../Articles/ArticleIndex'

class User extends Component {
    state = { singleUser: {} }

    componentDidMount() {
        getUserbyUsername(this.props.username).then((singleUser) => {
            this.setState({ singleUser });
        });
    }
    render() {
        return (
            <div>
                {this.state.singleUser && <DisplaySingleUser singleUser={this.state.singleUser} />}
                <ArticleIndex />
            </div>
        )
    }

}

export default User