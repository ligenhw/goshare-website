import { GET_COMMENTS } from "../types"

const comments = (data) => ({
    type: GET_COMMENTS,
    payload: data,
})

export const queryComments = (blogId) => dispatch => {
    fetch("/api/comments/" + blogId)
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response.json()
    })
    .then(json => dispatch(comments(json)))
    .catch(error => console.error(error))
}

export const createComment = (data) => dispatch => {
    fetch('/api/comments/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(json => console.log("create success")) // TODO : requery comments
    .catch(error => console.error(error))
}