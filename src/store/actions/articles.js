import { LIST_ARTICLES, QUERY_ARTICLE, GET_PROFILE_ARTICLES } from '../types.js';
import { history } from '../configureStore'

const listArticles = (data) => ({
    type: LIST_ARTICLES,
    payload: data,
})

export const queryAllArticles = () => dispatch => {
    fetch('/api/article')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json()
        })
        .then(json => {
            dispatch(listArticles(json))})
        .catch(error => console.error(error))
}

const listProfileArticles = data => ({
    type: GET_PROFILE_ARTICLES,
    payload: data,
})

export const queryArticlesByUid = userId => dispatch => {
    fetch('/api/article?userId=' + userId)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json()
        })
        .then(json => {
            dispatch(listProfileArticles(json))})
        .catch(error => console.error(error))
}

const article = (data) => ({
    type: QUERY_ARTICLE,
    payload: data,
})

export const queryArticle = (id) => dispatch => {
    fetch('/api/article/' + id)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json()
        })
        .then(json => dispatch(article(json)))
        .catch(error => console.error(error))
}


export const createArticle = article => dispatch => {
    fetch('/api/article', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response
    })
    .then(json => history.push('/')) //TODO: change it
    .catch(error => console.error(error))
}

export const modifyArticle = article => dispatch => {
    fetch('/api/article', {
        method: 'put',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(article)
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response
    })
    .then(json => history.push('/article/' + article.id)) //TODO: change it
    .catch(error => console.error(error))
}

export const deleteArticle = id => dispatch => {
    fetch('/api/article/' + id, {
        method: 'delete',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response
    })
    .then(json => history.push('/')) //TODO: change it
    .catch(error => console.error(error))
}