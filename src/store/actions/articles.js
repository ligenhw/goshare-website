import { LIST_ARTICLES, QUERY_ARTICLE } from '../types.js';
import { history } from '../configureStore'

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
        .then(json => {
            console.log('listarticles ', listArticles(json))
            dispatch(listArticles(json))})
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


export const createArticle = article => dispatch => {
    fetch('/api/blog/', {
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
    fetch('/api/blog/' + article.id, {
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
    .then(json => history.push('/articleDetail?article_id=' + article.id)) //TODO: change it
    .catch(error => console.error(error))
}

export const deleteArticle = id => dispatch => {
    fetch('/api/blog/' + id, {
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