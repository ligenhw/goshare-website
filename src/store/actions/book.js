import { LIST_BOOKS } from "../types"

const books = (data) => ({
    type: LIST_BOOKS,
    payload: data,
})

export const getBooks = dispatch => {
    fetch('/api/book')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json()
        })
        .then(json => dispatch(books(json)))
        .catch(error => console.error(error))
}