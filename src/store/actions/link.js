import { LIST_LINKS } from "../types"

const links = (data) => ({
    type: LIST_LINKS,
    payload: data,
})

export const getLinks = dispatch => {
    fetch('/api/link')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json()
        })
        .then(json => dispatch(links(json)))
        .catch(error => console.error(error))
}