import { GET_COMMENTS } from '../types.js';

export const comments = (state={
  comments:[],
  authors:[],
}, action) => {
    switch(action.type) {
        case GET_COMMENTS:
          return action.payload
        default:
          return state
    }
}