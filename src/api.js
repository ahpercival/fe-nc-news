import axios from 'axios'

const baseURL = 'https://ahp-nc-news.herokuapp.com/api/'


//GET Requests
export const getAllArticles = (params) => {
    return axios.get(baseURL + '/articles', { params }).then(({ data }) => {
        return data
    })
}

export const getSingleArticle = id => {
    return axios.get(baseURL + `articles/${id}`).then(({ data: { article } }) => {
        return article
    });
}

export const getTopics = () => {
    return axios.get(baseURL + 'topics').then(({ data: { topics } }) => {
        return topics
    });
}

export const getAllUsers = () => {
    return axios.get(baseURL + 'users').then(({ data: { users } }) => {
        return users
    });
}

export const getUserbyUsername = (username) => {
    return axios.get(baseURL + `users/${username}`).then(({ data: { user } }) => {
        return user
    })
}

export const getCommentsByArticleID = article_id => {
    return axios.get(baseURL + `articles/${article_id}/comments`).then(({ data: { comments } }) => {
        return comments
    });
}

//PATCH Requests

export const patchArticleVote = (articleID, newVote) => {
    return axios.patch(baseURL + `articles/${articleID}`, { inc_votes: newVote }).then(({ data: { article } }) => {
        return article.votes
    })
}

export const patchCommentVote = (commentID, newVote) => {
    return axios.patch(baseURL + `/comments/${commentID}`, { inc_votes: newVote }).then(({ data: { comment } }) => {
        console.log(comment.votes)
        return comment.votes
    })
}

//POST Requests

export const postNewComment = (article_id, newComment) => {
    return axios.post(baseURL + `articles/${article_id}/comments`, newComment)
        .then(({ data: { comment } }) => {
            return comment
        })
}
