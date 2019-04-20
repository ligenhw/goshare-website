import { GET_COMMENTS } from "../types"
import { publishMsg } from './msg'

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

export const createComment = (blogId, data) => dispatch => {
    if (data.trim() === '') {
        dispatch(publishMsg("请输入评论内容"))
        return
    }

    fetch('/api/comments/' + blogId, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            content: data
        })
    })
    .then(response => {
        if (!response.ok) {
            throw new Error("HTTP error, status = " + response.status);
        }
        return response
    })
    .then(resp => {
        dispatch(publishMsg("评论发布成功"))
        dispatch(queryComments(blogId))
    })
    .catch(error => dispatch(publishMsg("评论发布失败")))
}