import { LIST_TAGS } from "../types"

const tags = (data) => ({
    type: LIST_TAGS,
    payload: data,
})

export const getTags = dispatch => {
    fetch('/api/tag/', {
        credentials: 'same-origin'
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json()
        })
        .then(json => dispatch(tags(json)))
        .catch(error => console.error(error))
}