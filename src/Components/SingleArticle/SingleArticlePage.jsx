import React, { Component } from 'react';
import DisplaySingleArticle from './DisplaySingleArticle'
import { getSingleArticle } from '../../api'

class SingleArticle extends Component {
    state = { singleArticle: {} }
    componentDidMount() {
        getSingleArticle(this.props.article_id).then((article) => {
            this.setState({ singleArticle: article });
        })
    }
    render() {
        return (<div>
            {this.state.singleArticle && (<DisplaySingleArticle article={this.state.singleArticle} />)}
        </div>)
    }

    //onSubmit ==== event.preventDefault()

}

export default SingleArticle