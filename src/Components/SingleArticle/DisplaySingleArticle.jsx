import React from 'react';

const DisplaySingleArticle = props => {
    const { article } = props
    return (<div>
        <h1>{article.title}</h1>
        <h2>{article.topic}</h2>
        <h3>by {article.author} posted at {article.created_at}</h3>
        <p>{article.body}</p>
    </div>)
}

export default DisplaySingleArticle