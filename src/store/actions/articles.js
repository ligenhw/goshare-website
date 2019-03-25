import { LIST_ARTICLES, QUERY_ARTICLE } from '../types.js';

const listArticles = (data) => ({
    type: LIST_ARTICLES,
    payload: data,
})

export const queryAllArticles = () => dispatch => {
    fetch('/api/blog/')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json()
        })
        .then(json => dispatch(listArticles(json)))
        .catch(error => console.error(error))
}

const article = (data) => ({
    type: QUERY_ARTICLE,
    payload: data,
})

export const queryArticle = (id) => dispatch => {
    fetch('/api/blog/' + id)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json()
        })
        .then(json => dispatch(article(json)))
        .catch(error => console.error(error))
}