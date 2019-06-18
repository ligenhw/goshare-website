import { LIST_ARTICLES, LOAD_TYPE, LIST_ARCHIVES, QUERY_ARTICLE, GET_PROFILE_ARTICLES } from '../types.js';
import { history } from '../configureStore'

const listArticles = (data, offset) => ({
    type: LIST_ARTICLES,
    payload: {
        articles: data,
        offset,
    },
})

export const queryArticles = (offset) => dispatch => {
    dispatch(loadMoreType(loadingTypeMenu.LOADING))
    fetch('/api/article?limit=5&offset=' + offset)
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json()
        })
        .then(json => {
            dispatch(listArticles(json, offset))
            dispatch(loadMoreType(json.length === 5 ? loadingTypeMenu.MORE : loadingTypeMenu.NOMORE))
        })
        .catch(error => {
            dispatch(loadMoreType(loadingTypeMenu.MORE))
            console.error(error)
        })
}

export const loadingTypeMenu = {
    MORE: 0,
    LOADING: 1,
    NOMORE: 2,
}

const loadMoreType = (date) => ({
    type: LOAD_TYPE,
    payload: date,
})

const listArchives = (date) => ({
    type: LIST_ARCHIVES,
    payload: date,
})

export const queryArchives = () => dispatch => {
    fetch('/api/archives')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json()
        })
        .then(json => {
            dispatch(listArchives(json))})
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