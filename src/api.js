import axios from 'axios'

const baseURL = 'https://ahp-nc-news.herokuapp.com/api/'


export const getAllArticles = () => {
    return axios.get(baseURL + 'articles').then(({ data: { articles } }) => {
        return articles
    });
}

export const getSingleArticle = id => {
    //GET articles/:article_id -- CHANGE HARDCODED ENDPOINT
    return axios.get(baseURL + 'articles/1').then(({ data: { article } }) => {
        return article
    });
}