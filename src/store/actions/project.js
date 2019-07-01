import { LIST_PROJECTS } from "../types"

const projects = (data) => ({
    type: LIST_PROJECTS,
    payload: data,
})

export const getProjects = dispatch => {
    fetch('/api/project')
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response.json()
        })
        .then(json => dispatch(projects(json)))
        .catch(error => console.error(error))
}