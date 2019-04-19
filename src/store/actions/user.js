import { history } from '../configureStore'
import { GET_USER } from "../types";

export const signUp = user => dispatch => {
    fetch('/api/user/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json()
        })
        .then(json => console.log('signup success', json)) //TODO: change it
        .catch(error => console.error(error))
}

export const signIn = user => dispatch => {
    fetch('/api/login/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response
        })
        .then(response => {
            history.push('/')
            dispatch(getUser())
        }) //TODO: change it
        .catch(error => console.error(error))
}

export const logout = () => dispatch => {
    fetch('/api/logout/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response
        })
        .then(response => dispatch(user(null)))
        .catch(error => console.error(error))
}

const user = (data) => ({
    type: GET_USER,
    payload: data,
})

export const getUser = () => dispatch => {
    fetch('/api/user/', {
        credentials: 'same-origin'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json()
        })
        .then(json => dispatch(user(json)))
        .catch(error => console.error(error))
}