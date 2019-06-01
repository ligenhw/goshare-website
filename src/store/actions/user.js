import { history } from '../configureStore'
import { GET_USER } from "../types"
import { publishMsg } from './msg'

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
            return response
        })
        .then(json => {
            dispatch(publishMsg('注册成功,请登录'))
            history.replace('/login')
        }) //TODO: change it
        .catch(error => dispatch(publishMsg('注册失败')))
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
            dispatch(getUser)
        }) //TODO: change it
        .catch(error => dispatch(publishMsg('用户名或密码错误')))
}

export const ghSignIn = code => dispatch => {
    fetch('/api/ghlogin/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: code
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response
        })
        .then(response => {
            history.push('/')
            dispatch(getUser)
        }) //TODO: change it
        .catch(error => dispatch(publishMsg('Github 登录失败, 请重试')))
}

export const qqSignIn = code => dispatch => {
    fetch('/api/qqlogin/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: code
        })
    })
        .then(response => {
            if (!response.ok) {
                throw new Error("HTTP error, status = " + response.status);
            }
            return response
        })
        .then(response => {
            history.push('/')
            dispatch(getUser)
        }) //TODO: change it
        .catch(error => dispatch(publishMsg('QQ 登录失败, 请重试')))
}

export const alipaySignIn = code => dispatch => {
    fetch('/api/alipaylogin/', {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            code: code
        })
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
        .catch(error => dispatch(publishMsg('支付宝 登录失败, 请重试')))
}

export const logout = dispatch => {
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
        .catch(error => dispatch(publishMsg('登出失败')))
}

const user = (data) => ({
    type: GET_USER,
    payload: data,
})

export const getUser = dispatch => {
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