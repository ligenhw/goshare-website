

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
