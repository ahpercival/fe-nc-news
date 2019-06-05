import React, { Component } from 'react';
import { getUserbyUsername } from '../../api'
import DisplaySingleUser from './DisplaySingleUser'
import AllArticles from '../AllArticles/AllArticlesPage'

class SingleUserPage extends Component {
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
                <AllArticles />
            </div>
        )
    }

}

export default SingleUserPage