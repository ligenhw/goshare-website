import { PUBLISH_MSG, REMOVE_MSG } from "../types";

export const publishMsg = (msg) => ({
    type: PUBLISH_MSG,
    payload: msg,
})

export const removeMsg = () => ({
    type: REMOVE_MSG,
    payload: null,
})
