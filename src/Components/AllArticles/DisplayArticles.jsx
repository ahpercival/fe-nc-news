import React from 'react';

const DisplayArticles = props => {
    const { articles } = props
    return (<div>
        {articles.map(article => {
            return <li key={article.article_id}>
                {article.title + ' by ' + article.author}<br />
                <button>Like ({article.votes})</button>
            </li>
        })}
    </div>)
}

export default DisplayArticles